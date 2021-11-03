<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-12 gap-12">
      <Chatsleft />
    </div>
  </div>
</template>

<script>
import Chats_leftVue from "../components/chats_left.vue";
export default {
  components: {
    Chatsleft: Chats_leftVue,
  },
};
</script>

<style scoped>
.container {
  max-width: 1536px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.gap-12 {
  gap: 3rem;
}
.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.grid {
  display: grid;
}
</style>
