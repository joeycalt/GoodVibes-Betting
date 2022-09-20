import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Baseball from './pages/Baseball';
import Football from './pages/Football';
import Hockey from './pages/Hockey';
import Footer from './components/Footer';
import First from './components/First';
import Restricted from './components/Restricted';
import About from './pages/About';

function App() {
  return (
    <>
    <div className="App">
     <Header />
     <Routes>
     <Route path='/' element={<First />} />
     <Route path='/restricted' element={<Restricted />} />
     <Route path='/home' element={<Main />} />
     <Route path='/baseball' element={<Baseball />} />
     <Route path='/football' element={<Football />} />
     <Route path='/hockey' element={<Hockey />} />
     <Route path='/about' element={<About />} />
     </Routes>
     <Footer />
    </div>
    </>
  );
}

export default App;
