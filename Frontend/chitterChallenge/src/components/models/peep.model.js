export default class PeepModel {
    constructor(peepMessage, peepDate, peepAuthor, _id = null) {
        this.peepMessage = peepMessage;
        this.peepDate = new Date(peepDate).toUTCString();
        this.peepAuthor = peepAuthor;
        this._id = _id;
    }
}