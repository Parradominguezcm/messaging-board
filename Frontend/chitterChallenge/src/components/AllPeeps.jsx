import { Main } from "./Main";
import { useEffect, useState } from "react";
import { getPeeps } from "../asyncFunctions/peepAPICall";
import { PropTypes } from 'prop-types';
import PeepModel from "./utils/peep.model";

function AllPeeps() {
    const [allPeeps, setAllPeeps] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const peep = await getPeeps()
            setAllPeeps(peep)
        }
        fetchData()
    }, [])

    const populateMain = () => {
        if (!allPeeps) return null

        const { peeps } = allPeeps;
        if (peeps?.length > 0) {
            const displayPeeps = peeps.map(currentPeep => {
                const peep = new PeepModel(currentPeep.peepMessage, currentPeep.peepDate, currentPeep.peepAuthor, currentPeep._id);
                return <Main peep={peep} key={peep._id} />
            });
            return displayPeeps;
        }
    }

    return (
        <>
            {populateMain()}
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