import styled from 'styled-components/native';

import RobotoText from '~/components/RobotoText';

export const Container = styled.View`
  height: 100%;
`;

export const Title = styled(RobotoText)`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  align-self: center;
`;

export const List = styled.FlatList`
  padding: 0 20px;
`;
