
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    console.log("query");
    console.log(query);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '1c8d3e97c4msh724b1310416d1e7p1c0a75jsnc5fbecdcf497',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error!')
        } finally {
            setIsLoading(false);
        }
    }

    const refetch = async () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
};

export default useFetch;