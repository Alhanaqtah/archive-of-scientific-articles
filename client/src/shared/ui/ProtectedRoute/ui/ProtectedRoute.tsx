import { PAGE_ROUTES } from "@/shared/utils/constants";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoute {
  isAuthenticated: boolean;
}

export function ProtectedRoute({ isAuthenticated }: ProtectedRoute) {
  if (!isAuthenticated) {
    return <Navigate to={PAGE_ROUTES.SIGNIN} replace />;
  }

  return <Outlet />;
}
