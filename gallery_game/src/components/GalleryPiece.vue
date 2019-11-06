<template>
<div class="cards">
  <div class="gallery-piece">
      <p class="title">{{ piece.title }}</p>
      <img :src="piece.image" v-show="flipCard"/>
      <p class="subtitle">{{ piece.date }}</p>
      <p class="subtitle">{{ piece.artist }}</p> 
  </div>
  <!-- <div  v-on:click="flipCard" class="blank-card">
  </div> -->
</div>
</template>
<script>
export default {
  name: "GalleryPiece",
  props: ["piece"],
  data() {
    return
  },
  methods : {
    flipCard() {
      this.cardFlipped = !this.cardFlipped
    }
  }
}
</script>
<style scoped>
  .gallery-piece {
    background-color: #37361C;
    color: #f8f0dd;
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

  .blank-card {
    position: relative;
    bottom: 370px;
    background-color: black;
    border: 2px solid black;
    width: 230px;
    height: 370px;
  }

  .cards {
    height: 370px;
  }
</style>