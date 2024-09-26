import { Routes, Route } from "react-router-dom";

import { roteMap } from "./config";

export function Router() {
  return (
    <Routes>
      {roteMap.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
