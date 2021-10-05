import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };

  useEffect(() => {
    const hideMenu = ()  => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    };
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    };
  });


  return (
    <>
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
    </>
  );
}

export default App;
