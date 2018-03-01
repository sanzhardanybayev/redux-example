import { combineReducers } from 'redux';
import topClassReducer from './topClassReducer';
import clientsReducer from './clientsReducer';

const allReducers = combineReducers({
  topClass: topClassReducer,
  clients: clientsReducer
});

export default allReducers;
