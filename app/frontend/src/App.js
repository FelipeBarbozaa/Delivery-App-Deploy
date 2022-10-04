import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<h1>Hello World</h1>}/>
      </Routes>
    </Router>
  );
}
