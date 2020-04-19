import { call, put, all, takeLatest } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

import api from '~/services/api';

import { pickUpDeliverySuccess, finishDeliverySuccess } from './actions';

function* pickUpDelivery({ payload }) {
  try {
    const response = yield call(api.put, `/delivery/${payload.id}/status`, {
      start_date: new Date(),
    });

    const data = {
      ...response.data,
      startDateFormatted: format(
        parseISO(response.data.start_date),
        'dd / MM / yyyy',
      ),
    };
    yield put(pickUpDeliverySuccess(data));

    Alert.alert('Sucesso!', 'Retirada confirmada com sucesso!');
  } catch (err) {
    Alert.alert('Erro', 'Houve um erro ao confirmar a retirada');
  }
}
function* finishDelivery({ payload }) {
  try {
    const pictureResponse = yield call(api.post, 'files', payload.file);

    const response = yield call(api.put, `/delivery/${payload.id}/status`, {
      end_date: new Date(),
      signature_id: pictureResponse.data.id,
    });

    const data = {
      ...response.data,
      endDateFormatted: format(
        parseISO(response.data.end_date),
        'dd / MM / yyyy',
      ),
    };
    yield put(finishDeliverySuccess(data));

    Alert.alert('Sucesso!', 'Entrega confirmada com sucesso!');
  } catch (err) {
    Alert.alert('Erro', 'Houve um erro ao confirmar a entrega');
  }
}

export default all([
  takeLatest('@delivery/PICK_UP_DELIVERY_REQUEST', pickUpDelivery),
  takeLatest('@delivery/FINISH_DELIVERY_REQUEST', finishDelivery),
]);
