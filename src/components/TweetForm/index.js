import './tweetForm.css';
import { useState } from 'react';
import moment from 'moment';

function TweetForm({ avatar, name }) {
  const tweetLimit = 140;
  const [count, setCount] = useState(140);
  const [tweetContext, setTweetContext] = useState('')

  const dateTimeAgo = moment().startOf('hour').fromNow();

  const [data, setData] = useState({
    avatar: avatar,
    name: name,
    handle: '@luffy',
    body: tweetContext,
    age: dateTimeAgo   
  })

  const handleCount = (input) => {
    setTweetContext(input);
    setCount(tweetLimit - input.length);
  }
  console.log(data);

  const handleSubmit = (event) => {
    
    console.log('tweet context: ', tweetContext);
    event.preventDefault();
  }
  return (
    <section className="new-tweet">
      <h2>Compose Tweet</h2>
      <form>
        <label>What are you humming about?</label>
        <textarea 
          rows={2} 
          type="text"
          name='body'
          className="tweet-text"
          value={tweetContext}
          onChange={(event) => handleCount(event.target.value)}>  
        </textarea>
        <div>
          <button 
            type="submit"
            onSubmit={handleSubmit}>Tweet</button>
          <span name="counter" className={count < 0 ? 'counter-red' : 'counter'} >{count}</span>
        </div>
      </form>
    </section>
  )
}

export default TweetForm;