import './App.css';
import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import Navigation from './components/Navigation/index';
import Profile from './components/Profile/index';
import TweetForm from './components/TweetForm/index';
import TweetList from './components/TweetList'
import profilePic from './images/luffy-wave.png';

const StyledApp = styled.div``;

function App() {
  const name = 'Pirate King Luffy';
  const storedDarkMode = localStorage.getItem('light');
  const [theme, setTheme] = useState(storedDarkMode);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    console.log('theme:', theme)
  }
  useEffect(() => {
    localStorage.setItem('light', theme);
  }, [theme])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme } >
      <GlobalStyles />
      <StyledApp>
        <div>
          <Navigation />
          <Profile name={name} avatar={profilePic} setDarkMode={toggleTheme}/>
          <main className='container'>
            <TweetForm name={name} avatar={profilePic} />
            <TweetList />
          </main>
        </div>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
