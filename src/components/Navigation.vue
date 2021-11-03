<template>
  <nav class="Header">
    <ul class="inline-block-nav">
      <li class="logo_li">
        <a href="/chat" class="logo">
          <img src="../assets/logo/linkedin.png" alt="" />
        </a>
      </li>
      <div class="line"></div>
      <div href="#" class="icon_box">
        <img class="icon" src="../assets/logo/feed.png" />
        <a class="box_text">FEED</a>
      </div>
      <div href="#" class="icon_box">
        <img class="icon" src="../assets/logo/network.png" />
        <a class="box_text">NETWORK</a>
      </div>
      <div href="#" class="icon_box">
        <img class="icon" src="../assets/logo/jobs.png" />
        <a class="box_text">JOBS</a>
      </div>
      <div href="/chat" class="icon_box">
        <img class="icon" src="../assets/logo/chat.png" />
        <a class="box_text">CHAT</a>
      </div>
      <div href="/" class="icon_box">
        <img class="icon" src="../assets/logo/notices.png" />
        <a class="box_text">NOTICES</a>
      </div>
      <div class="line"></div>
      <img class="search_img" src="../assets/logo/search.png" alt="" />
      <div class="search_box">
        <input class="search_text" type="text" placeholder="Search" />
      </div>
      <div class="line"></div>
      <img class="user_img" src="../assets/logo/user.png" />
      <div class="user_box">
        <span style="font-weight: bold">Aaron</span>
        <br />
        <span style="color: rgb(115, 115, 115); font-size: 14px"
          >367 views today</span
        >
      </div>
      <div class="line"></div>
      <div href="#" class="icon_box">
        <img src="../assets/logo/hamburger.png" alt="" />
        <a class="box_text">NOTICES</a>
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
.user_box {
  width: 300px;
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
  width: 450px;
}
.search_img {
  width: 25px;
  height: 25px;
  margin-top: 22px;
  margin-right: 10px;
  margin-left: 25px;
}
.search_text {
  font-family: "Microsoft soft";
  font-size: 20px;
  width: 100%;
  height: 90%;
  outline: none;
  border: none;
}
.icon_box {
  width: 110px;
  height: 75px;
}
.box_text {
  font-family: "Microsoft soft";
  position: relative;
  bottom: 50px;
  height: 0;
  font-size: 12px;
  text-align: center;
}
.icon {
  width: 25px;
}
.line {
  background-color: #f4f4f4;
  width: 1px;
  height: 75px;
  /* margin-right: 15px; */
  /* margin-left: 15px; */
}
.logo {
  margin-top: 15px;
  margin-left: 30px;
  margin-right: 30px;
  height: 60px;
  width: 100px;
}
.logo img {
  width: 45px;
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
nav .icon_box:hover {
  cursor: pointer;
  background-color: #0275B1;
  color: white;
}
nav a {
  color: inherit; /* 移除超連結顏色 */
  display: block; /* 讓 <a> 填滿 <li> */
  font-size: 1.2rem;
  padding: 0 10px 0 10px;
  text-decoration: none; /* 移除超連結底線 */
  /* margin-top: 10px; */
}
.inline-block-nav {
  height: 75px;
  display: flex;
  /* justify-content: space-around; */
  /* text-align: center; */
  /* 讓行高等於div寬就能垂直置中 */
  line-height: 70px;
}
.Header{
  background-color: #ffffff;
}
</style>
