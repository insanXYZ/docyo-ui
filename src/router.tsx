import { Routes, Route } from "react-router";
import Layout from "./components/templates/layout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  );
}
