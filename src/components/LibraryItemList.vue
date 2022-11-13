<template>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <form v-on:submit.prevent="searchBooks" >
      <input v-model="searchTerm"/>
      <button>Submit!</button>
    </form>
    <div class="col" v-for="item in library" :key="item.title">
      <library-item-card :item="item"
                         :remove-method="itemToDelete => library.value.removeItem(itemToDelete)"></library-item-card>
    </div>
  </div>
</template>

<script>
import LibraryItemCard from "@/components/LibraryItemCard";
import {LibraryCollectionFactory} from "@/models/LibraryCollectionFactory";
import LibraryCollection from "@/models/LibraryCollection";
import axios from "axios";
import {computed, ref} from "vue";



export default {
  name: "LibraryItemList",
  components: {LibraryItemCard},

  data() {
    return {
      searchTerm: "test",
      searchResults: ref(new LibraryCollection()),
      searchBooks: function () {
        // prepare and perform search
        if (this.searchTerm) {
          // clear results
          this.searchResults.value = new LibraryCollection();

          // display message
          this.searching = true;

          // build request arguments
          let url = 'https://itunes.apple.com/search';
          let config = {
            params: {
              term: this.searchTerm,
              limit: 36,
            },
            // headers: {}
          }

          // execute ajax request using promises
          axios.get(url, config)
              .then(response => {
                console.log('Found some books', response);

                if (response.data.results?.length) {
                  // store the array of items in the app data
                  // use this if using plain arrays
                  //this.searchResults = response.data.items;

                  //this.searchResults = new PublicationCollection(response.data.items);

                  this.searchResults.value = LibraryCollectionFactory.createFromGoogleBooks(response.data.results);

                  console.log(this.searchResults.value);
                }
              })
              .catch(error => {
                console.error('Error finding books', error);

                // TODO: let the user know
              })
              .finally(() => {
                // remove the loading screen
                this.searching = false;

                // change the search results page
                // this.display('store');
              })

        }
      },
      library: computed(() => {
        console.log("!")
        return new LibraryCollection(this.searchResults.value)
      })
    }
  },
}
</script>

<style scoped>

</style>
