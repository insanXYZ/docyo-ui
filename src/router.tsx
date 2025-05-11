import { Routes, Route } from "react-router";
import Layout from "./components/templates/layout";
import Home from "./pages/home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
