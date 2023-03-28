import { RefObject } from 'react';
import { useState, useEffect, useRef } from 'react'

interface IResponse<T> {
  hovered: boolean
  ref: RefObject<T>
}

const useHover = <T extends HTMLDivElement>(): IResponse<T> => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseOver = ():void => setHovered(true);
  const handleMouseOut = ():void => setHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);

  return {
    hovered,
    ref,
  }
}

export default useHover;
