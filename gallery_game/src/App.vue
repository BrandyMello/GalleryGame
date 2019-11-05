<template>
  <main id="app">
    <article :key="piece.id" v-for="piece in pieces">
      <GalleryPiece :piece="piece"/>
    </article>
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
      // const id = 0;
      this.pieces = artData.records.map(piece => {
         return {
          //  id: id += 1,
           title: piece.title,
           image: piece.primaryimageurl
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
</style>
