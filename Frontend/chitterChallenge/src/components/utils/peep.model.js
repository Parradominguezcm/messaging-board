export default class PeepModel {
    constructor(peepMessage, peepDate, peepAuthor, _id = null) {
        this.peepMessage = peepMessage;
        this.peepDate = peepDate;
        this.peepAuthor = peepAuthor;
        this._id = _id;
    }
}