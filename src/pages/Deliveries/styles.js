import styled, { css } from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
  padding: 20px;
`;
export const Header = styled.View`
  height: 68px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5px 0 0;
  margin-top: 20px;
`;

export const Courier = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Avatar = styled.View`
  width: 68px;
  height: 68px;
  border-radius: 34px;
`;

export const Welcome = styled.View`
  justify-content: center;
  margin-left: 12px;
`;
export const WelcomeText = styled.Text`
  font-size: 12px;
`;
export const CourierName = styled.Text`
  font-size: 22px;
  font-weight: bold;
  line-height: 29px;
  color: #444444;
`;

export const ContentHeader = styled.View`
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: #444444;
  font-size: 22px;
  font-weight: bold;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  height: 100%;
`;

export const FilterButton = styled(RectButton).attrs({
  underlayColor: '#FFF',
})`
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
export const FilterButtonContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ active }) => (active ? '#7d40e7' : 'transparent')};
`;
export const FilterText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.active ? '#7d40e7' : '#999')};
  text-decoration-style: solid;
`;
