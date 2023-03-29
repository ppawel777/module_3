import React from 'react'
import useViewportSize from '../../hooks/useViewportSize'

const Demo: React.FC = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}

export default Demo;
