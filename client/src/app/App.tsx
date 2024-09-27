import { Router } from "@/app/router";
import { Header } from "@/widgets/Header";

import "@/app/styles/index.scss"

export function App() {
  return (
    <div className="app">
      <Header />
      <Router />
    </div>
  );
}
