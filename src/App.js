import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar/MenuBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import About from './components/AboutMe/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );


}

export default App;

{/* <Services></Services> */ }
{/* <About></About> */ }
{/* <PageNotFound></PageNotFound> */ }
