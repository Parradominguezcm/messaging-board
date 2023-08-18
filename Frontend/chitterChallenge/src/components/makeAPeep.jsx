import { useState } from "react"
import { Link } from "react-router-dom";

export const MakeAPeep = ({ loggedInUser }) => {
    const [peepMessage, setPeepMessage] = useState()
    const [peepSubmit, setPeepSubmit] = useState(false)

    const handleChange = (stateFunction) => (e) => {
        setshowValidationError(false)
        stateFunction(e.target.value)
    }

    const peepSubmitHandler = async e => {
        e.preventDefault();
        const response = await fetch(import.meta.env.VITE_PEEPSURL + "/makePeep", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                peepMessage,
                peepDate: new Date(),
                peepAuthor: loggedInUser.userName,
            }),
        });

        if (response.json().length > 0)
            setPeepSubmit(true)
        else setPeepSubmit(false)
    }


    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <form action="" className="form-group mt-3 text-start pt-5">
                    <>
                        <div className="form-header">
                            <h2>Make a peep!</h2>
                            <p className="text-muted mb-3"><small>What's your message?</small> </p>
                        </div>
                        <textarea onChange={handleChange(setPeepMessage)}>{peepMessage}</textarea>
                        <button onClick={peepSubmitHandler}>Submit!</button>
                    </>


                    <Link to="/" className="link"> Back to the main page! </Link>
                </form>
            </div>

        </>
    )
}