import { useContext } from 'react'
import { ThemeContext,UserContext } from './Parent'

const ChildC = () => {
    const {theme,setTheme}=useContext(ThemeContext);
    const user =useContext(UserContext);


    function handleTheme(){
        if(theme==='light')  setTheme('dark');
         else setTheme('light');
    }
  return (
    <div>
       <button onClick={handleTheme}>Change Theme</button>
       <p>{user.name}</p>
    </div>
  )
}

export default ChildC
