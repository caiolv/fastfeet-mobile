import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const SubmitButton = styled(Button)`
  margin: 10px 0;
`;

export const CameraContainer = styled.View`
  flex: 1;
  border-radius: 4px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  background: #050;
`;

export const CameraButton = styled(RectButton)`
  position: absolute;

  border-radius: 30.5px;
  width: 61px;
  height: 61px;

  /* background: #0000004d; */
  background: #ffffff4d;

  bottom: 22px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Signature = styled.Image`
  height: 100%;
`;
