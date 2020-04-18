import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  padding: 20px;
`;

export const ProblemInput = styled(Input).attrs({
  multiline: true,
})`
  height: 300px;
  align-items: flex-start;
  padding: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;
