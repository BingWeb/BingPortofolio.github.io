import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-info" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
