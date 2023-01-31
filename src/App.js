import React, { useState,} from 'react'
import s from './App.module.scss';
import Hompage from './pages/Hompage/Hompage';
import Header from './components/Header/Header';
import Basket from './pages/Basket/Basket'
import Mysnye from './Vidy/Mysnye';
import Vegetar from './Vidy/Vegetar';
import Gril from './Vidy/Gril';
import Ostrye from './Vidy/Ostrye';
import Zakrytye from './Vidy/Zakrytye';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
function App() {

 
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <Menu />
        <Routes>
          <Route path='/' element={<Hompage  />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/mysnye' element={<Mysnye />} />
          <Route path='/vegetar' element={<Vegetar />} />
          <Route path='/gril' element={<Gril />} />
          <Route path='/ostrye' element={<Ostrye />} />
          <Route path='/zakrytye' element={<Zakrytye />} />
        </Routes>

      </div>
    </BrowserRouter>

  );

}

export default App;
