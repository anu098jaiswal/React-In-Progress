import { useState } from "react";
export default function Challenge2(){
   // const[input,setInput]= useState('');

   const[fname,setFname]=useState('');
   const [lname, setLname] = useState("");
   const[mode,setMode]=useState('edit');

    function handleSubmit(e){
     if (mode === "edit") {
       setMode("submit");
     } else {
       setMode("edit");
     }
        e.preventDefault();
  
    }


    return (
      <form onSubmit={handleSubmit}>
        <label>
          First name:{" "}
          {mode === "submit" ? (
            fname
          ) : (
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              disabled={mode === "submit"}
            />
          )}
        </label>
        <br />
        <label>
          second name:{" "}
          {mode === "submit" ? (
            lname
          ) : (
            <input
              onChange={(e) => setLname(e.target.value)}
              disabled={mode === "submit"}
            />
          )}
        </label>
        <br />
        {mode === "edit" ? (
          <button>Save Profile</button>
        ) : (
          <button>Edit Profile</button>
        )}
       
        <p>
          HEllo {fname}
          {lname}
        </p>
      </form>
    );
      
}
