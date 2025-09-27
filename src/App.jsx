// src/App.jsx
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero"; //not included pa
import About from "./components/about";
import About1 from "./components/about1";
import Mission from "./components/missionvission";
import Products from "./components/products";
import Contact from "./components/contact";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <About />

      <About1 />
      <Mission />
      <Products />
      <Contact />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Aleda Trading. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
