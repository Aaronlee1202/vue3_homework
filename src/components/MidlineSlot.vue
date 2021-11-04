<template>
  <div class="my-8">
    <div class="flex items-center">
      <div class="w-full-line"></div>
      <slot></slot>
      <div class="w-full-line"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.w-full-line {
  width: 100%;
  height: 2px;
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
</style>
