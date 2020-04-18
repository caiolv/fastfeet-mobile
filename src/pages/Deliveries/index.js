import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Avatar from '~/components/Avatar';
import DeliveryItem from '~/components/DeliveryItem';
import Loading from '~/components/Loading';

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
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);

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

  async function loadDeliveries() {
    const response = await api.get(`courier/${courier.id}/deliveries`, {
      params: {
        delivered: deliveriedFilter,
        page,
      },
    });

    console.tron.log(deliveriedFilter);

    const data = formatDates(response.data);

    if (page > 1) setDeliveries([...deliveries, ...data]);
    else setDeliveries(data);

    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    loadDeliveries();
  }, [page, deliveriedFilter]);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleNextPage() {
    const nextPage = page + 1;
    setPage(nextPage);
  }

  function toggleFilter() {
    setDeliveriedFilter(!deliveriedFilter);
    setLoading(true);
    setPage(1);
  }

  function refreshList() {
    setRefreshing(true);
    setDeliveries([]);
    loadDeliveries();
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
          <FilterButton onPress={() => toggleFilter()}>
            <FilterButtonContainer active={!deliveriedFilter}>
              <FilterText active={!deliveriedFilter}>Pendentes</FilterText>
            </FilterButtonContainer>
          </FilterButton>
          <FilterButton onPress={() => toggleFilter()}>
            <FilterButtonContainer active={deliveriedFilter}>
              <FilterText active={deliveriedFilter}>Entregues</FilterText>
            </FilterButtonContainer>
          </FilterButton>
        </FilterContainer>
      </ContentHeader>
      {loading ? (
        <Loading />
      ) : (
        <List
          onRefresh={refreshList}
          refreshing={refreshing}
          data={deliveries}
          renderItem={({ item }) => (
            <DeliveryItem data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleNextPage}
          onEndReachedThreshold={0.2}
        />
      )}
    </Container>
  );
}

Deliveries.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};
