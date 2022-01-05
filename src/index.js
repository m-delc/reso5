import React from 'react';
import './index.css';
import App from './Components/App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);


