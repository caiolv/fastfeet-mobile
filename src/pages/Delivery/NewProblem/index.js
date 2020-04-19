import React, { useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Background, HeaderBackground } from '~/components/Background';

import { Container, ProblemInput, SubmitButton } from './styles';

export default function NewProblem({ navigation }) {
  const [description, setDescription] = useState('');
  const deliveryId = navigation.getParam('deliveryId');

  async function handleSubmit() {
    try {
      await api.post(`/delivery/${deliveryId}/problems`, {
        description,
      });
      Alert.alert(
        'Sucesso!',
        'O problema da entrega foi informado com sucesso.',
      );
      navigation.navigate('DeliveryDetails');
    } catch (err) {
      Alert.alert('Erro', err.response.data.error);
    }
  }

  return (
    <Background>
      <HeaderBackground />
      <Container>
        <ProblemInput
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={description}
          onChangeText={setDescription}
          placeholder="Inclua aqui o problema que ocorreu na entrega."
        />
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Container>
    </Background>
  );
}

NewProblem.navigationOptions = {
  title: 'Informar problema',
};

NewProblem.propTypes = {
  deliveryId: PropTypes.number.isRequired,
};
