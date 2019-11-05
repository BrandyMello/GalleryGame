<template>
  <div class="gallery-piece">
    <p>{{ piece.title }}</p>
    <p>{{ piece.image }}</p>
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
    /* background-image: {piece.image}; */
  }
</style>