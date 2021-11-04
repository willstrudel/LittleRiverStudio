import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';
import Videos from './pages/videos';
import Coding from './pages/coding';
import Photography from './pages/photography';


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
    <BrowserRouter>
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/videos" component={Videos} />
            <Route path="/Coding" component={Coding} />
            <Route path="/Photography" component={Photography} />
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
