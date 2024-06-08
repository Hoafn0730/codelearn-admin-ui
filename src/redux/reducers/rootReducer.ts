import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from '../reducers/counterReducer';
import accountReducer from '../reducers/accountReducer';
import notificationReducer from '../reducers/notificationReducer';

const persistConfig = {
    key: 'auth',
    storage,
};

const persistedReducer = persistReducer(persistConfig, accountReducer);

const rootReducer = combineReducers({
    counter: counterReducer,
    account: persistedReducer,
    notification: notificationReducer,
});

export default rootReducer;
