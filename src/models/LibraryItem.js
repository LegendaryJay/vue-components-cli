function LibraryItem(media){
    // define available statuses in a ENUM
    const STATUSES = {CHECKED_IN: 'in', CHECKED_OUT: 'out', ON_HOLD: 'hold' }

    // add functionality to the media at runtime by "decorating" it
    // ***sometimes*** this is referred to composition in JS

    // set the default status
    media._status = STATUSES.CHECKED_IN;

    // methods
    media.checkIn = function(){
        this._status = STATUSES.CHECKED_IN;
    }

    media.checkOut = function(){
        this._status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this._status === STATUSES.CHECKED_IN;
    }

    // return the decorated object
    return media;
}

export default LibraryItem;
