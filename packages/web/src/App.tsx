import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Environment } from "src/constants";
import { Home } from "./pages";

const App: React.FC = () => {
  return (
    <BrowserRouter basename={Environment.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
