import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export const Background = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  background: #fff;
  padding: 110px 0;
`;

export const HeaderBackground = styled.View`
  position: absolute;
  background: #7d40e7;
  height: 185px;
  width: ${Dimensions.get('window').width}px;
`;
