import React, { useState } from 'react';
import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App
