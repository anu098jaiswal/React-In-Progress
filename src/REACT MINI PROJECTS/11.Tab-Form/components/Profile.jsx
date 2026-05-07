import React from 'react'

function Profile({data}) {
  return (
    <div>
      <label> Name: </label>
      <input type="text" />
      <label> Age: </label>
      <input type="text" />
      <label> Email: </label>
      <input type="text" />
    </div>
  );
}

export default Profile
