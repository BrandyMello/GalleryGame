<template>
  <div id="app">
    <Pieces :pieces="pieces"/>
    <!-- {{pieces[0].title}} -->
  </div>
</template>

<script>
import Pieces from './components/Pieces'

export default {
  name: 'app',
  components: {
    Pieces
  },
  data() {
    return {
      pieces: [
        {
          id: 1,
          title: "Title1",
          image: "url to image1",
        },
        {
          id: 2,
          title: "Title2",
          image: "url to image2",
        },
        {
          id: 1,
          title: "Title2",
          image: "url to image3",
        }
      ]
    }
  }
}


</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    line-height: 1.4;
  }
</style>
