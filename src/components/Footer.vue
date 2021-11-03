<template>
  <footer class="footer_bg text-xs py-10">
    <div class="grid grid-cols-12 overflow-hidden">
      <div class="col-start-2">
        <img src="../assets/logo/footer_logo.png" alt="" />
      </div>
      <div class="col-span-1 content">
        <h3 class="h3-title mb-5 text-sm font-bold">Navigation</h3>
        <div class="flex">
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
      <div class="col-span-1 content mt-3">
        <div class="flex">
          <ul class="space-y-3 list-none">
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Talent Solutions
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Marketing Solutions
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Sales Solutions
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Safety Center
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-3 content mt-3">
        <div class="flex">
          <ul class="space-y-3 list-none">
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Community Guidelines
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Privacy & Terms
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-800 no-underline hover:underline">
                Mobile App
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-span-2 content">
        <h3 class="h3-title mb-5 text-sm font-bold">Fast access</h3>
        <div class="flex button_box">
          <button type="button" class="footer-questions-button">
            QUESTIONS
            <img src="../assets/logo/help-circle.png" alt="" />
          </button>
          <button type="button" class="footer-settings-button">
            SETTINGS
            <img src="../assets/logo/settings.png" alt="" />
          </button>
        </div>
      </div>
      <div class="col-span-2 content">
        <h3 class="h3-title mb-5 text-sm font-bold">Language</h3>
        <div class="flex button_box">
          <select class="">
            <option value="">ENGLISH</option>
            <option value="">JAPANESE</option>
            <option value="">FRANCE</option>
            <option value="">CHINESE</option>
          </select>
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
ul > li {
  margin-top: 10px;
}

.mb-5 {
  margin-bottom: 1rem;
}
.mt-3 {
  margin-top: 36px;
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
.col-span-1 {
  grid-column: span 1 / span 1;
}
.col-span-2 {
  grid-column: span 2 / span 2;
}
.col-span-3 {
  grid-column: span 3 / span 3;
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

.footer-questions-button {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  font-weight: 600;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  --tw-bg-opacity: 1;
  background-color: rgba(2, 117, 177, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(2, 117, 177, var(--tw-border-opacity));
  border-width: 1px;
  border-radius: 0.375rem;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  height: 35px;
  display: flex;
  cursor: pointer;
  margin-bottom: 10px;
}
.footer-settings-button {
  --tw-text-opacity: 1;
  color: rgba(2, 117, 177, var(--tw-text-opacity));
  font-weight: 600;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: transparent;
  background-image: none;
  --tw-border-opacity: 1;
  border-color: rgba(2, 117, 177, var(--tw-border-opacity));
  border-width: 1px;
  border-radius: 0.375rem;
  justify-content: space-between;
  align-items: center;
  width: 170px;
  height: 35px;
  display: flex;
  cursor: pointer;
}
.button_box {
  flex-direction: column;
}
</style>
