import './index.css'
import React from 'react';
// import { Routes, Route} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Landing from '../src/Components/Mobile/HomeScreen/Landing';


function App() {
  return (
    <>
      {/* <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes> */}
      
      <Landing/>
      {/* <Footer/> */}
    </>
  );
}
export default App;

