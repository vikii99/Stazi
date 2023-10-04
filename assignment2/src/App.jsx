import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Property from './pages/property';

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">Assignment 2</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/property/:id" element={<Property />} />
          <Route path="" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
