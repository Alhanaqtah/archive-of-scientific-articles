import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

const baseSelector = (state: RootState) => state;

export const useSelectUser = createSelector(
  baseSelector,
  (state) => state.user.user
);
