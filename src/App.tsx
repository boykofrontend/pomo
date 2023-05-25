import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "./components/Home";

import "normalize.css";
import "./styles/global.scss";
import AppContextProvider from "./context/appContext";

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
