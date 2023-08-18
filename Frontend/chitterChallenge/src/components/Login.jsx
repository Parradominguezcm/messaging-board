import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = ({ loggedIn, loggedInUser, setLoggedIn, setLoggedInUser }) => {
    const [userName, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [validationError, setshowValidationError] = useState(false)

    const handleChange = (stateFunction) => (e) => {
        setshowValidationError(false)
        stateFunction(e.target.value)
    }

    const loginSubmitHandler = async e => {
        e.preventDefault();
        const response = await fetch(import.meta.env.VITE_PEEPSURL + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName,
                userPassword
            }),
        });
        const loggedInUser = await response.json()

        if (loggedInUser.user.length > 0) {
            setLoggedIn(true)
            setLoggedInUser(loggedInUser.user[0])
        } else {
            setLoggedIn(false)
            setshowValidationError(true)
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <form action="" className="form-group mt-3 text-start pt-5">
                <div className="form-header">
                    {loggedIn && <h2>Welcome, {loggedInUser.userName}</h2>}
                    {!loggedIn && (
                        <>
                            <h2>Log in</h2>
                            <p className="text-muted mb-3"><small>Don`t have an account? <Link to="/signup" className="link">sign up now</Link></small> </p>
                            <div className='mb-3'>
                                <label htmlFor="userName-text" ><small>your username*</small></label>
                                <input
                                    className="form-control"
                                    type="userName"
                                    name="userName"
                                    id="userName-text"
                                    placeholder="userName"
                                    onChange={handleChange(setUserName)}
                                    value={userName}
                                    required />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="userPassword-text"><small>your password*</small></label>
                                <input
                                    className="form-control"
                                    type="userPassword"
                                    name="userPassword"
                                    id="userPassword-text"
                                    placeholder="userPassword"
                                    onChange={handleChange(setUserPassword)}
                                    value={userPassword}
                                    required
                                />
                            </div>

                            {validationError && <strong>try again</strong>}

                            <div>
                                <input className="button" type="submit" onClick={loginSubmitHandler} value="log In" />
                            </div>
                        </>
                    )}
                </div>
            </form >
            <p><Link to="/makeapeep" className="link">make a peep</Link> or <Link to="/" className="link"> Back to the main page! </Link></p>
        </div >
    )
}
