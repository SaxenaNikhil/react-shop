import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

export default function App() {
  return (
    <div className="wrapper bg-dark text-white">
      <Navbar title="React Shop"/>
      <div className="container mt-5 py-5 px-3 px-md-5">
        {/* This is the body of the app.jsx */}
        {/* Here we are creating separate pages for the application */}
        <Routes>
          <Route path="/" element={<h2>Home Component!</h2>}/>
          <Route path="/single" element={<h2>Single Component!</h2>}/>
          <Route path="/cart" element={<h2>Cart Component!</h2>}/>
        </Routes>
      </div>
    </div>
  );
}
