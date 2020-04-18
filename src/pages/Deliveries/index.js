import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Avatar from '~/components/Avatar';
import DeliveryItem from '~/components/DeliveryItem';

import api from '~/services/api';

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
  List,
} from './styles';

export default function Deliveries({ navigation }) {
  const dispatch = useDispatch();
  const courier = useSelector((state) => state.user.profile);

  const [deliveriedFilter, setDeliveriedFilter] = useState(false);
  const [deliveries, setDeliveries] = useState([]);

  function formatDates(data) {
    return data.map((delivery) => ({
      ...delivery,
      dateFormatted: delivery.created_at
        ? format(parseISO(delivery.created_at), 'dd/MM/yyyy', { locale: pt })
        : null,
      startDateFormatted: delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd / MM / yyyy', {
            locale: pt,
          })
        : '-- / -- / ----',
      endDateFormatted: delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd / MM / yyyy', { locale: pt })
        : '-- / -- / ----',
    }));
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`courier/${courier.id}/deliveries`, {
        params: {
          delivered: deliveriedFilter,
        },
      });

      console.tron.log(deliveriedFilter);

      const data = formatDates(response.data);

      setDeliveries(data);
    }
    loadDeliveries();
  }, [courier.id, deliveriedFilter]);

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
      <List
        data={deliveries}
        renderItem={({ item }) => (
          <DeliveryItem data={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        // onEndReached={loadDelivery}
        // onEndReachedThreshold={0.1}
        // ListFooterComponent={renderLoading}
      />
    </Container>
  );
}

Deliveries.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};
