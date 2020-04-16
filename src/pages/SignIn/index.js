import React, { useState } from 'react';
import { Image, StatusBar } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');

  const loading = false;

  function handleSubmit() {}

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={email}
            onChangeText={setEmail}
          />

          <SubmitButton
            loading={loading}
            onPress={handleSubmit}
            buttonType="success"
          >
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </>
  );
}
