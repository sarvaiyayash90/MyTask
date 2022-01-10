import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers/combineReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./reducers/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export { store };
