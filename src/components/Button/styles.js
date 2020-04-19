import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

import RobotoText from '~/components/RobotoText';

const COLOR = {
  success: '#82BF18',
  danger: '#E74040',
};

export const Container = styled(RectButton)`
  height: 46px;
  background: ${(props) =>
    props.buttonType ? COLOR[props.buttonType] : `#7d40e7`};
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled(RobotoText)`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
