import { router } from "@/app/router";
import { RouterProvider } from "react-router-dom";

import "@/app/styles/index.scss";

export function App() {
  return (
    <div className="app">
      <RouterProvider router={router(false)} />
    </div>
  );
}
