import { store, useSelectUser } from "@/app/redux";
import { useNavigate } from "react-router-dom";
import { PAGE_ROUTES } from "@/shared/utils/constants";
import { useEffect } from "react";

export function useCheckUser() {
  const user = useSelectUser(store.getState()).id;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(PAGE_ROUTES.SIGNIN);
    }
  }, [navigate, user]);
}
