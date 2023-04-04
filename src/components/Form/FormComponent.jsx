import React, { useState } from 'react';
// import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';

import './index.scss';
import Signin from './Signin';
import Signup from './Signup';

const FormComponent = () => {
  const [visibleSignin, setVisibleSignin] = useState(false);
  const [visibleSignup, setVisibleSignup] = useState(false);

  const openModalSignin = () => setVisibleSignin(true);
  const closeModalSignin = () => setVisibleSignin(false);
  const openModalSignup = () => setVisibleSignup(true);
  const closeModalSignup = () => setVisibleSignup(false);

  const ModalSigin = () => {
    return (
      <Modal
        opened={ visibleSignin }
        onClose={ closeModalSignin }
        title="Signin"
      >
        <Signin />
      </Modal>
    )
  }

  const ModalSignup = () => {
    return (
      <Modal
        opened={ visibleSignup }
        onClose={ closeModalSignup }
        title="Signup"
      >
        <Signup />
      </Modal>
    )
  }

  return (
    <>
      <Group position="center">
        <Button onClick={ openModalSignin } color="green">
          Sigin
        </Button>
        <Button onClick={ openModalSignup } color="blue">
          Signup
        </Button>
      </Group>
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
