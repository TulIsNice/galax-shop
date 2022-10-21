import './App.css';
import {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add'
import Login from './components/Login';
import Find from './components/Find';
function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={< Home />}></Route>  
<Route exact path='/add' element={< Add />}></Route>   
<Route exact path='/login' element={< Login />}></Route>   
<Route exact path='/find' element={< Find />}></Route>   
<Route exact path='*' element={< Home />}></Route>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
