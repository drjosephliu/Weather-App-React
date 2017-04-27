import { FETCH_CITIES } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_CITIES:
    console.log('received:', action.payload);
    return [ action.payload, ...state ];
  }
  return state;
}
