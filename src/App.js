import './App.css';

import Page8 from './component/Page8.jsx';
import { BrowserRouter, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import Page0 from './component/Page0.jsx';
import Page9 from './component/Page9.jsx';
import Page10 from './component/Page10.jsx';
import Loginpage from './component/loginpage.jsx';
function App() {
  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page0></Page0>}></Route>
        <Route path='/food' element ={<Page8></Page8>}></Route>
        <Route path='/ffood' element={<Page9></Page9>}></Route>
        <Route path='/fast' element={<Page10></Page10>}></Route>
        <Route path='/login' element={<Loginpage></Loginpage>}></Route>



      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
