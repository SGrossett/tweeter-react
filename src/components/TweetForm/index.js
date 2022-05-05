import './tweetForm.css';
import { useState } from 'react';

function TweetForm() {
  const tweetLimit = 140;
  const [count, setCount] = useState(140);
  const [tweetContext, setTweetContext] = useState('')

  const [data, setData] = useState({
    avatar: '',
    name: '',
    handle: '',
    body: '',
    age: ''    
  })

  const handleCount = (input) => {
    setTweetContext(input);
    setCount(tweetLimit - input.length);
  }

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