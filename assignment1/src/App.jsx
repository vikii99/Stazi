
import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Default from './pages/Default';
import { Provider } from "react-redux";
import { store } from "./redux/store";



function App() {

  return (
    <>
      <Provider store={store}>
        <h1 className="text-3xl font-bold underline">Assignment 1</h1>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/page/:page" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
