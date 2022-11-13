<template>
  <div class="card h-100">
    <component :is="itemCardComponent" :item="item"></component>
    <div class="card-footer d-flex justify-content-end">
      <button class="btn btn-outline-danger" v-if="removeMethod" @click="removeMethod(item)">Remove</button>
      <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<script>
import AudiobookCardBody from "@/components/AudiobookCardBody";
import SongCardBody from "@/components/SongCardBody";
import MusicVideoCardBody from "@/components/MusicVideoCardBody";
import PodcastCardBody from "@/components/PodcastCardBody";
import TvEpisodeCardBody from "@/components/TvEpisodeCardBody";
import FeatureMovieCardBody from "@/components/FeatureMovieCardBody";

export default {
  name: "LibraryItemCard",
  components: {FeatureMovieCardBody, AudiobookCardBody, SongCardBody, MusicVideoCardBody, PodcastCardBody, TvEpisodeCardBody  },
  props: {
    item: {
      //type: LibraryItem, // can't do this anymore because we don't have a LibraryItem prototype
      type: Object,
    },

    removeMethod: { type: Function },
  },

  computed: {
    itemCardComponent(){
      return this.item.objectName + "CardBody";
    }
  },
}
</script>

<style scoped>

</style>
