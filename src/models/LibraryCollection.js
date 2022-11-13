// @ is just an alias for "/src"
import LibraryItem from "@/models/LibraryItem";
// or
//import LibraryItem from "./LibraryItem";

function LibraryCollection(arr){
    arr = arr ?? [];

    arr.addItem = function(item){
        this.push(new LibraryItem(item));

        // used for chaining
        return this;
    }

    arr.removeItem = function(item){
        this.splice(this.indexOf(item), 1);

        return this;
    }

    arr.findItem = function(keyword){
        return this.filter(item => {
            return item.title.contains(keyword); // may not work ;)
        })
    }

    return arr;
}

export default LibraryCollection;
