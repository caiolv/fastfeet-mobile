import styled from 'styled-components/native';

import RobotoText from '~/components/RobotoText';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin-top: 15px;
  box-shadow: 0px 0px 3px #0000001a;

  flex-direction: row;
  justify-content: space-between;
`;
export const Description = styled(RobotoText)`
  color: #999;
  padding: 5px;
  flex: 1;
`;
export const Date = styled(RobotoText)`
  color: #c1c1c1;
  padding: 5px;
`;
