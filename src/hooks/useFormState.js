import { useState, useCallback } from 'react';

const useFormState = () => {
  const [inputs, setInputs] = useState();

  const setValues = useCallback(event => {
    setInputs(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }, [])

  return {
    inputs,
    setValues
  };
}

export default useFormState;
