import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from 'react-router-dom';

import Header from './components/header';
import Slider from './components/slider';
import Homebody from './components/homebody';
import SignIn from './components/signIn';
import PersonalDetails from'./components/personalDetails';
import Signup from './components/signup';

function App() {
  return (
    <div>
  <Signup/>
    </div>
  );
}

export default App;
