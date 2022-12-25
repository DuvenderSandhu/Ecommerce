import { combineReducers } from "redux";
import itemReducer from "./itemChange";
import objReducer from './objChange'
import alertReducer from './changeAlert'
import { updateCart } from "./updateCart";
import { userToken } from "./userToken";

const reducers=combineReducers({
    item:itemReducer,
    obj:objReducer,
    cart:updateCart,
    alerts:alertReducer,
    token:userToken
})
export default reducers;