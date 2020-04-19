import produce from 'immer';

const INITIAL_STATE = {
  stored: null,
  pickedup: false,
  delivered: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@delivery/STORE_DELIVERY': {
        draft.stored = action.payload.delivery;
        draft.pickedup = false;
        draft.delivered = false;
        break;
      }
      case '@delivery/PICK_UP_DELIVERY_SUCCESS': {
        draft.stored = {
          ...draft.stored,
          start_date: action.payload.delivery.start_date,
          startDateFormatted: action.payload.delivery.startDateFormatted,
          status: 'RETIRADA',
        };
        draft.pickedup = true;
        break;
      }
      case '@delivery/FINISH_DELIVERY_SUCCESS': {
        draft.stored = {
          ...draft.stored,
          end_date: action.payload.delivery.end_date,
          endDateFormatted: action.payload.delivery.endDateFormatted,
          status: 'ENTREGUE',
        };
        draft.delivered = true;
        break;
      }
      case '@delivery/RESET_DELIVERY': {
        draft = {
          ...INITIAL_STATE,
        };
        break;
      }
      default:
        return state;
    }
  });
}
