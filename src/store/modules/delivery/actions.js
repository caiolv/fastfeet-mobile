export function storeDelivery(delivery) {
  return {
    type: '@delivery/STORE_DELIVERY',
    payload: { delivery },
  };
}

export function pickUpDeliveryRequest(id) {
  return {
    type: '@delivery/PICK_UP_DELIVERY_REQUEST',
    payload: { id },
  };
}

export function pickUpDeliverySuccess(delivery) {
  return {
    type: '@delivery/PICK_UP_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}

export function finishDeliveryRequest(id, file) {
  return {
    type: '@delivery/FINISH_DELIVERY_REQUEST',
    payload: { id, file },
  };
}

export function finishDeliverySuccess(delivery) {
  return {
    type: '@delivery/FINISH_DELIVERY_SUCCESS',
    payload: { delivery },
  };
}

export function resetDelivery() {
  return {
    type: '@delivery/RESET_DELIVERY',
  };
}
