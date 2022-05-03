import './tweetList.css';
function TweetList(){
  return (
    <section class="tweet-container">
      <article class="tweet">
        <header>
          <div class="profile">
            <img class="tweet--avatar" src="https://i.imgur.com/73hZDYK.png" />
            <h4>Newton</h4>
          </div>
          
          <div class="handle">
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
            <button class="icon flag"><i class="fas fa-flag"></i></button>
            <button class="icon retweet"><i class="fas fa-retweet"></i></button>
            <button class="icon heart"><i class="fas fa-heart"></i></button>
          </div>
        </footer>
      </article>

      <article class="tweet">
        <header>
          <div class="profile">
            <img class="tweet--avatar" src="https://i.imgur.com/nlhLi3I.png" />
            <h4>Descartes</h4>
          </div>
          
          <div class="handle">
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
            <button class="icon flag"><i class="fas fa-flag"></i></button>
            <button class="icon retweet"><i class="fas fa-retweet"></i></button>
            <button class="icon heart"><i class="fas fa-heart"></i></button>
          </div>
        </footer>
      </article>
    </section>
  );
}

export default TweetList;
