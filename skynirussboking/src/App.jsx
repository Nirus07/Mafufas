// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Principal from "./components/Pages/Principal";
import Monitor from "./components/Pages/Monitor/Monitor";
import Board from "./components/Pages/Board/Board";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/monitor" element={<Monitor />} />
      <Route path="/board/:airportCode" element={<Board />} />
    </Routes>
  );
}

export default App;
