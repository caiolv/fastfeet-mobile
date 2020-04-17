import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
`;
export const Header = styled.View`
  height: 68px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
  background: #50f;
`;

export const Courier = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  /* padding: 30px 20px; */
`;

export const Avatar = styled.View`
  background: #0f5;
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const Welcome = styled.View`
  /* align-items: center; */
  justify-content: center;
  margin-left: 12px;
  background: #f50;
`;
export const WelcomeText = styled.Text`
  font-size: 12px;
`;
export const CourierName = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;
