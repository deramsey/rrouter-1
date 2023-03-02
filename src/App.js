import './App.css';
import ContactForm from './Contact.js';
import {
  BrowserRouter as Router, Routes, Route, Link
} from "react-router-dom";

const Homepage = () => {
  return(
    <h1>Welcome to our Website!</h1>
  )
}

const About = () => {
  return(
    <h1>Here is information about us!</h1>
  )
}

function App() {
  return (
    <Router>

    <header>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT US</Link>
      <Link to="/contact">CONTACT</Link>
    </header>

    <Routes>
    <Route path="/" element= {<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<ContactForm/>} />

    </Routes>


  </Router>
  );
}

export default App;
