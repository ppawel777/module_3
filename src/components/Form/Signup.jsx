import React from 'react'
import { Flex, Button } from '@mantine/core';
import InputComponent from './components/Input';
import useFormState from '../../hooks/useFormState';

const SignUp = ({ handleOnSubmitUp }) => {
  const { inputs, setValues } = useFormState(null);

  const handleOnChange = event => setValues(event)

  return (
    <form 
      onSubmit={ e => handleOnSubmitUp(e, inputs) }
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
          name="username"
          placeholder='Name'
          label='Name'
        />
        <InputComponent
          name="nickname"
          placeholder='NickName'
          label='NickName'
        />
        <InputComponent
          type="email"
          name="email"
          placeholder='Email'
          label='Email'
          required
          icon="@"
        />
        <InputComponent
          type="radio"
          name="gender"
          label='Man'
          value="man"
        />
        <InputComponent
          type="radio"
          name="gender"
          label='Woman'
          value="woman"
        />
        <InputComponent
          type="password"
          name="password"
          placeholder='Password'
          label='Password'
          required
          description="Пароль должен содержать не менее 5 символов"
        />
        <InputComponent
          type="password"
          name="password_confirm"
          placeholder='Password Confirm'
          label='Password Confirm'
          required
        />
        <Button type="submit" mt={40}>Войти</Button>
      </Flex>
    </form>
  )
}

export default SignUp;
