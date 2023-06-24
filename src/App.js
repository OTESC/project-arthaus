import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from 'react-router-dom';

import Homepage from './components/homePage';
import Signin from './components/signIn'

function App() {
  return (
    <div>
      <Homepage/>
    </div>
  );
}

export default App;
