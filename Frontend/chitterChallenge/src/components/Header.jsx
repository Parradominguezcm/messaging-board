import "./css/Header.css"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="Header">
            <ul>
                <li><Link to="/makeapeep" className="link">Peep!</Link></li>
                <li><Link to="/login" className="link">Login</Link></li>
                <li><Link to="/signup" className="link">Signup</Link></li>
            </ul>
            <Link to="/" className="title"><h1> Peep your thoughts!</h1></Link>
            <button className="button" onClick={() => setLogin(false)}>Logout</button>
        </div>
    )
}