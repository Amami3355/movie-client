import { createStore } from "redux";
import rootReducer from "../reducer";

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {
    connected: false,
    user: null
}

export default function configureStore() {
    return createStore(
        // rootReducer,
        persistedReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}