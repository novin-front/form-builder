import {createStore,applyMiddleware} from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from './middleware';
import createSagaMiddleware  from "redux-saga";
import SagaApi from './saga'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger,sagaMiddleware)));

sagaMiddleware.run(SagaApi);

export default store;