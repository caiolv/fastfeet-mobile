import React from 'react';

import { Container, Description, Date } from './styles';

export default function ProblemItem({ data }) {
  return (
    <Container>
      <Description>{data && data.description}</Description>
      <Date>{data.dateFormatted}</Date>
    </Container>
  );
}
