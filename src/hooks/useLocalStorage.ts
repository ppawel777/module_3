import { useState, useEffect } from 'react';

type IResponse = [
  string, 
  {
    setItem: (value: string) => void,
    removeItem: () => void,
  }
];

const useLocalStorage = (initToken: string): IResponse => {
  const [token, setToken] = useState(() => {
    const item = localStorage.getItem("token");
    return item ? JSON.parse(item) : initToken;
  });

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token))
  },[token])

  const setItem = (newValue: string) => setToken(newValue)
  const removeItem = () => setToken('')

  return [
    token,
    {
      setItem,
      removeItem,
    },
  ];
}

export default useLocalStorage;
