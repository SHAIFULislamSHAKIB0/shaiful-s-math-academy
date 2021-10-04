import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar/MenuBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Services></Services>
      </Router>
    </div>
  );
}

export default App;
