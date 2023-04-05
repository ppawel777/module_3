import React, { useState } from 'react';
import { Modal, Group, Button, Container, Code } from '@mantine/core';

import './index.scss';
import Signin from './Signin';
import Signup from './Signup';

const FormComponent = () => {
  const [visibleSignin, setVisibleSignin] = useState(false);
  const [visibleSignup, setVisibleSignup] = useState(false);
  const [result, setResult] = useState('');

  const openModalSignin = () => setVisibleSignin(true);
  const closeModalSignin = () => setVisibleSignin(false);
  const openModalSignup = () => setVisibleSignup(true);
  const closeModalSignup = () => setVisibleSignup(false);

  const handleOnSubmitIn = (event, data) => {
    event.preventDefault();
    setResult(JSON.stringify(data))
    closeModalSignin();
  }

  const handleOnSubmitUp = (event, data) => {
    event.preventDefault();
    setResult(JSON.stringify(data))
    closeModalSignup();
  }

  const ModalSigin = () => {
    return (
      <Modal
        opened={ visibleSignin }
        onClose={ closeModalSignin }
        title="Signin"
        size="lg"
      >
        <Signin handleOnSubmitIn={ handleOnSubmitIn } />
      </Modal>
    )
  }

  const ModalSignup = () => {
    return (
      <Modal
        opened={ visibleSignup }
        onClose={ closeModalSignup }
        title="Signup"
        size="lg"
      >
        <Signup handleOnSubmitUp={ handleOnSubmitUp } />
      </Modal>
    )
  }

  return (
    <>
      <Container p={10}>
        <Group position="center">
          <Button onClick={ openModalSignin } color="green">
            SignIn
          </Button>
          <Button onClick={ openModalSignup } color="blue">
            SignUp
          </Button>
        </Group>
      </Container>
      <Container p={10} fluid>
        <Code color="teal">{ result }</Code>
      </Container>
      {
        visibleSignin && <ModalSigin />
      }
      {
        visibleSignup && <ModalSignup />
      }
    </>
  );
}

export default FormComponent;
