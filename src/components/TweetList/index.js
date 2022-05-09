import './tweetList.css';
import { useState, useEffect } from 'react';

function TweetList(){
  const [tweets, setTweets] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/tweets')
      .then(res => {
        return res.json() })
      .then((data) => {
        setTweets(data.reverse()) })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="tweet-container">
      {tweets && tweets.map((tweet) => (
        <article className="tweet" key={tweet.id}>
          <header>
            <div className="profile">
              <img className="profile-pic" src={tweet.avatar} alt='User profile pic'/>
              <h4>{tweet.name}</h4>
            </div>
            
            <div className="handle">
              <h5>{tweet.handle}</h5>
            </div>
          </header>
          <div>
            <p>{tweet.body}</p>
            <hr />
          </div>
          <footer>
            <div><b>{tweet.age}</b></div>
            <div>
              <button className="icon flag"><i className="fas fa-flag"></i></button>
              <button className="icon retweet"><i className="fas fa-retweet"></i></button>
              <button className="icon heart"><i className="fas fa-heart"></i></button>
            </div>
          </footer>
        </article>
      ))}
    </section>
  );
}

export default TweetList;