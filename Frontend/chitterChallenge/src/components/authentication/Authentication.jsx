import '../css/login.css';
import { Link } from 'react-router-dom';

export const Authentication = () => {
    return (
        <div className="row">
            <div className="col-lg-6 offset-3">
                <h3>Login</h3>
                <p>You must be logged in to make a peep</p>
                <Link to="/login">Log in now!</Link>
            </div>
        </div>
    )
}



