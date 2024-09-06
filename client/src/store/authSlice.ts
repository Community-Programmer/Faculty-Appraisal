import { UserDetails } from "@/types/authTypes";
import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  userId: string | null;
  userDetails: UserDetails | null;
  role: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  userId: null,
  userDetails: null,
  role: "guest",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.userDetails.name;
      state.userDetails = action.payload.userDetails;
      state.userId = action.payload.userId;
      state.role = action.payload.userDetails.role;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.userId = null;
      state.userDetails = null;
      state.role = "guest";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
