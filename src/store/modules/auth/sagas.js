import { Alert } from 'react-native';
import randomColor from 'randomcolor';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSuccess, signFailure } from './actions';

import api from '../../../services';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `couriers/${id}`);

    const profile = response.data;
    const color = randomColor({ luminosity: 'dark' });

    yield put(
      signInSuccess({
        ...profile,
        color,
      }),
    );

    // history.push('/deliveries');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados.',
    );
    // toast.error('Falha na autenticação, verifique seus dados.');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
