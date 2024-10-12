import { LoginData, RegisterData, User, UserService } from "@/entities/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: User;
  isLoading: boolean;
  error: unknown;
}

const initialState: UserState = {
  user: {
    id: 0,
    email: "",
    is_active: false,
  },
  error: "",
  isLoading: false,
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
    console.log(res);
    const user: User = {
      email: "random",
      id: 1,
      is_active: true,
    };
    return user;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (loginData: LoginData) => {
    const res = await UserService.login(loginData);
    console.log(res);
    const user: User = {
      email: "random",
      id: 1,
      is_active: true,
    };
    return user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
