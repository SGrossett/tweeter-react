import './tweetForm.css';
import moment from 'moment';
import { useState } from 'react';


function TweetForm(props) {
  const { avatar, name } = props;
  const randomID = () => { 
   return (Math.random() + 1).toString(36).substring(7);
  }
  const tweetLimit = 140;
  const [count, setCount] = useState(140);
  const [dateTimeAgo, setDateTimeAgo] = useState(moment().startOf('hour').fromNow());
  const [tweetID, setTweetID] = useState(randomID());
  const [errorMsg, setErrorMsg] = useState('');

  const [data, setData] = useState({
    handle: '@luffy',
    avatar: avatar,
    name: name,
    body: '',
    age: dateTimeAgo,
    id: tweetID
  })

  const handleCount = (input) => {
    if (data.body > 0 &&  data.body <= 140) {
      setErrorMsg('');
    }
    const newData = { ...data }
    newData.body = input;
    setCount(tweetLimit - input.length);
    setData(newData);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.body) {
      setErrorMsg('Tweet must be at least one character long');
    } else if (data.body.length > 140) {
      setErrorMsg('Tweet capacity reached');
    } else {
      fetch('http://localhost:8000/tweets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(() => {
        console.log('New tweet added');
        setData({ ...data, id: randomID() })
      })
    }
  }
  return (
    <section className='new-tweet'>
      <h2>Compose Tweet</h2>
      <form onSubmit={handleSubmit}>
        <label>What are you humming about?</label>
        <textarea 
          rows={2} 
          type='text'
          name='body'
          className='tweet-text'
          value={data.body}
          onChange={(event) => handleCount(event.target.value)}>  
        </textarea>
        <div>
          <button type='submit'>Tweet</button>
          <span name='counter' className={count < 0 ? 'counter-red' : 'counter'} >{count}</span>
        </div>
      </form>
      {errorMsg && 
        <div className='display-error'>
          <i className='fas fa-exclamation-triangle'></i>
          <p className='errorMsg'>{errorMsg}</p>
          <i className='fas fa-exclamation-triangle'></i>
        </div>
      }
      
    </section>
  )
}

export default TweetForm;