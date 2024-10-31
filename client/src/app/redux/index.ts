import { store } from "./store";
import { useAppDispatch, useAppSelector, useSelectUser } from "./hooks";
import { getUser, loginUser, registerUser, logout } from "./userSlice";

export {
  store,
  useAppDispatch,
  useAppSelector,
  useSelectUser,
  getUser,
  loginUser,
  registerUser,
  logout,
};
