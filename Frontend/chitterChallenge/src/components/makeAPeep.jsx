import { useState } from "react"
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"
import { createPeepAPICall } from "../asyncFunctions/createPeepAPICall";

const MakeAPeep = ({ loggedInUser }) => {
    const [peepMessage, setPeepMessage] = useState()
    const [peepSubmit, setPeepSubmit] = useState(false)

    const handleChange = (stateFunction) => (e) => {
        stateFunction(e.target.value)
    }

    const peepSubmitHandler = async e => {
        e.preventDefault();
        const response = await createPeepAPICall(loggedInUser.userName, peepMessage)

        setPeepSubmit(response.ok)
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                {peepSubmit && <h1>You have created a peep!</h1>}
                {!peepSubmit && <form action="" className="form-group mt-3 text-start pt-5">
                    <>
                        <div className="form-header">
                            <h2>Make a peep!</h2>
                            <p className="text-muted mb-3"><small>What&apos;s your message?</small> </p>
                        </div>
                        <textarea onChange={handleChange(setPeepMessage)}>{peepMessage}</textarea>
                        <br />
                        <button className="button" onClick={peepSubmitHandler}>Submit!</button>
                    </>
                </form>}
                <Link to="/" className="link"> Back to the main page! </Link>
            </div>

        </>
    )
}
MakeAPeep.propTypes = {
    loggedInUser: PropTypes.exact({
        "_id": PropTypes.string,
        "userName": PropTypes.string,
        "userFirstName": PropTypes.string,
        "userLastName": PropTypes.string,
        "userEmail": PropTypes.string,
        "userPassword": PropTypes.string,
        __v: PropTypes.number,
    }),
    peepSubmit: PropTypes.bool,
    userName: PropTypes.string
}
export default MakeAPeep;