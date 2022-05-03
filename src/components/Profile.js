import React from 'react';

function Profile() {
  return (
    <aside>
      <div class="profile">
        <img class="profile__image" src="./profile-hex.png" />
      </div>
      <br />
      <div class="profile__name">
        <h2><span class="profile--bold">Amy</span> Mansell</h2>
      </div>
    </aside>
  );
}

export default Profile;
