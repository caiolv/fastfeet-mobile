import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  box-shadow: 0px 0px 3px #0000001a;
  margin-bottom: 29px;
`;

export const Header = styled.View`
  padding: 15px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background: #fff;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Product = styled.Text`
  margin-top: 4px;
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fd;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 20px;
`;

export const Section = styled.View``;
export const Label = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999;
`;
export const Description = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #444;
`;

export const Button = styled(RectButton)``;

export const Details = styled.Text`
  color: #7d40e7;
  font-size: 12px;
  font-weight: bold;
`;
