import { Routes, Route } from "react-router";
import Layout from "./components/templates/layout";
import generate from "./gen-docyo";
import Page from "./components/templates/page";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout topbar={generate.topbar} leftbar={generate.sidebar} />}>
        <Route index path="" element={<Page contents={generate.pages["/"]} />} />
      </Route>
    </Routes>
  );
}
