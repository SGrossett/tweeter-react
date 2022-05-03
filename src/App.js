import Navigation from './components/Navigation/index';
import Profile from './components/Profile/index';
import TweetForm from './components/TweetForm/index';
import TweetList from './components/TweetList'

import './App.css';
function App() {
  return (
    <body className=''>
      <Navigation />
      <Profile />
      <main className='container'>
        <TweetForm />
        <TweetList />
      </main>
    </body>
  );
}

export default App;
