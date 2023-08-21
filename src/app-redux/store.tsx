import { configureStore,Action,ThunkAction } from '@reduxjs/toolkit'
// import listingReducer from './modules/tours/tourSlice'
import authReducer from './modules/auth/authSlice'
import settingReducer from './modules/setting/settingSlice'
import thunk from 'redux-thunk'; // Import Redux Thunk middleware

export const store = configureStore({
  reducer: {
    auth:authReducer,
    setting:settingReducer,
  },
  middleware:[thunk]
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;