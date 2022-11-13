<template>
  <div class="card-body">
    <h3 class="card-title">{{ item.collectionName }}</h3>
    <img :src="item?.artworkUrl100" alt="">
    <img :src="item?.artistViewUrl" alt="">
    <audio type="audio/m4a" :src="item?.previewUrl" controls/>
  </div>
</template>

<script>
import { TvEpisode} from "@/models/models";

export default {
  name: "FeatureFilmCardBody",
  props: {
    item: {type: TvEpisode}
  },
}
</script>

<style scoped>

</style>
