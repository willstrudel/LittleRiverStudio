import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
    </>
  );
}

export default App;
