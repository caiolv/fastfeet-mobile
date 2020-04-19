import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DeliveryStatus from '~/components/DeliveryStatus';

import {
  Container,
  Header,
  Info,
  Product,
  Content,
  Section,
  Label,
  Description,
  Details,
  Button,
} from './styles';

export default function DeliveryItem({ data, navigation }) {
  function handleNavigate() {
    navigation.navigate('DeliveryDetails', { delivery: data });
  }
  return (
    <Container>
      <Header>
        <Info>
          <Icon name="local-shipping" size={22} color="#7d40e7" />
          <Product>{data.product}</Product>
        </Info>
        <DeliveryStatus status={data.status} />
      </Header>
      <Content>
        <Section>
          <Label>Data</Label>
          <Description>{data.dateFormatted}</Description>
        </Section>
        <Section>
          <Label>Cidade</Label>
          <Description>{data.recipient.city}</Description>
        </Section>
        <Section>
          <Button onPress={handleNavigate}>
            <Details>Ver detalhes</Details>
          </Button>
        </Section>
      </Content>
    </Container>
  );
}

DeliveryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
    dateFormatted: PropTypes.string.isRequired,
    end_date: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      cep: PropTypes.string.isRequired,
    }),
    courier: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    status: PropTypes.string.isRequired,
    startDateFormatted: PropTypes.string.isRequired,
    endDateFormatted: PropTypes.string.isRequired,
  }).isRequired,
};
