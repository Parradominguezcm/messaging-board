import "./css/Peep.css";
import PeepModel from "./models/peep.model";
import PropTypes from 'prop-types';

export const Peep = ({ peep }) => {
    const { peepMessage, peepDate, peepAuthor, } = peep;

    return (
        <div className="peeps">
            <div className="PeepCard">
                <strong>Author: {peepAuthor}</strong><br />
                <strong className="peepContent">Posted:</strong><p>{peepMessage}</p>
                <strong className="date"> Published on:</strong><p>{peepDate}</p>
            </div>
        </div>
    );
};

Peep.propTypes = {
    peep: PropTypes.instanceOf(PeepModel),
}