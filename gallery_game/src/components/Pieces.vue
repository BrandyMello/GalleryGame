<template>
  <div>
    <article :key="piece.id" v-for="piece in pieces">
      <p>{{ piece.title }}</p>
    </article>
  </div>
  
</template>

<script>
export default {
  name: "Pieces",
  props: ["pieces"]
}
</script>

<style scoped>

</style>