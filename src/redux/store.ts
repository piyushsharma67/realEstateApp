import { Action, AnyAction, Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import AuthReducer from '../routes/login/redux/slice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
    AuthReducer
})

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

const rootReducer: Reducer = (state: RootState, action: Action) => {
    if (action.type === 'logout') {
        state = {} as RootState;
    }
    //@ts-ignore
    return reducers(state, action);
};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AuthReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
}
);

export const persistor = persistStore(store);
