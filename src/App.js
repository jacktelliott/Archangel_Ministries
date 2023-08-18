import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

import Home from './ContentPages/Home'
import About from './ContentPages/About'
import RegnumDeiCenter from './ContentPages/RegnumDeiCenter'
import Contact from './ContentPages/Contact'
import Donate from './ContentPages/Donate'
import NotFound from './ContentPages/NotFound';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
          <div className='content'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/regnum-dei-center' element={<RegnumDeiCenter />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/donate' element={<Donate />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
