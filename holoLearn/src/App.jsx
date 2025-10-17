import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/mainLayout";

import Home from "./pages/home";
import Courses from "./pages/courses";
import About from "./pages/about";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App; 
