import React, { useState, useEffect } from "react";
import axios from "axios";
export const useAxiosOnMount = (url, options = { method: "get" }) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = async (url, options) => {
    setLoading(true);
    try {
      const res = await axios({
        url,
        ...options,
      });
      // const res = await axios.get(url);
      console.log(res)
      setResponse(res);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.log(error)
    }
  };

  useEffect(() => {
    refetch(url);
  }, []);
  return { data: response.data ? response.data : [], response, loading, error };
};
