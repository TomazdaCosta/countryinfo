import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";

export const router =  createHashRouter([
  {
    path: '/',
    index: true,
    element: <Home />
  },
  {
    path: '/pais/:countryName',
    element: <CountryInfo />
  }
])