import './tweetForm.css';
import { useState } from 'react';
import moment from 'moment';

function TweetForm(props) {
  const { avatar, name } = props;
  
  const tweetLimit = 140;
  const [count, setCount] = useState(140);
  const [tweetContext, setTweetContext] = useState('');
  const [dateTimeAgo, setDateTimeAgo] = useState(moment().startOf('hour').fromNow());
  const [tweetID, setTweetID] = useState(3);
  
  const [data, setData] = useState({
    handle: '@luffy',
    avatar: avatar,
    name: name,
    body: tweetContext,
    age: dateTimeAgo,
    id: tweetID   
  })

  console.log(data);
  const handleCount = (input) => { 
    const newData = { ...data }
    newData.body = input;
    setData(newData);
    setCount(tweetLimit - input.length);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("YERRRRRR")
    // fetch('http://localhost:8000/tweets', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // }).then(() => {
    //   console.log('New tweet added');
    //   setTweetID(tweetID + 1);
    // })
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
          value={data.body}
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