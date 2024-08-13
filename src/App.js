import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Register from './components/Register';
import Info from './components/Info';
import Content from './pages/Content';
import Partners from './pages/Partners';

export default function App() {


  return (
    <div>
      <BrowserRouter>
     
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Book/*" element={<Book />} />
          <Route path="/Register/" element={<Register />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/Partners" element={<Partners />} />
        </Routes>
        
      </BrowserRouter>

      
    </div>
  );
}
