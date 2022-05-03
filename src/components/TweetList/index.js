import './tweetList.css';

function TweetList(){
  return (
    <section className="tweet-container">
      <article className="tweet">
        <header>
          <div className="profile">
            <img className="profile-pic" src="https://i.imgur.com/73hZDYK.png" />
            <h4>Newton</h4>
          </div>
          
          <div className="handle">
            <h5>@SirIsaac</h5>
          </div>
        </header>
        <div>
          <p>If I have seen further it is by standing on the shoulders of giants</p>
          <hr />
        </div>
        <footer>
          <div><b>10 days ago</b></div>
          <div>
            <button className="icon flag"><i className="fas fa-flag"></i></button>
            <button className="icon retweet"><i className="fas fa-retweet"></i></button>
            <button className="icon heart"><i className="fas fa-heart"></i></button>
          </div>
        </footer>
      </article>

      <article className="tweet">
        <header>
          <div className="profile">
            <img className="profile-pic" src="https://i.imgur.com/nlhLi3I.png" />
            <h4>Descartes</h4>
          </div>
          
          <div className="handle">
            <h5>@rd</h5>
          </div>
        </header>
        <div>
          <p>Je pense , donc je suis</p>
          <hr />
        </div>
        <footer>
          <div><b>10 days ago</b></div>
          <div>
            <button className="icon flag"><i className="fas fa-flag"></i></button>
            <button className="icon retweet"><i className="fas fa-retweet"></i></button>
            <button className="icon heart"><i className="fas fa-heart"></i></button>
          </div>
        </footer>
      </article>
    </section>
  );
}

export default TweetList;
