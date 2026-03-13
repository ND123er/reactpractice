import { useContext } from 'react';
import {ThemeContext} from '../App'
function Page(){
      const {theme, setTheme} = useContext(ThemeContext);
      return(
        <>
        <div className="clickbox">
              <h2>{theme}</h2>
              <button onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')} className="togglestate">Click me</button>
              </div>
              </>
              

      )

}
export default Page