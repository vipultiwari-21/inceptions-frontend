import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../reducers/slice'
import AccessTokenReducer from '../reducers/accessToken'

export default configureStore({
  reducer: {
    auth: AuthReducer,
    accessToken:AccessTokenReducer
  },
});