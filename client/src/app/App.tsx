import { router } from "@/app/router";
import { RouterProvider } from "react-router-dom";

import "@/app/styles/index.scss";
import { useAppSelector } from "@/app/redux";

export function App() {
  const { error, isLoading, user } = useAppSelector((state) => state.user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <pre>{`error`}</pre>;
  }

  return (
    <div className="app">
      <RouterProvider router={router(!!user)} />
    </div>
  );
}
