import logo from './logo.svg';
import './App.css';
import Navbar from './components/common/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Conatact';
import Post from './pages/Menu';
import Footer from './components/common/Footer';
import Test from './pages/Test';
import NotFound from './pages/NotFound';
 export default function App() {
  return (
    <div className="App">
            <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about"element={<About/>}/>
              <Route path="/post" element={<Post/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/test/:id/:name" element={<Test/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>

            </Router>
         <Footer/>
          </div>
          )
          }