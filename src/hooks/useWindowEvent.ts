import { useEffect } from 'react';


const useWindowEvent = <K extends string>(
    type: K,
    listener: (this: Window, event: WindowEventMap[keyof WindowEventMap]) => void,
    options?: boolean | AddEventListenerOptions
  ) => {
  useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener, options]);
}

export default useWindowEvent;
