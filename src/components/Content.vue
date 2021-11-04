<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-9">
        <div class="profile_box"></div>
        <div class="flex p-8 bg-white">
          <div class="translate">
            <img src="../assets/logo/user_big.png" alt="" />
          </div>
          <div class="w-full ml-5">
            <div class="flex justify-between mb-3">
              <h3>
                Dmitry Kargaev
                <span class="ml-2">
                  <img
                    class="logo_gold"
                    src="../assets/logo/Logo_gold.png"
                    alt=""
                  />
                </span>
              </h3>
              <p class="text-sm">
                <span class="mr-3">
                  <img
                    class="navigation_logo"
                    src="../assets/logo/navigation.png"
                /></span>
                Saint PetersBurg, Russian Federation
              </p>
            </div>
            <p class="mb-3 text-left">
              Freelance UX/UI designer,80+ projects in web design,mobile apps
              (iOS & android)
              <br />
              and creative projects. Open to offers.
            </p>
            <div class="flex">
              <button type="button" class="contact-info-button text-xs">
                CONTACT INFO
              </button>
              <button type="button" class="connections-button text-xs">
                1,043 CONNECTIONS
              </button>
            </div>
          </div>
        </div>
        <div class="flex p-8 bg-white about">
          <div class="p-5">
            <h3>About</h3>
            <p class="about-content">
              I'm more experienced in eCommerce web projects and mobile banking
              apps, but also like to work with creative
              <br />
              projects, such as landing pages or unusual corporate websites.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div class="dashboard_card">
          <div class="p-5">
            <div class="flex justify-between pb-3 mb-3 border-b">
              <h3 class="text-sm">YOUR DASHBOARD</h3>
              <a href="#" class="text-sm a-lineheight"> GO TO STARTS </a>
            </div>
            <div class="mb-5">
              <h4 class="num">367</h4>
              <p>views today</p>
            </div>
            <div class="mb-5">
              <h4 class="num">15</h4>
              <p>posts views</p>
            </div>
            <div class="mb-5">
              <h4 class="num">9</h4>
              <p>search apperances</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style scoped>
.container {
  width: 1539px;
  /* height: 1000px; */
}
.about {
  text-align: left;
  margin-top: 30px;
  margin-bottom: 30px;
}
.about-content {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.navigation_logo {
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.num {
  margin: 0;
  color: #0275b1;
  font-size: 3rem;
}
.my-10 {
  margin-top: 3rem;
}
.grid {
  display: grid;
}
.gap-12 {
  gap: 3rem;
}
.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.profile_box {
  background-image: url("../assets/logo/content_img.png");
  background-size: cover;
  width: 1140px;
  height: 192px;
}
.col-span-9 {
  grid-column: span 9 / span 9;
}
.col-span-3 {
  grid-column: span 3 / span 3;
}
.p-5 {
  padding: 1.25rem;
}
.p-8 {
  padding: 2rem;
}
.pb-3 {
  padding-bottom: 0.75rem;
}
.border-b {
  border-bottom: 1px rgb(230, 230, 230) solid;
}
.justify-between {
  justify-content: space-between;
}
.flex {
  display: flex;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-5 {
  text-align: left;
  margin-bottom: 1.25rem;
}
.mb-5 p {
  margin: 0;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-5 {
  margin-left: 1.25rem;
}
.mr-3 {
  margin-right: 0.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.a-lineheight {
  line-height: 48px;
}
.dashboard_card {
  height: 361px;
  background-color: white;
  padding: 1.25rem;
  border-radius: 0.375rem;
  margin-bottom: 1.25rem;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.translate {
  position: relative;
  top: -80px;
}
.w-full {
  width: 100%;
}
.logo_gold {
  max-width: 100%;
  height: auto;
  vertical-align: baseline;
  display: inline-block;
}
.text-left {
  text-align: left;
}
.contact-info-button {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgba(9, 109, 161, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(9, 109, 161, var(--tw-border-opacity));
  border-width: 0px;
  border-radius: 0.375rem;
  margin-right: 0.75rem;
  cursor: pointer;
}
.connections-button {
  --tw-text-opacity: 1;
  color: rgba(9, 109, 161, var(--tw-text-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  --tw-border-opacity: 1;
  border-color: rgba(9, 109, 161, var(--tw-border-opacity));
  border-width: 1px;
  border-radius: 0.375rem;
  margin-right: 0.75rem;
  cursor: pointer;
}
</style>
