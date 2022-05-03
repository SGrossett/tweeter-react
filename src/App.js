import Navigation from './components/Navigation/index';
import Profile from './components/Profile/index';
import TweetForm from './components/TweetForm/index';
import TweetList from './components/TweetList'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <TweetForm />
      <TweetList />
    </div>
  );
}

export default App;
