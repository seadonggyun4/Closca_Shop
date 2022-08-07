import AppStateProvider from './Providers/AppStatusProviders';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Shop from './pages/Shop'



function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/shop' element={ <Shop/> }/>
        </Routes>
        <Footer />
        <Nav />
      </BrowserRouter>
    </AppStateProvider>
  );
}

export default App;
