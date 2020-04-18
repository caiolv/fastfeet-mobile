import React from 'react';
import PropTypes from 'prop-types';

import { Container, Points, Point, Labels, Label, Line } from './styles';

export default function TimeLine({ status }) {
  return (
    <Container>
      <Points>
        <Point
          full={
            status === 'PENDENTE' ||
            status === 'RETIRADA' ||
            status === 'ENTREGUE'
          }
        />
        <Line />
        <Point full={status === 'RETIRADA' || status === 'ENTREGUE'} />
        <Line />
        <Point full={status === 'ENTREGUE'} />
      </Points>
      <Labels>
        <Label>Aguardando Retirada</Label>
        <Label>Retirada</Label>
        <Label>Entregue</Label>
      </Labels>
    </Container>
  );
}

TimeLine.propTypes = {
  status: PropTypes.string.isRequired,
};
