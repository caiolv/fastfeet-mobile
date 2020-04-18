import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  box-shadow: 0px 0px 3px #0000001a;
  padding: 10px 15px 0;
  background: #fff;
  border-radius: 4px;
  margin: 5px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
  margin-top: 5px;
`;
export const Description = styled.Text`
  font-size: 12px;
  color: #666;
  line-height: 26px;
  margin-bottom: 10px;
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
`;

export const Section = styled.View`
  margin-right: 50px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const ButtonsContainer = styled.View`
  box-shadow: 0px 0px 3px #0000001a;
  background: #f8f9fd;
  border-radius: 4px;
  margin: 5px 20px;
  flex-direction: row;
`;

export const BorderContainer = styled.View`
  flex: 1;

  border-left-width: 1px;
  border-left-color: #0000001a;

  ${({ first }) =>
    first &&
    css`
      border-left-width: 0px;
    `}
`;

export const Button = styled(RectButton)`
  flex: 1;
  align-items: center;
  padding: 20px;
`;

export const ButtonText = styled.Text`
  color: #999999;
  font-size: 12px;
  text-align: center;
  margin-top: 2px;
`;

export const Details = styled.Text`
  color: #7d40e7;
  font-size: 12px;
  font-weight: bold;
`;
