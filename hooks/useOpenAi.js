import { useState, useEffect } from "react";

const useOpenAi = (text) => {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.openai.com/v1/completions`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
              },
              body: JSON.stringify({
                prompt: text,
                temperature: 0.6,
                max_tokens: 500,
                top_p: 1,
                frequency_penalty: 0.5,
                presence_penalty: 0,
              }),
            }
          );
          const data = await response.json();
          setCode(data.choices[0].text);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      fetchData();
    }, [text]);
  
    return { code, loading, error };
  };
  
  export default useOpenAi;