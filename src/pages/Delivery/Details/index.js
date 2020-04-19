import React from 'react';
import { Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Background, HeaderBackground } from '~/components/Background';

import {
  Container,
  Header,
  Title,
  Label,
  Description,
  Section,
  ButtonsContainer,
  Button,
  ButtonText,
  Row,
  BorderContainer,
} from './styles';

export default function DeliveryDetails({ navigation }) {
  const delivery = navigation.getParam('delivery');
  const {
    id,
    product,
    recipient,
    status,
    startDateFormatted,
    endDateFormatted,
    start_date,
    end_date,
  } = delivery;

  const streetNumber = `${recipient.street}, ${recipient.number}`;
  const cityState = `${recipient.city} - ${recipient.state}`;

  async function handlePickUp() {
    try {
      await api.put(`/delivery/${id}/status`, {
        start_date: new Date(),
      });
      Alert.alert('Sucesso!', 'Retirafa confirmada com sucesso!');
    } catch (err) {
      Alert.alert('Erro!', 'Não foi possível confirmar a retirada.');
    }
  }

  return (
    <Background>
      <HeaderBackground />
      <ScrollView>
        <Container>
          <Header>
            <Icon name="local-shipping" size={22} color="#7d40e7" />
            <Title>{product}</Title>
          </Header>
          <Label>Destinatário</Label>
          <Description>{recipient.name}</Description>
          <Label>Endereço</Label>
          <Description>{`${streetNumber}, ${cityState}, ${recipient.cep}`}</Description>
          <Label>Produto</Label>
          <Description>{recipient.city}</Description>
        </Container>

        <Container>
          <Header>
            <Icon name="event" size={22} color="#7d40e7" />
            <Title>Situação da entrega</Title>
          </Header>

          <Label>Status</Label>
          <Description capitalize>{status}</Description>

          <Row>
            <Section>
              <Label>Data de retirada</Label>
              <Description>{startDateFormatted}</Description>
            </Section>
            <Section>
              <Label>Data de entrega</Label>
              <Description>{endDateFormatted}</Description>
            </Section>
          </Row>
        </Container>

        <ButtonsContainer>
          <BorderContainer first>
            <Button
              onPress={() =>
                navigation.navigate('NewProblem', { deliveryId: id })
              }
            >
              <Icon name="highlight-off" size={30} color="#E74040" />
              <ButtonText>Informar Problema</ButtonText>
            </Button>
          </BorderContainer>
          <BorderContainer>
            <Button
              onPress={() =>
                navigation.navigate('DeliveryProblems', {
                  deliveryId: id,
                  title: product,
                })
              }
            >
              <Icon name="info-outline" size={30} color="#E7BA40" />
              <ButtonText>Visualizar Problemas</ButtonText>
            </Button>
          </BorderContainer>
          {!end_date && (
            <BorderContainer>
              {start_date ? (
                <Button
                  onPress={() =>
                    navigation.navigate('ConfirmDelivery', { deliveryId: id })
                  }
                >
                  <Icon name="check-circle" size={30} color="#7D40E7" />
                  <ButtonText>Confirmar Entrega</ButtonText>
                </Button>
              ) : (
                <Button onPress={handlePickUp}>
                  <Icon name="call-missed-outgoing" size={30} color="#7D40E7" />
                  <ButtonText>Retirar Entrega</ButtonText>
                </Button>
              )}
            </BorderContainer>
          )}
        </ButtonsContainer>
      </ScrollView>
    </Background>
  );
}

DeliveryDetails.navigationOptions = {
  title: 'Detalhes da encomenda',
};
