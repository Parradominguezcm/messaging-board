import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [userFirstName, setUserFirstName] = useState()
    const [userLastName, setUserLastName] = useState()
    const [userName, setUserName] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()
    const [signupSuccessful, setSignupSuccessful] = useState(false)

    const handleChangeFirstName = e => {
        setUserFirstName(e.target.value)
    };
    const handleChangeLastName = e => {
        setUserLastName(e.target.value)
    };
    const handleChangeUserName = e => {
        setUserName(e.target.value)
    };
    const handleChangeEmail = e => {
        setUserEmail(e.target.value)
    };
    const handleChangeUserPassword = e => {
        setUserPassword(e.target.value)
    };


    const signupSubmitHandler = async e => {
        e.preventDefault();
        const response = await fetch(import.meta.env.VITE_PEEPSURL + "/signup", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                userFirstName,
                userLastName,
                userName,
                userEmail,
                userPassword
            }),
        });

        setSignupSuccessful(response.ok)
    }

    return (
        <div className="d-flex flex-column align-items-center">
            {signupSuccessful && <h1> success! </h1>}
            {!signupSuccessful && (
                <form action="" className="form-group mt-3 text-start pt-5">
                    <div className="form-header">
                        <h2>Sign Up!</h2>
                        <p className="text-muted mb-3"><small>Join the peeping community!</small> </p>
                        <div className='mb-3'>
                            <label htmlFor="userFirstName" ><small>Your First Name</small></label>
                            <input
                                className="form-control"
                                type="name" name="userFirstName"
                                id="firstName-text"
                                placeholder="Your First Name"
                                onChange={handleChangeFirstName}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="userLastName" ><small>Your Last Name</small></label>
                            <input
                                className="form-control"
                                type="name"
                                name="userLastName"
                                id="lastName-text"
                                placeholder="Your Last Name"
                                onChange={handleChangeLastName}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="userName-text" ><small>Your user name</small></label>
                            <input
                                className="form-control"
                                type="userName"
                                name="userName"
                                id="userName-text"
                                placeholder="Your User Name"
                                onChange={handleChangeUserName}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="userEmail-text" ><small>Email Address*</small></label>
                            <input
                                className="form-control"
                                type="userEmail"
                                name="userEmail"
                                id="email-text"
                                placeholder="Email Address"
                                onChange={handleChangeEmail}
                                required
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="userPassword-text"><small>Password*</small></label>
                            <input
                                className="form-control"
                                type="userPassword"
                                name="userPassword"
                                id="userPassword-text"
                                placeholder="Password"
                                onChange={handleChangeUserPassword}
                                required
                            />
                        </div>

                        <div>
                            <input className="button" type="submit" onClick={signupSubmitHandler} value="Sign up now!" />
                            <Link to="/" className="link">Read some Peeps</Link> or <Link to="/login" className="link">Log in to peep!</Link>
                        </div>
                    </div>
                </form>)}
        </div>
    )
}