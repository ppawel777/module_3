import React from 'react'
import { Flex, Button } from '@mantine/core';
import InputComponent from './components/Input';
import useFormState from '../../hooks/useFormState';

const Signin = ({ handleOnSubmitIn }) => {
  const { inputs, setValues } = useFormState(null);

  const handleOnChange = event => setValues(event)

  return (
    <form 
      onSubmit={ e => handleOnSubmitIn(e, inputs) }
      onChange={ handleOnChange }
    > 
      <Flex
        mih={50}
        gap="xl"
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
      >
        <InputComponent
          type="email"
          name="email"
          placeholder='Email'
          label='Email'
          required
          icon="@"
        />
        <InputComponent
          type="password"
          name="password"
          placeholder='Password'
          label='Password'
          required
          description="Пароль должен содержать не менее 5 символов"
        />
        <Button type="submit" mt={40}>Войти</Button>
      </Flex>
    </form>
  )
}

export default Signin;
