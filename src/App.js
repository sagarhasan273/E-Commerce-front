import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import './app.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <h1>E-Dashboard</h1>
        <Routes>
          <Route path="/" element={<h1>Products Component</h1>} />
          <Route path="/add" element={<h1>Add Component</h1>} />
          <Route path="/update" element={<h1>Update Component</h1>} />
          <Route path="/logout" element={<h1>logout Component</h1>} />
          <Route path="/profile" element={<h1>profile Component</h1>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
