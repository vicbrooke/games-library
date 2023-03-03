import "../styles/_NavBar.scss"
import { Link } from "react-router-dom"
import {ReactComponent as GameIcon} from "../video-game-gamepad-outline-icon.svg"
const moon = require('../images/moon.svg').default
const sun = require('../images/sun.svg').default

export default function NavBar({theme, setTheme}){

    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
        } else {
        setTheme('light');
        }
    }
    
    return (
        <nav>
            <div className="nav-container">
                <div className="link-container">
                    <GameIcon className="icon"/>
                    <button className="theme-btn" onClick={toggleTheme}>
                        {theme === 'light' ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" />}
                        </button>
                </div>
                <h1>Games Library</h1>
                <div className="links">
                    <div className="link-container">
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div className="link-container">
                        <Link to={"/favourites"}>Favourite Games</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}