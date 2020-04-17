import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  Courier,
  Avatar,
  Welcome,
  WelcomeText,
  CourierName,
} from './styles';

export default function Profile() {
  const courier = useSelector((state) => state.user.profile);
  return (
    <Container>
      <Header>
        <Courier>
          <Avatar />
          <Welcome>
            <WelcomeText>Bem vindo de volta,</WelcomeText>
            <CourierName>{courier.name}</CourierName>
          </Welcome>
        </Courier>
      </Header>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};
