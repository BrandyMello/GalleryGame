<template>
  <div class="gallery-piece">
    <p>{{ piece.title }}</p>
    <img :src="piece.image" />
  </div>
</template>
<script>
export default {
  name: "GalleryPiece",
  props: ["piece"]
}
</script>
<style scoped>
  .gallery-piece {
    border: 2px solid black;
  }

  img {
    width: 200px;
    height: auto;
  }
</style>