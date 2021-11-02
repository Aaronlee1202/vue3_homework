<template>
  <footer class="footer_bg text-xs py-10">
    <div class="grid grid-cols-12 overflow-hidden">
      <div class="col-start-2">
        <img src="../assets/logo/footer_logo.png" alt="" />
      </div>
      <div class="col-span-4 content">
        <h3 class="h3-title mb-5 text-sm font-bold">Navigation</h3>
        <div class="flex space-x-10">
          <ul class="space-y-3 list-none">
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Carrers
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Advertising
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Small Business
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_bg {
  height: 150px;
  font-family: Roboto, sans-serif;
  --tw-bg-opacity: 1;
  background-color: rgba(245, 248, 251, var(--tw-bg-opacity));
  border-top: 1px rgb(230, 230, 230) solid;
}
.overflow-hidden {
  overflow: hidden;
}
.flex {
  display: flex;
}

.list-none {
  list-style-type: none;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.grid {
  display: grid;
}

.col-start-2 {
  grid-column-start: 2;
}
.col-span-4 {
  grid-column: span 4 / span 4;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-bold {
  font-weight: 700;
}
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgba(31, 41, 55, var(--tw-text-opacity));
}
.no-underline {
  text-decoration: none;
}

.content {
  text-align: left;
}
.h3-title {
  margin-top: 0;
}
</style>
