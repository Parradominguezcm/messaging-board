import "./css/Header.css"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Header = ({ loggedIn, setLogin }) => {

    const logout = () => setLogin(false)

    return (
        <div className="Header">
            <ul>

                <li><Link to="/makeapeep" className="link">Peep!</Link></li>
                <li><Link to="/login" className="link">Login</Link></li>
                <li><Link to="/signup" className="link">Signup</Link></li>
            </ul>
            <Link to="/" className="title"><h1> Peep your thoughts!</h1></Link>
            {loggedIn && <button className="button" onClick={logout}>Logout</button>}
        </div>
    )
}

Header.propTypes = {
    setLogin: PropTypes.func,
    loggedIn: PropTypes.bool,
}