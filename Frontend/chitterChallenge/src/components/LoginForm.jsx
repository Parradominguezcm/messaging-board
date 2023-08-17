
export const LoginForm = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <form action="" className="form-group mt-3 text-start pt-5">
                <div className="form-header">
                    <h2>Log in</h2>
                    <p className="text-muted mb-3"><small>Don`t have an account? <button className="button">sign up now</button></small> </p>
                    <div className='mb-3'>
                        <label htmlFor="email-text" ><small>Email Address*</small></label>
                        <input className="form-control" type="email" name="email" id="email-text" placeholder="Email Address" required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password-text"><small>Password*</small></label>
                        <input className="form-control" type="password" name="password" id="password-text" placeholder="Password" required />
                    </div>

                    <div>
                        <input className="button" type="submit" value="Sign In" />
                    </div>
                </div>
            </form>
        </div>
    )
}
