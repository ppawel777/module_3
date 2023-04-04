import React from 'react'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { TextInput, Flex, Button } from '@mantine/core';


const Signin = () => {
  const [inputValues, setInputValues] = useState()

  return (
    <form
    > 
      <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="column"
      wrap="wrap"
    >
      <input 
        type="email"
        name="email"
      />
      <input
        type="password" 
        name="password"
      />
      <Button type="submit">Войти</Button>
    </Flex>
    </form>
  )
}

export default Signin;
