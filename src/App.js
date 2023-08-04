import './App.css';
import Routing from './components/routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  

  return (

    <div>
      <Router>
        <Routing />
      </Router>
    </div>

  );
}

export default App;
