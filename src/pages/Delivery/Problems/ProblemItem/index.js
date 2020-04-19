import React from 'react';
import PropTypes from 'prop-types';
import { Container, Description, Date } from './styles';

export default function ProblemItem({ data }) {
  return (
    <Container>
      <Description>{data && data.description}</Description>
      <Date>{data.dateFormatted}</Date>
    </Container>
  );
}

ProblemItem.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    dateFormatted: PropTypes.string.isRequired,
  }).isRequired,
};
