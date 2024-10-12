import { router } from "@/app/router";
import { Header } from "@/widgets/Header";
import { RouterProvider } from "react-router-dom";

import "@/app/styles/index.scss";

export function App() {
  return (
    <div className="app">
      <Header />
      <RouterProvider router={router(false)} />
    </div>
  );
}
