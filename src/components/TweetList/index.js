import styles from './tweetList.module.css';
import { useState, useEffect, Fragment } from 'react';
import { BsTrash } from 'react-icons/bs';
import classLister from 'css-module-class-lister';

import { Dropdown, DropdownButton } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';


function TweetList(){
  const [tweets, setTweets] = useState(null);  
  const classes = classLister(styles);

  useEffect(() => {
    fetch('http://localhost:8000/tweets')
      .then(res => {
        return res.json() })
      .then((data) => {
        setTweets(data.reverse()) })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className={classes('tweet-container')}>
      {tweets && tweets.map((tweet) => (
        <article className={classes('tweet')} key={tweet.id}>
          <header>
            <div className={classes('profile')}>
              <img className={classes('profile-pic')} src={tweet.avatar} alt='User profile pic'/>
              <div>
                <h4 className={classes('mb-0')}>{tweet.name}</h4>
                <h5 className={classes('mt-0')}>{tweet.handle}</h5>
              </div>
            </div>
            
            <div className={classes('handle')}>
            <DropdownButton align="end" title="Dropdown end" id="dropdown-menu-align-end">
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
            </div>
          </header>
          <div>
            <p>{tweet.body}</p>
            <hr />
          </div>
          <footer>
            <div><b>{tweet.age}</b></div>
            <div>
              <button className={classes('icon flag')}><i className={classes('fas fa-flag')}></i></button>
              <button className={classes('icon retweet')}><i className={classes('fas fa-retweet')}></i></button>
              <button className={classes('icon heart')}><i className={classes('fas fa-heart')}></i></button>
            </div>
          </footer>
        </article>
      ))}
    </section>
  );
}

export default TweetList;

const myOptions = [
  {
    name: 'Delete button',
    href: '##',
    icon: <BsTrash />
  },
  
];

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
  },
]