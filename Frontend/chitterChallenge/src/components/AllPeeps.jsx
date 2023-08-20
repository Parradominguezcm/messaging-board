import { Peep } from "./Peep";
import { useEffect, useState } from "react";
import { getPeeps } from "../asyncFunctions/peepAPICall";
import { PropTypes } from 'prop-types';
import PeepModel from "./models/peep.model";

function AllPeeps() {
    const [allPeeps, setAllPeeps] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const peep = await getPeeps()
            setAllPeeps(peep)
        }

        fetchData()
    }, [])

    return (
        <>
            {allPeeps && allPeeps.peeps?.length > 0 && (
                allPeeps.peeps.map(currentPeep => {
                    const peep = new PeepModel(currentPeep.peepMessage, currentPeep.peepDate, currentPeep.peepAuthor, currentPeep._id)
                    return <Peep peep={peep} key={peep._id} />
                }))}
        </>
    )
}

AllPeeps.propTypes = {
    allPeeps: PropTypes.oneOfType([
        PropTypes.exact({
            peeps: PropTypes.arrayOf(
                PropTypes.shape({
                    _id: PropTypes.string,
                    peepMessage: PropTypes.string,
                    peepAuthor: PropTypes.string,
                    peepDate: PropTypes.object
                })
            ),
            error: PropTypes.string
        }),
    ])
};

export default AllPeeps;