<template>
  <main id="app">
    <!-- <GalleryPiece v-bind:pieces="pieces"/> -->
    <article :key="piece.id" v-for="piece in pieces">
      <GalleryPiece :piece="piece"/>
    </article>
  </main>
</template>

<script>
// import { getArt } from '../src/apicalls/apicalls';
import GalleryPiece from './components/GalleryPiece';
// const givemesomething = getArt();
// console.log(givemesomething)

export default {
  name: 'app',
  components: {
    GalleryPiece
  },
  data() {
    return {
      pieces: [
        // {
        //   id: 1,
        //   title: "Title1",
        //   image: "url to image1",
        // },
        // {
        //   id: 2,
        //   title: "Title2",
        //   image: "url to image2",
        // },
        // {
        //   id: 3,
        //   title: "Title3",
        //   image: "url to image3",
        // }
      ],
      error: "try again"
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
