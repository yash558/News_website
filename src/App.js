import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import New from './components/News/New';

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<New/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
