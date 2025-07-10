import React, { useEffect } from 'react';

const PasswordGenerator = ({ setPassword, useLettre, useNombre, useSymbole, Remember, Length }) => {
  const prompt = `
Generate one secure password with the following options:
- Use letters: ${useLettre}
- Use numbers: ${useNombre}
- Use symbols: ${useSymbole}
- Easy to remember: ${Remember}
- Desired length: ${Length}

Return ONLY a valid JSON object like this:
{
  "password": "SunHorse42!",
  "type": "good"
}
Do not include any explanation or extra text. Just return the JSON.
type need to be weak or good or strong (use your knowldage to give return this type) 
`;

  useEffect(() => {
    const fetchAIAnswer = async () => {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer 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',
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://your-site.com',
            'X-Title': 'Password Generator App',
          },
          body: JSON.stringify({
            model: 'openai/gpt-4o',
            messages: [
              {
                role: 'user',
                content: prompt,
              },
            ],
            temperature: 0.9,
            max_tokens: 300,
          }),
        });

        const data = await response.json();
        console.log("🔎 AI full response:", data);

        if (data.error?.code === 402) {
          console.error("❌ Out of credits or token limit too high.");
          setPassword({ password: "Credit Error", type: "weak" });
          return;
        }

        let fullMessage = data.choices?.[0]?.message?.content;

        if (!fullMessage) {
          console.error("⚠️ GPT response was empty or invalid:", data);
          setPassword({ password: " ", type: "weak" });
          return;
        }

        fullMessage = fullMessage.replace(/<think>[\s\S]*?<\/think>/g, "").trim();

        fullMessage = fullMessage.replace(/```json?\n?/, '').replace(/```$/, '').trim();

        try {
          const parsed = JSON.parse(fullMessage);

          if (parsed.password && parsed.type) {
            setPassword(parsed);
          } else {
            console.error("⚠️ JSON missing expected keys:", parsed);
            setPassword({ password: " ", type: "weak" });
          }
        } catch (err) {
          console.error("❌ Failed to parse JSON:", fullMessage);
          setPassword({ password: "Parse Error", type: "weak" });
        }

      } catch (error) {
        console.error("❌ Network/API error:", error);
        setPassword({ password: "Network Error", type: "weak" });
      }
    };

    fetchAIAnswer();
  }, [useLettre, useNombre, useSymbole, Remember, Length]);

  return null;
};

export default PasswordGenerator;
