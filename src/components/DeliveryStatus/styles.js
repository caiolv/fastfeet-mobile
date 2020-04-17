import styled from 'styled-components/native';

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
  height: 16px;
  width: 16px;
  border: 2px solid #7d40e7;
  border-radius: 8px;
  background: ${(props) => (props.activer ? '#7D40E7' : '#fff')};
`;

export const Line = styled.View`
  flex: 1;
  height: 2px;
  background: #7d40e7;
`;

export const Labels = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 3px;
`;

export const Label = styled.Text`
  width: 80px;
  text-align: center;
  color: #999;
  font-size: 14px;
`;
