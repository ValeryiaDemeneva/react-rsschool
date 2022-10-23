import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import AboutAs from './components/AboutAs/AboutAs';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './components/Form/Form';
import ReactApi from './React-api/ReactApi';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">

        <Header />
        <div className='main-content'>
          <Routes>
            <Route path="/DreamHouse" element={ <Main />} />
            <Route path="/about" element={<AboutAs />} />
            <Route path="/form" element={<Form />} />
            <Route path="/API" element={<ReactApi />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
