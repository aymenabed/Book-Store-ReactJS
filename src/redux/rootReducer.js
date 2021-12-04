// Node Modules Files
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Local Files
import booksReducer from './books/books_reducers';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['books']
};

const rootReducer = combineReducers({
  books: booksReducer,
});

export default persistReducer(persistConfig, rootReducer);
