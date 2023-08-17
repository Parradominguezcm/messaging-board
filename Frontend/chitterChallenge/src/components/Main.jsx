import "./MainComponent.css";
import PeepModel from "./utils/peep.model";
import PropTypes from 'prop-types';


export const Main = ({ peep }) => {
    const { peepMessage, peepDate, peepAuthor, _id } = peep;
    const peepPublishDate = new Date(peepDate).toUTCString();

    return (
        <div className="peeps">
            <div className="PeepCard">
                <h2>Author: {peepAuthor}</h2>
                <p className="peepContent">Posted: {peepMessage}</p>
                <p className="date">{peepPublishDate}</p>
            </div>
        </div>
    );
};

Main.propTypes = {
    peep: PropTypes.instanceOf(PeepModel),
}