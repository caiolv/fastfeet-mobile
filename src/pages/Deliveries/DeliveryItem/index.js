import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { storeDelivery } from '~/store/modules/delivery/actions';

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

export default function DeliveryItem({ delivery, navigation }) {
  const dispatch = useDispatch();

  function handleNavigate() {
    dispatch(storeDelivery({ ...delivery }));
    navigation.navigate('DeliveryDetails');
  }
  return (
    <Container>
      <Header>
        <Info>
          <Icon name="local-shipping" size={22} color="#7d40e7" />
          <Product>{delivery.product}</Product>
        </Info>
        <DeliveryStatus status={delivery.status} />
      </Header>
      <Content>
        <Section>
          <Label>Data</Label>
          <Description>{delivery.dateFormatted}</Description>
        </Section>
        <Section>
          <Label>Cidade</Label>
          <Description>{delivery.recipient.city}</Description>
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
  delivery: PropTypes.shape({
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
