import './tweetList.css';
import { useState, useEffect, Fragment } from 'react';
import { BsTrash } from 'react-icons/bs';
import classLister from 'css-module-class-lister';

import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';

function TweetList(){
  const [tweets, setTweets] = useState(null);  
  // const classes = classLister(styles);

  useEffect(() => {
    fetch('http://localhost:8000/tweets')
      .then(res => {
        return res.json() })
      .then((data) => {
        setTweets(data.reverse()) })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className='tweet-container'>
      {tweets && tweets.map((tweet) => (
        <article className='tweet' key={tweet.id}>
          <header>
            <div className='profile'>
              <img className='profile-pic' src={tweet.avatar} alt='User profile pic'/>
              <div>
                <h4 className='mb-0'>{tweet.name}</h4>
                <h5 className='mt-0'>{tweet.handle}</h5>
              </div>
            </div>
            
            <div className='handle'>
            <DropdownMenu trigger="..." placement="bottom-end" className='text-black'>
              <DropdownItemGroup>
                <DropdownItem>Delete</DropdownItem>
              </DropdownItemGroup>
            </DropdownMenu>
            </div>
          </header>
          <div>
            <p>{tweet.body}</p>
            <hr />
          </div>
          <footer>
            <div><b>{tweet.age}</b></div>
            <div>
              <button className='icon flag'><i className='fas fa-flag'></i></button>
              <button className='icon retweet'><i className='fas fa-retweet'></i></button>
              <button className='icon heart'><i className='fas fa-heart'></i></button>
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