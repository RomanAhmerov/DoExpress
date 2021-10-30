import {combineReducers, createStore} from "redux";
import tableReducer from "./reducers/tableReducer";
import appReducer from "./reducers/appReducer";


const rootReducers = combineReducers({
    tableSection: tableReducer,
    app: appReducer
});

// Type (TS) (State)
type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType> // Export тип всего state

// Type (TS) (AC)
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


// Store
const store = createStore(rootReducers);

export default store;