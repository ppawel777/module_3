import { useReducer } from 'react';

const useToggle = values => {
  const [[value], toggle] = useReducer((state, action) => {
    const item = action ? action(state[0]) : action;
    const index = Math.abs(state.indexOf(item));

    return state.slice(index).concat(state.slice(0, index));
  }, values);

  return [value, toggle];
}

export default useToggle;
