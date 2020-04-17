import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from '~/components/Avatar';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Courier,
  Welcome,
  WelcomeText,
  CourierName,
  ContentHeader,
  Title,
  FilterContainer,
  FilterButtonContainer,
  FilterButton,
  FilterText,
} from './styles';

export default function Deliveries() {
  const dispatch = useDispatch();
  const courier = useSelector((state) => state.user.profile);
  const [deliveriedFilter, setDeliveriedFilter] = useState(false);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Courier>
          <Avatar profile={courier} color={courier.color} />
          <Welcome>
            <WelcomeText>Bem vindo de volta,</WelcomeText>
            <CourierName>{courier ? courier.name : null}</CourierName>
          </Welcome>
        </Courier>
        <Icon
          onPress={handleLogout}
          name="exit-to-app"
          color="#E74040"
          size={25}
        />
      </Header>
      <ContentHeader>
        <Title>Entregas</Title>
        <FilterContainer>
          <FilterButton onPress={() => setDeliveriedFilter(false)}>
            <FilterButtonContainer active={!deliveriedFilter}>
              <FilterText active={!deliveriedFilter}>Pendentes</FilterText>
            </FilterButtonContainer>
          </FilterButton>
          <FilterButton onPress={() => setDeliveriedFilter(true)}>
            <FilterButtonContainer active={deliveriedFilter}>
              <FilterText active={deliveriedFilter}>Entregues</FilterText>
            </FilterButtonContainer>
          </FilterButton>
        </FilterContainer>
      </ContentHeader>
    </Container>
  );
}

Deliveries.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};
