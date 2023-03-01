import axios from 'axios';
import { useState, useEffect } from 'react';

const API = axios.create({
  baseURL: "http://www.mocky.io/v2/5d164fc10e00001730a118b8"
});

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    API.get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        });
  }, []);

  return { data, loading, error };
}