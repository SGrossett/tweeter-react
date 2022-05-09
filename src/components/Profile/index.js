import './profile.css';

function Profile(props) {
  const { name, avatar } = props;

  return (
    <header className='header'>
      <div className='profile-info'>
        <div className='header-img' avatar={avatar}>
          <img src={avatar} alt=''/> 
        </div>
        <div className='name' name={name}>
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