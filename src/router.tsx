import { Routes, Route } from "react-router";
import Layout from "./components/templates/layout";
import generate from "./gen-docyo";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout topbar={generate.topbar} leftbar={generate.sidebar} />}>
      </Route>
    </Routes>
  );
}
