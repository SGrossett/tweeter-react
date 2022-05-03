import './css/profile.css';
import profilePic from './images/luffy-wave.png';

function Profile() {
  return (
    <header>
      <div class='profile-info'>
        <div class='header-img'>
          <img src={profilePic} /> 
        </div>
        <div class='name'>
            <h2>Pirate King Luffy</h2>
        </div>
      </div>
      

        <div class='dark-mode'>
          <button class='icon btn-toggle'>
            <i class='fas fa-moon'></i>
          </button>
        </div>
    </header>
  )
}

export default Profile;