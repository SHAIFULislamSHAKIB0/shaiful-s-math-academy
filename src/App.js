import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar/MenuBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Blogs></Blogs>
        <Services></Services>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
