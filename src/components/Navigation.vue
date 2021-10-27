<template>
  <nav class="Header">
    <ul class="inline-block-nav">
      <li class="logo_li">
        <a href="#" class="logo">
          <img src="../assets/logo/linkedin.png" alt="" />
        </a>
      </li>
      <div class="line"></div>
      <div class="icon_box">
        <img class="icon" src="../assets/logo/feed.png" />
        <a class="box_text">FEED</a>
      </div>
      <div class="icon_box">
        <img class="icon" src="../assets/logo/network.png" />
        <a class="box_text">NETWORK</a>
      </div>
      <div class="icon_box">
        <img class="icon" src="../assets/logo/jobs.png" />
        <a class="box_text">JOBS</a>
      </div>
      <div class="icon_box">
        <img class="icon" src="../assets/logo/chat.png" />
        <a class="box_text">CHAT</a>
      </div>
      <div class="icon_box">
        <img class="icon" src="../assets/logo/notices.png" />
        <a class="box_text">NOTICES</a>
      </div>
      <div class="line"></div>
      <img class="search_img" src="../assets/logo/search.png" alt="" />
      <div class="search_box">
        <input class="search_text" type="text" placeholder="Search" />
      </div>
      <div class="line"></div>
        <img class="user_img" src="https://source.unsplash.com/random" alt="" />
      <div class="user_box">
        <span style="font-weight:bold;">Aaron</span>
        <br />
        <span style="color:rgb(115, 115, 115); font-size: 14px ">367 views today</span>
      </div>
      <div class="line"></div>
      <div>
        <img class="hamburger_icon" src="../assets/logo/hamburger.png" alt="">
      </div>
      <div class="line"></div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hamburger_icon{
  margin-top: 20px;
  width: 40px;
}
.user_box {
  width: 170px;
  margin-top: 20px;
  text-align: left;
  font-family: "Microsoft soft";
  line-height: 20px;
}
.user_img {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 15px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  /* vertical-align: middle; */
}
.search_box {
  width: 200px;
}
.search_img {
  width: 20px;
  height: 20px;
  margin-top: 31px;
  margin-right: 10px;
}
.search_text {
  font-family: "Microsoft soft";
  font-size: 20px;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
}
.icon_box {
  width: 80px;
  height: 80px;
}
.box_text {
  font-family: "Microsoft soft";
  position: relative;
  bottom: 60px;
  height: 0;
  font-size: 12px;
  text-align: center;
}
.icon {
  width: 20px;
}
.line {
  background-color: #f4f4f4;
  width: 1px;
  height: 80px;
  margin-right: 15px;
  margin-left: 15px;
}
.logo {
  margin-top: 15px;
  margin-left: 20px;
  height: 60px;
  width: 80px;
}
.logo img {
  width: 40px;
}
nav a {
  color: inherit; /* 移除超連結顏色 */
  text-decoration: none; /* 移除超連結底線 */
}
nav > ul {
  list-style: none; /* 移除項目符號 */
}
nav > ul {
  /* background-color: rgb(230, 230, 230); */
  list-style: none; /* 移除項目符號 */
  margin: 0;
  padding: 0;
}
/* 滑鼠移到 <a> 時變成深底淺色 */
/* nav a:hover {
    background-color: rgb(115, 115, 115);
    color: white;
  } */
nav a {
  color: inherit; /* 移除超連結顏色 */
  display: block; /* 讓 <a> 填滿 <li> */
  font-size: 1.2rem;
  padding: 0 10px 0 10px;
  text-decoration: none; /* 移除超連結底線 */
  /* margin-top: 10px; */
}
.inline-block-nav {
  height: 80px;
  display: flex;
  justify-content: space-around;
  /* text-align: center; */
  /* 讓行高等於div寬就能垂直置中 */
  line-height: 80px;
}
</style>
