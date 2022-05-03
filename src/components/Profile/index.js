import './css/profile.css';
import profilePic from './images/luffy-wave.png';

function Profile() {
  return (
    <header>
      <div className='profile-info'>
        <div className='header-img'>
          <img src={profilePic} /> 
        </div>
        <div className='name'>
            <h2>Pirate King Luffy</h2>
        </div>
      </div>
      

        <div className='dark-mode'>
          <button className='icon btn-toggle'>
            <i className='fas fa-moon'></i>
          </button>
        </div>
    </header>
  )
}

export default Profile;