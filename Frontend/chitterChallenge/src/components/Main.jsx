import "./css/MainComponent.css";
import PeepModel from "./utils/peep.model";
import PropTypes from 'prop-types';


export const Main = ({ peep }) => {
    const { peepMessage, peepDate, peepAuthor, } = peep;
    const peepPublishDate = new Date(peepDate).toUTCString();

    return (
        <div className="peeps">
            <div className="PeepCard">
                <strong>Author: {peepAuthor}</strong><br />
                <strong className="peepContent">Posted:</strong><p>{peepMessage}</p>
                <strong className="date"> Published on:</strong><p>{peepPublishDate}</p>
            </div>
        </div>
    );
};

Main.propTypes = {
    peep: PropTypes.instanceOf(PeepModel),
}