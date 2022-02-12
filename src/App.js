import Sign from './components/Sign';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Vid from './components/Vid';


function App() {
  return (
    <>
    <Router>
    <div className='Navbar'>
        <Link to="./Main">Home</Link>
        <Link to="./Contact">Contact</Link>
        <Link to="./About">About </Link>
        <Link to="./Sign">Sign In </Link>
    </div>
            <Routes>
                <Route path="/" element={<Vid/>} />
                <Route path="/main" element={<Main/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/sign" element={<Sign/>} />
                <Route path="/about" element={<About/>} />
             </Routes>
    </Router>
    </>
  );
}

export default App;
