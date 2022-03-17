import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { execCallback } from "../utils/callbacks";
import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = execCallback(
  window?.["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
)();

let store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

export default store;
