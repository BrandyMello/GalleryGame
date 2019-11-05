<template>
  <div id="app">
    {{pieces[0].title}}
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
   
  },
  data() {
    return {
      pieces: [
        {
          id: 1,
          title: "Title1",
          image: "url to image",
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
