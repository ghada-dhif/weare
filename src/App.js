import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Btq from './Components/Btq';
import Realisation from './Components/Realisation';
function App() {
  
  return (
    <div className="App">
      
        
      <Navbar />
      
          <div>
      <Router>
      {/* <div className="Lin">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li><Link to="/Btq">Boutique</Link></li>
          </ul>
        </nav>
      </div> */}
      <Switch>
        <Route path="/btq" exact component={Btq} />
        
        <Route  path="/" exact component={Home} />
         
         </Switch>
      </Router> 
      </div>
     <br />
    

    <Footer /> 
    
    
    </div>
    
  );
}

export default App;
