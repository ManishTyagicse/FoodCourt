import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react"
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "@/AppRoutes.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <React.StrictMode>
        <AppRoutes/>
      </React.StrictMode>
  </BrowserRouter>
)
