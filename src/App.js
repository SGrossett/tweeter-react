import Navigation from './components/Navigation/index';
import Profile from './components/Profile/index';
import TweetForm from './components/TweetForm/index';
import TweetList from './components/TweetList'
import profilePic from './images/luffy-wave.png';
import './App.css';

function App() {
  return (
    <body className=''>
      <Navigation />
      <Profile name='Pirate King Luffy' avatar={profilePic}/>
      <main className='container'>
        <TweetForm />
        <TweetList />
      </main>
    </body>
  );
}

export default App;
