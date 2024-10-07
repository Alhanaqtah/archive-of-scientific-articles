import { store } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getUser, loginUser, registerUser } from "./userSlice";

export {
  store,
  useAppDispatch,
  useAppSelector,
  getUser,
  loginUser,
  registerUser,
};
