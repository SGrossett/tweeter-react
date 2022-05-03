import Navigation from './components/Navigation/index'
import Profile from './components/Profile/index'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <TweetList />
      <TweetForm />
    </div>
  );
}

export default App;
