import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Tela1 from './tela1.jsx';
import Tela2 from './tela2.jsx';
import Tela3 from './tela3.jsx';
import Tela4 from './tela4.jsx';

function App() {
  return (
    <Router basename="/projeto.ps2024.2">
      <Routes>
        <Route path="/" element={<Navigate to="/tela1" />} />
        <Route path="/tela1" element={<Tela1 />} />
        <Route path="/tela2.jsx" element={<Tela2 />} />
        <Route path="/tela3.jsx" element={<Tela3 />} />
        <Route path="/tela4.jsx" element={<Tela4 />} />
      </Routes>
    </Router>
  );
}

export default App;
