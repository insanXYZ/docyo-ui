import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import Router from "./router";
import './main.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
