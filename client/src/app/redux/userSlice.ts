import { LoginData, RegisterData, User, UserService } from "@/entities/user";
import { LOCAL_STORAGE_USER_KEY } from "@/shared/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: unknown;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: "",
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userId: number) => {
    const res = await UserService.getUser(userId);
    return res.data;
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (registerData: RegisterData) => {
    const res = await UserService.register(registerData);
    const user: User = jwtDecode(res.data.token);
    return user;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginData: LoginData) => {
    const res = await UserService.login(loginData);
    const user: User = jwtDecode(res.data.token);
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.error = initialState.error;
      state.isLoading = initialState.isLoading;
      state.user = initialState.user;

      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(state.user));
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(state.user));
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { logout } = userSlice.actions;
