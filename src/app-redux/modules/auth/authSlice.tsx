import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../../common/typings/auth";
import { loginRecord } from "../../../app-data/auth.data";
import { RootState } from "../../store";

const initialState: AuthState = {
  authUser: [],
  isLoggedIn: false,
  isFirstLogin: true,
  authError: "",
  authSuccess: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    attemptLogin: (state, { payload }) => {
      const { userName, password, type } = payload;
      const user = loginRecord.find(
        (record) =>
          record.userName === userName &&
          record.password === password &&
          record.type === type
      );
      if (user) {
        state.authUser = user;
        state.isFirstLogin =
          user.isFirstLogin !== undefined
            ? user.isFirstLogin
            : state.isFirstLogin;
        state.isLoggedIn = true;
        state.authSuccess = "LoggedIn Successfully!";
      } else {
        state.authUser = null;
        state.isLoggedIn = false;
        state.authError = "Invalid credentials. Please try again.";
      }
    },
    attemptUpdatePassword: (state, { payload }) => {
      const user = loginRecord.find(
        (record) => record.userName === state.authUser.userName
      );
      if (user) {
        const updatedAuthUser = { ...user, password: payload.password };
        return {
          ...state,
          authUser: updatedAuthUser,
          isFirstLogin: false,
        };
      }
    },
  },
});

export const { attemptLogin, attemptUpdatePassword } = authSlice.actions;
export const selectAuthUser = (state: RootState) => state.auth.authUser;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsFirstLogin = (state: RootState) => state.auth.isFirstLogin;
export const selectAuthError = (state: RootState) => state.auth.authError;
export const selectAuthSuccess = (state: RootState) => state.auth.authSuccess;

export default authSlice.reducer;
