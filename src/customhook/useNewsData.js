import { useEffect, useState } from "react";


function useNewsData(category='') {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const apikey=import.meta.env.VITE_API_KEY;
  
  useEffect(() => {
    const fetchNewsInfo = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setList(data.articles);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsInfo();
  }, [category]);
  
  return { list, loading, error };
}

export default useNewsData;