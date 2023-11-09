import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Watch from './pages/Watch';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<Watch/>}/>

      </Routes>
      <Footer/>

      
     
      
      
      
    </div>

  )
}

export default App;
