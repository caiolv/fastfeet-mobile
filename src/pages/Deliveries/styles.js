import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import { RectButton } from 'react-native-gesture-handler';

import RobotoText from '~/components/RobotoText';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
`;
export const Header = styled.View`
  height: 68px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 12.5px 0 0;
  padding: 20px;
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
export const WelcomeText = styled(RobotoText)`
  font-size: 12px;
  color: #666666;
`;
export const CourierName = styled(RobotoText)`
  font-size: 22px;
  font-weight: bold;
  line-height: 29px;
  color: #444444;
`;

export const ContentHeader = styled.View`
  padding: 0 20px;
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Title = styled(RobotoText)`
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
export const FilterText = styled(RobotoText)`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => (props.active ? '#7d40e7' : '#999')};
  text-decoration-style: solid;
`;
export const List = styled.FlatList`
  margin-top: 10px;
  padding: 1px 20px;
`;
