export const SignUpForm = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <form action="" className="form-group mt-3 text-start pt-5">
                <div className="form-header">
                    <h2>Sign Up!</h2>
                    <p className="text-muted mb-3"><small>Join the peeping cummunity!</small> </p>
                    <div className='mb-3'>
                        <label htmlFor="Name" ><small>Your Name</small></label>
                        <input className="form-control" type="name" name="name" id="name-text" placeholder="Your Name" required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="userName-text" ><small>Your user name</small></label>
                        <input className="form-control" type="userName" name="userName" id="userName-text" placeholder="Your User Name" required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email-text" ><small>Email Address*</small></label>
                        <input className="form-control" type="email" name="email" id="email-text" placeholder="Email Address" required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password-text"><small>Password*</small></label>
                        <input className="form-control" type="password" name="password" id="password-text" placeholder="Password" required />
                    </div>

                    <div>
                        <input className="button" type="submit" value="Sign up now!" />
                    </div>
                </div>
            </form>
        </div>
    )
}