<template>
  <div class="gallery-piece">
    <p class="title">{{ piece.title }}</p>
    <img :src="piece.image" />
    <p class="subtitle">{{ piece.date }}</p>
    <p class="subtitle">{{ piece.artist }}</p>
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
    width: 230px;
    height: 370px;
  }

  img {
    width: 200px;
    height: auto;
    padding-bottom: 0;
  }

  .title {
    font-size: .6em;
    font-weight: bold;
    padding: 0;
    text-align: center;
  }

  .subtitle {
    font-style: italic;
    padding: 0;
    margin-left: 6%;
  }
</style>