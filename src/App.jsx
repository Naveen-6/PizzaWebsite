import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";

import "./App.css"



function App() {
  return (
    <Router>
       <Navbar/>
       <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/menu" exact Component={Menu}></Route>
        <Route path="/about" exact Component={About}></Route>
        <Route path="/contact" exact Component={Contact}></Route>
  
       </Routes>
       <Footer/>
    </Router>
   
  );
}

export default App;