import React from 'react'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { TextInput, Flex, Button } from '@mantine/core';


const Input = props => {
  const {  } = props;
  const [inputValues, setInputValues] = useState()

  return (
    <input 
      type="email"
      name="email"
    />
  )
}

export default Input;
