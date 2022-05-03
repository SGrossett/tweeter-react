import './tweetForm.css';
import { useState } from 'react';

function TweetForm() {
  const [count, setCount] = useState(0);

  return (
    <section className="new-tweet">
      <h2>Compose Tweet</h2>
      <form action="/tweets/" method="POST">
        <label for="tweet-text">What are you humming about?</label>
        <textarea 
          rows={2} 
          type="text"
          className="tweet-text"
          onChange={(e) => setCount(this.value.length)}>  
        </textarea>
        <div>
          <button type="submit">Tweet</button>
          <span name="counter" className="counter" for="tweet-text">140</span>
        </div>
      </form>
    </section>
  )
}

export default TweetForm;