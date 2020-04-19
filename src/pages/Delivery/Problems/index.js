import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Background, HeaderBackground } from '~/components/Background';
import Loading from '~/components/Loading';

import ProblemItem from './ProblemItem';
import { Container, List, Title } from './styles';

export default function DeliveryProblems({ navigation }) {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const deliveryId = navigation.getParam('deliveryId');
  const title = navigation.getParam('title');

  function formatDates(data) {
    return data.map((problem) => ({
      ...problem,
      dateFormatted: problem.created_at
        ? format(parseISO(problem.created_at), 'dd/MM/yyyy')
        : null,
    }));
  }

  async function loadProblems() {
    const response = await api.get(`delivery/${deliveryId}/problems`, {
      params: {
        page,
      },
    });

    const data = formatDates(response.data);

    if (page > 1) setProblems([...problems, ...data]);
    else setProblems(data);

    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    loadProblems();
  }, [page]);

  function handleNextPage() {
    const nextPage = page + 1;
    setPage(nextPage);
  }

  function refreshList() {
    setRefreshing(true);
    setProblems([]);
    setPage(1);
    loadProblems();
  }
  return (
    <Background>
      <HeaderBackground />
      <Container>
        <Title>{title}</Title>
        {loading ? (
          <Loading />
        ) : (
          <List
            onRefresh={refreshList}
            refreshing={refreshing}
            data={problems}
            renderItem={({ item }) => <ProblemItem data={item} />}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={handleNextPage}
            onEndReachedThreshold={0.2}
          />
        )}
      </Container>
    </Background>
  );
}

DeliveryProblems.navigationOptions = {
  title: 'Visualizar problemas',
};
