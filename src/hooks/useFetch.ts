import { useEffect, useState } from 'react';
import axios from 'axios';


interface IParams {
  params?: any
};

interface IResponse<T> {
  data: T | undefined,
  isLoading: boolean,
  error: any,
  refetch: any
};

const useFetch = <D = any>(url: string): IResponse<D> => {
  const [data, setData] = useState<D>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (url: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await axios(url);
      const values = await response.data;
      setData(values);
      
    } catch (error: any) {
        setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(url)
  }, [url]);

  const refetch = ({ params }: IParams): void => {
    let search_params = ''
    Object.entries(params).forEach(([key, value]) => {
      search_params += `&${key}=${value}`;
    })
    if (search_params !== '') {
      const url_params = url + "?" + search_params;
      getData(url_params);
    }
  };

  return {
    data,
    isLoading,
    error,
    refetch,
  }
}

export default useFetch;
