<template>
  <main id="app">
    <img src="./assets/texture.jpg" class="nav-img"/> 
    <nav>
      <img src="./assets/bicycle-logo.jpg" class="logo" />
      <div class="nav-text">
        <h1 class="app-title">Gallery Game</h1>
        <p class="brief">An art matching memory game</p>
      </div>
    </nav>
    <div class="card-container">
      <article :key="piece.id" v-for="piece in pieces" class="card">
        <GalleryPiece :piece="piece"/>
      </article>
    </div>
  </main>
</template>

<script>
import GalleryPiece from './components/GalleryPiece';

export default {
  name: 'app',
  components: {
    GalleryPiece
  },
  data() {
    return {
      pieces: [],
      error: "There was trouble getting the data."
    }
  },
  mounted() {
    this.getArt();
  },
  methods: {
      async getArt() {
        try {
          const response = await fetch('https://api.harvardartmuseums.org/object?gallerynumber=1220&size=21&apikey=36e7a220-fdc7-11e9-9a5d-0b0eede4b42a');

          const artWorkInfo = await response.json();
          this.arrangeData(artWorkInfo);
        } catch (error) {
          this.error = { error }
        }
    },
    arrangeData(artData) {
      this.pieces = artData.records.map(piece => {
         return {
           title: piece.title,
           image: piece.primaryimageurl,
           date: piece.dated,
           artist: piece.people[0].name,
         }
      });
    }
  }
}

</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
  }

  body {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.4;
  }

  nav {
    margin-left: 18%;
    position: relative;
    display: flex;
    bottom: 265px;
  }

  .nav-img {
    width: 100%;
    height: 300px;
    opacity: .5;
  }

  .logo {
    width: 250px;
    opacity: .7;
  }

  .app-title {
    font-size: 4em;
  }

  .brief {
    font-size: 2em; 
  }

  .card-container {
    position: relative;
    bottom: 200px;
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
  }

</style>
