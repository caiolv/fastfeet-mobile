import React from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background, HeaderBackground } from '~/components/Background';

import {
  Container,
  Header,
  Title,
  Label,
  Description,
  Section,
  Row,
} from './styles';

export default function DeliveryDetails({ navigation }) {
  const {
    product,
    recipient,
    status,
    startDateFormatted,
    endDateFormatted,
  } = navigation.getParam('delivery');

  const streetNumber = `${recipient.street}, ${recipient.number}`;
  const cityState = `${recipient.city} - ${recipient.state}`;

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
      </ScrollView>
    </Background>
  );
}
