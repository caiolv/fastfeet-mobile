import React, { useState, useRef } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Background, HeaderBackground } from '~/components/Background';

import {
  Container,
  SubmitButton,
  Camera,
  CameraContainer,
  CameraButton,
  Signature,
} from './styles';

export default function NewProblem({ navigation }) {
  const deliveryId = navigation.getParam('deliveryId');
  const [pictureUri, setPictureUri] = useState('');
  const cameraRef = useRef(null);

  async function handleSubmit() {
    try {
      const dataFile = new FormData();
      dataFile.append('file', {
        type: 'image/jpg',
        uri: pictureUri,
        name: 'signature.jpg',
      });

      const pictureResponse = await api.post('files', dataFile);
      await api.put(`/delivery/${deliveryId}/status`, {
        end_date: new Date(),
        signature_id: pictureResponse.data.id,
      });

      navigation.navigate('DeliveryDetails');
    } catch (e) {
      Alert.alert('Ocorreu um erro ao enviar o erro.');
    }
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

NewProblem.navigationOptions = {
  title: 'Confirmar entrega',
};

NewProblem.propTypes = {
  deliveryId: PropTypes.number.isRequired,
};
