import { TOGGLE_CELSIUS } from '../actions/index';

export default function(state = true, action) {
  switch(action.type) {
    case TOGGLE_CELSIUS:
    return !state;
  }
  return state;
}
