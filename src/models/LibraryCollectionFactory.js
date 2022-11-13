// more info on factories:
// https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d

import {Audiobook, FeatureMovie, Podcast, Song, TvEpisode} from "@/models/models";
import LibraryCollection from "@/models/LibraryCollection";

export class LibraryCollectionFactory {
    // Static methods can be called without creating an instance.
    // For example: PublicationCollectionFactory.createFromGoogleBooks(...)
    // will return a new PublicationCollection
    static createFromGoogleBooks(results){
        const collection = new LibraryCollection();

        // loop through the results and determine what kind of publication it is
        results.forEach(item => {
            let newItem = false;

            // create correct object type
            switch(item.wrapperType.toLowerCase() + (item?.kind ?? "" ).toLowerCase()){
                case "tracksong":
                    // create book
                    // if you want to pick and choose what's passed in, do this:
                    //newItem = new Book(volume.volumeInfo.title, ...);

                    // Copy everything from the API book to our Book model
                    // we lose the ability to pick and choose what is copied over,
                    // but it's really easy. Downside is, any future code or library we use
                    // must follow Google Book's object format.
                    newItem = Object.assign(new Song(), item);
                    break;
                case "trackfeature-movie":
                    // create magazine
                    newItem = Object.assign(new FeatureMovie(), item);
                    break;
                case "audiobook":
                    // create magazine
                    newItem = Object.assign(new Audiobook(), item);
                    break;
                case "song":
                    // create magazine
                    newItem = Object.assign(new Song(), item);
                    break;
                case "tracktv-episode":
                    // create magazine
                    newItem = Object.assign(new TvEpisode(), item);
                    break;
                case "trackpodcast":
                    // create magazine
                    newItem = Object.assign(new Podcast(), item);
                    break;
                case "trackmusic-video":
                    // create magazine
                    newItem = Object.assign(new Podcast(), item);
                    break;
                default:
                    console.warn('We found ' + item.wrapperType.toLowerCase() + item?.kind.toLowerCase(), item);
                    break;
            }

            if(newItem){
                collection.addItem(newItem);
            }
        })


        return collection;
    }
}
