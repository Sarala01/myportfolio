import './App.css';
import {Route,Routes} from 'react-router-dom'
import About from './containers/about';
import Home from './containers/home';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    {/* paricles js */}
    {/* navbar */}
    <Navbar/>
    {/* main page content */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
