import './App.css';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
} from 'react-router-dom';

<<<<<<< HEAD
import Homepage from './components/homePage';
import Signin from './components/signIn'
=======
import Header from './components/header';
import Slider from './components/slider';
import Homebody from './components/homebody';
import SignIn from './components/signIn';
import PersonalDetails from'./components/personalDetails';
import Signup from './components/signup';
>>>>>>> origin/Robert's-Branch

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Homepage/>
=======
  <Signup/>
>>>>>>> origin/Robert's-Branch
    </div>
  );
}

export default App;
