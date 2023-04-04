import React from 'react'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { TextInput } from '@mantine/core';

const Signup = () => {
  const [inputValues, setInputValues] = useState()

  return (
    <form 
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        type="text"
        name="nickname"
        placeholder="Nickname"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
      />
      <button className="Singup__button" type="submit">
        Sign up
      </button>
    </form>
  )
}

export default Signup;
