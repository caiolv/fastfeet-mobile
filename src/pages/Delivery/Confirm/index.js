import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { finishDeliveryRequest } from '~/store/modules/delivery/actions';

import { Background, HeaderBackground } from '~/components/Background';

import {
  Container,
  SubmitButton,
  Camera,
  CameraContainer,
  CameraButton,
  Signature,
} from './styles';

export default function ConfirmDelivery({ navigation }) {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.delivery.stored);
  const [pictureUri, setPictureUri] = useState('');
  const cameraRef = useRef(null);

  async function handleSubmit() {
    const dataFile = new FormData();
    dataFile.append('file', {
      type: 'image/jpg',
      uri: pictureUri,
      name: 'signature.jpg',
    });

    dispatch(finishDeliveryRequest(delivery.id, dataFile));
  }

  async function handletakePicture() {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  return (
    <Background>
      <HeaderBackground />
      <Container>
        {pictureUri ? (
          <CameraContainer>
            <Signature
              source={{ uri: pictureUri }}
              style={{ height: '100%' }}
            />
          </CameraContainer>
        ) : (
          <CameraContainer>
            <Camera ref={cameraRef} type="back" captureAudio={false} />
            <CameraButton onPress={handletakePicture}>
              <Icon name="photo-camera" color="#fff" size={26} />
            </CameraButton>
          </CameraContainer>
        )}
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Container>
    </Background>
  );
}

ConfirmDelivery.navigationOptions = {
  title: 'Confirmar entrega',
};
