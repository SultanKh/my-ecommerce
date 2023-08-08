import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {
    const [Loading, setLoading] = useState(undefined);
    const [data, setData] = useState([]);
    const [error, setError] = useState(undefined);
    const cache = useRef();

    useEffect(() => {
        if (!url) return;
        const fetchData = async () => {
            setLoading(true);
            try {
                if (cache.current && cache.current[url]) {
                    setData(data);
    
                }
                else {
                    const response = await fetch(url);
                    const data = await response.json();
                    cache.current = {}
                    cache.current[url] = data
                    setData(data);
                }
            }
            catch(err) {
                setError(err.message);
            }

            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { Loading, data, error };
};
