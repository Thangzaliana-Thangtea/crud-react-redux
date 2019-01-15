import {createStore} from 'redux';
import { eventReducer } from '../reducers/eventReducer';

const Store=createStore(eventReducer)

export default Store;