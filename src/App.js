import './App.css';

import Header from './components/header';
import Slider from './components/slider';
import Homebody from './components/homebody';
import PersonalDetails from './components/personalDetails';
import FrequentlyAskedQuestions from './components/frequentQuestions';

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Homebody/>
    </div>
  );
}

export default App;
