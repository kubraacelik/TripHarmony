import { useState, useEffect } from "react";

//!useFetch adındaki bu özel hook, verilen bir URL'ye HTTP isteği yapar ve verileri getirir.
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //URL her değiştiğinde fetchData tekrar çalışır.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        //belirtilen URL'den veri çeker.
        const res = await fetch(url);

        if (!res.ok) {
          setError("failed to fetch");
          setLoading(false);
        }

        //Gelen yanıtı res.json() ile parse eder ve data durumuna aktarır.
        const result = await res.json();
        setData(result.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
