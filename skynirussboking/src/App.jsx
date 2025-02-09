// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Principal from "./components/Pages/Principal";
import Monitor from "./components/Pages/Monitor/Monitor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/monitor" element={<Monitor />} />
    </Routes>
  );
}

export default App;
