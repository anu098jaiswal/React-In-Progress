import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate(); //useNavigate() returns a function.
  //navigate is now a function that can be used to change page
  function handleClick() {
    navigate("/about"); //Navigate to the "/about" page when the button is clicked
  }
  return (
    <div>
      Home Page
      <button onClick={handleClick}> Move to About Page </button>
    </div>
  );
}

export default Home
