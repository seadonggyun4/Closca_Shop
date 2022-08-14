import AppStateProvider from './Providers/AppStatusProviders';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Bottle from './pages/Bottle'
import { useEffect } from 'react';
import Loding from './components/Loding';



function App() {
  //쿠키값 읽기 메서드
  const getCookie = (Name) => {
    let search = Name + "="
    if (document.cookie.length > 0) {
      let offset = document.cookie.indexOf(search)
      if (offset !== -1) {
          offset += search.length
      
          let end = document.cookie.indexOf(";", offset)
        
          if (end === -1) end = document.cookie.length
          return unescape(document.cookie.substring(offset, end))
      }
    }
    return "";
  }

  useEffect(() => {
    //슬라이드 쿠키값 읽기
    if(getCookie("slide")){
      const index = getCookie("slide")
      document.body.setAttribute('data-sld', index);
    }
  })


  return (
    <AppStateProvider>
      <BrowserRouter>
        <Loding />
        <Header />
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/bottle' element={ <Bottle/> }/>
            <Route path='/helmet' element={ <Bottle/> }/>
        </Routes>
        <Footer />
        <Nav />
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
