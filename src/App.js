import Navigation from './components/Navigation/index';
import Profile from './components/Profile/index';
import TweetForm from './components/TweetForm/index';
import TweetList from './components/TweetList'

import './App.css';
function App() {
  return (
    <div className=''>
      <Navigation />
      <Profile />
      <div className='main'>
        <TweetForm />
        <TweetList />
      </div>
    </div>
  );
}

export default App;
