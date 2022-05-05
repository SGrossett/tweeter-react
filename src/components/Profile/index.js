import './css/profile.css';
import profilePic from './images/luffy-wave.png';

function Profile() {
  const name = 'Pirate King Luffy';
  const avatar = profilePic;
  return (
    <header>
      <div className='profile-info'>
        <div className='header-img'>
          <img src={avatar} /> 
        </div>
        <div className='name' name='name'>
            <h2>{name}</h2>
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