import styled from 'styled-components/native';

import RobotoText from '~/components/RobotoText';

export const Container = styled.View`
  margin-top: 24px;
  margin-bottom: 6.5px;
`;

export const Points = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 30px;
`;

export const Point = styled.View`
  height: 9px;
  width: 9px;
  border: 1px solid #7d40e7;
  border-radius: 8px;
  background: ${(props) => (props.full ? '#7D40E7' : '#fff')};
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background: #7d40e7;
`;

export const Labels = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

export const Label = styled(RobotoText)`
  width: 80px;
  text-align: center;
  color: #999;
  font-size: 8px;
`;
