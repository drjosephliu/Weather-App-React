import { HAS_ERRORED } from '../actions/index';

export default function(state = false, action) {
  switch(action.type) {
    case HAS_ERRORED:
    return action.bool;
  }
  return state;
}
