import Navigation from './components/Navigation/index';
import Profile from './components/Profile/index';
import TweetForm from './components/TweetForm/index';
import TweetList from './components/TweetList'
import profilePic from './images/luffy-wave.png';
import './App.css';

function App() {
  const name = 'Pirate King Luffy';

  return (
    <body className=''>
      <Navigation />
      <Profile name={name} avatar={profilePic}/>
      <main className='container'>
        <TweetForm name={name} avatar={profilePic} />
        <TweetList />
      </main>
    </body>
  );
}

export default App;
