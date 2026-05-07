import React from 'react'
import { useState } from 'react';

//Avoid redundant state
function Form2() {

    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    

    const fullname= firstname+' ' + lastname;
  return (
    <div>
      <h1>Lets Check You In</h1>
      <p>
        First name :
        <input
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </p>
      <p>
        Last name :
        <input
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </p>
      <p>
        {" "}
        Issued to : {fullname}
      </p>
    </div>
  );
}

export default Form2
