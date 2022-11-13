<template>
  <div class="card-body">
    <h3 class="card-title">{{ item?.collectionName }}</h3>
    <video  type="video/m4v" width="250" height="200" :src="item?.previewUrl" controls/>
  </div>
</template>

<script>
import {FeatureMovie} from "@/models/models";

export default {
  name: "FeatureMovieCardBody",
  props: {
    item: {type: FeatureMovie}
  },
}
</script>

<style scoped>

</style>
