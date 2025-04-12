import { useState, useCallback ,useEffect, useRef} from "react";

export default function PasswordGenerator() {
  const [length, setlength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef=useRef(null);

  //generate function is memoized (i.e.,not redefined on every render)
  // and will only re-run if any of the dependencies (length,number, character)change.
  const Generate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()";


    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random() * str.length);//index not char
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);

   const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!"); ;
   },[password]);

useEffect(()=>{
   Generate()
},[length,number,character,PasswordGenerator])


  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <input type="text" value={password} placeholder="password"
         ref={passwordRef} />
        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>
      <div>
        <input
          type="range"
          min={6}
          max={15}
          value={length}
          onChange={(e) => setlength(e.target.value)}
        />
        <label>Length:{length}</label>
        <input type="checkbox"
              onChange={()=>{setNumber((prev) => !prev)} }/>
        <label>Number</label>

        <input type="checkbox" onChange={()=>{setCharacter((prev) => !prev)} }/>
        <label>Characters</label>
      </div>
    </div>
  );
}
