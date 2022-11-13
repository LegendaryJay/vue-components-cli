export class Generic {
    objectName = "Generic"
    wrapperType = '';
    collectionId = '';
    artistName = '';
    collectionName = '';
    collectionCensoredName = '';
    collectionViewUrl = '';
    artworkUrl60 = '';
    artworkUrl100 = '';
    collectionPrice = '';
    collectionExplicitness = '';
    trackCount = '';
    country = '';
    currency = '';
    releaseDate = '';
    primaryGenreName = '';
}
export class Track extends Generic {
    objectName = "Track"
    kind = '';
    trackId = '';
    trackName = '';
    trackCensoredName = '';
    trackViewUrl = '';
    artworkUrl30 = '';
    trackPrice = '';
    trackExplicitness = '';
    trackTimeMillis = '';
}
export class Audiobook extends Generic {
    objectName = "Audiobook"
    artistId = '';
    artistViewUrl = '';
    copyright = '';
    previewUrl = '';
    description = '';
    amgArtistId = '';
}
export class Song extends Track {
    objectName = "Song"
    artistId = '';
    artistViewUrl = '';
    previewUrl = '';
    discCount = '';
    discNumber = '';
    trackNumber = '';
    isStreamable = '';
    contentAdvisoryRating = '';
    collectionArtistId = '';
    collectionArtistViewUrl = '';
    collectionArtistName = '';
}
export class TvEpisode extends Track {
    objectName = "TvEpisode"
    artistId = '';
    artistViewUrl = '';
    previewUrl = '';
    discCount = '';
    discNumber = '';
    trackNumber = '';
    collectionHdPrice = '';
    contentAdvisoryRating = '';
    trackHdPrice = '';
    shortDescription = '';
    longDescription = '';
}
export class Podcast extends Track {
    objectName = "Podcast"
    artistId = '';
    artistViewUrl = '';
    feedUrl = '';
    collectionHdPrice = '';
    contentAdvisoryRating = '';
    artworkUrl600 = '';
    genreIds = '';
    genres = '';
}
export class MusicVideo extends Track {
    objectName = "MusicVideo"
    artistId = '';
    artistViewUrl = '';
    previewUrl = '';
    discCount = '';
    discNumber = '';
    trackNumber = '';
    collectionArtistId = '';
    collectionArtistViewUrl = '';
}
export class FeatureMovie extends Track {
    objectName = "FeatureMovie"
    previewUrl = '';
    trackNumber = '';
    collectionHdPrice = '';
    contentAdvisoryRating = '';
    trackHdPrice = '';
    shortDescription = '';
    longDescription = '';
    collectionArtistId = '';
    collectionArtistViewUrl = '';
    trackRentalPrice = '';
    trackHdRentalPrice = '';
}