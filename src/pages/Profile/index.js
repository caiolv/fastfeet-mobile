import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import Avatar from '~/components/Avatar';

import {
  Container,
  Header,
  ProfileSection,
  Label,
  Info,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const courier = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Avatar big profile={courier} color={courier.color} />
      </Header>
      <ProfileSection>
        <Label>Nome completo</Label>
        <Info>{courier.name}</Info>
        <Label>Email</Label>
        <Info>{courier.email}</Info>
        <Label>Data de cadastro</Label>
        <Info>data</Info>
      </ProfileSection>
      <LogoutButton onPress={handleLogout} buttonType="danger">
        Logout
      </LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};
