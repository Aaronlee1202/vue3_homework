<template>
  <div class="container mx-auto my-10">
    <div class="grid grid-cols-12 gap-12">
      <div class="col-span-3">
        <div class="mb-5 bg-white">
          <h3 class="p-5 font-bold border-b mb-0">CHATS</h3>
          <div
            class="item_box border-b"
            v-for="item in chatArray"
            :key="item.name"
          >
            <div class="userImg">
              <!-- <img src="../assets/logo/chat/chats1.png" alt="" /> -->
              <img class="userImg" :src="item.img" alt="" />
            </div>
            <div class="ml-3">
              <h3 class="name">{{ item.name }}</h3>
              <p class="text">{{ item.chat }}</p>
            </div>
          </div>
        </div>
        <div class="mb-5 bg-white rounded-md">
          <div class="button-flex">
            <button type="button" class="start-button">START NEW CHAT</button>
          </div>
        </div>
      </div>
      <div class="col-span-9">
        <div class="title-box">
          <div class="title-content">
            <div class="title1">
              <p>CHAT WITH <span class="text-blue-500">KYLE FISHER</span></p>
              <p class="ml-3 text-gray-400">LAST ONLINE: 4 HOURS AGO</p>
            </div>
            <button type="button" class="share-button">SHARED MEDUA(12)</button>
          </div>
          <div class="chat-box">
            <MidlineSlot>
              <p class="shrink">YESTERDAY, 29 AUG</p>
            </MidlineSlot>
            <div class="left-chat">
              <div class="triangle"></div>
              <p class="chat-content">
                Hi, Kyle. How are you doing? Did you get that job yesterday?
              </p>
            </div>
            <div class="check">
              <img
                src="../assets/logo/check.png"
                alt=""
                class="mr-2 check-img"
              />
              <p>4:20 pm</p>
            </div>
            <div class="right-chat">
              <img
                src="../assets/logo/chat/chat_user.png"
                alt=""
                class="chat_user"
              />
              <div class="mr-3">
                <p class="chat-conent-left">
                  Nope, they kicked me out of the office!
                </p>
                <p class="check-left">4:29 pm</p>
              </div>
            </div>
            <div class="left-chat">
              <div class="triangle"></div>
              <p class="chat-content">
                Wow, I can invite you in my new project.We need a product
                designer right now!
              </p>
            </div>
            <div class="check">
              <img
                src="../assets/logo/check.png"
                alt=""
                class="mr-2 check-img"
              />
              <p>4:30 pm</p>
            </div>
            <div class="right-chat">
              <img
                src="../assets/logo/chat/chat_user.png"
                alt=""
                class="chat_user"
              />
              <div class="mr-3">
                <p class="chat-conent-left">
                  It'll be grat! I need this job, but...
                </p>
                <p class="chat-conent-left">So, it's up to you!</p>
                <p class="check-left">4:29 pm</p>
              </div>
            </div>
          </div>
        </div>
        <div class="send-box">
          <input
            type="text"
            placeholder="Write your message"
            class="send-content"
          />
          <div class="flex ml-2">
            <button type="button" class="button1">
              <img src="../assets/logo/paperclip.png" alt="" />
            </button>
            <button type="button" class="button1">
              <img src="../assets/logo/send.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MidlineSlot from "@/components/MidlineSlot.vue";
import { ref } from "vue";
export default {
  components: {
    MidlineSlot,
  },
  setup() {
    const chatArray = ref([
      {
        img: require("/src/assets/logo/chat/chats1.png"),
        name: "Darlene Black",
        chat: "Hey,how is your project?",
      },
      {
        img: require("/src/assets/logo/chat/chats2.png"),
        name: "Theresa Steward",
        chat: "Hi, Dmitry! I have a work for you.",
      },
      {
        img: require("/src/assets/logo/chat/chats3.png"),
        name: "Brandon wilson",
        chat: "I am Russian and I am learning English.",
      },
      {
        img: require("/src/assets/logo/chat/chats4.png"),
        name: "Kyle Fisher",
        chat: "So.It's up to you!",
      },
    ]);

    return { chatArray };
  },
};
</script>

<style scoped>
.button1 {
  --tw-text-opacity: 1;
  color: rgba(209, 213, 219, var(--tw-text-opacity));
  padding: 0.5rem;
  cursor: pointer;
  line-height: inherit;
  background-color: transparent;
  background-image: none;
  text-transform: none;
  border-width: 0px;
}
.flex {
  display: flex;
}
.ml-2 {
  margin-left: 0.5rem;
}
.send-content {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-width: 0px;
  width: 100%;
  margin-right: auto;
}
.send-box {
  padding: 1.25rem;
  display: flex;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-top: 1px rgb(230, 230, 230) solid;
}
.chat_user {
  object-fit: contain;
  margin-bottom: 2rem;
  max-width: 100%;
  height: auto;
  display: block;
  vertical-align: middle;
}
.check-left {
  --tw-text-opacity: 1;
  color: rgba(209, 213, 219, var(--tw-text-opacity));
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: right;
}
.chat-conent-left {
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.75rem;
  --tw-bg-opacity: 1;
  background-color: rgba(232, 240, 248, var(--tw-bg-opacity));
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}
.right-chat {
  flex-direction: row-reverse;
  width: 100%;
  display: flex;
  margin-bottom: 0.75rem;
}
.check-img {
  max-width: 100%;
  height: auto;
  display: block;
  /* vertical-align: middle; */
}
.check {
  --tw-text-opacity: 1;
  color: rgba(209, 213, 219, var(--tw-text-opacity));
  font-size: 0.75rem;
  line-height: 1rem;
  display: flex;
  /* margin-top: 0.55rem; */
}
.chat-content {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: left;
  padding: 1.25rem;
  --tw-bg-opacity: 1;
  background-color: rgba(2, 117, 177, var(--tw-bg-opacity));
  border-radius: 0.375rem;
}
.triangle {
  border-style: solid;
  border-width: 0px 20px 20px;
  border-color: transparent transparent rgb(2, 117, 177);
  --tw-translate-x: -50%;
  transform: var(--tw-transform);
  position: absolute;
  bottom: 0px;
  left: -10px;
}
.left-chat {
  position: relative;
  width: 50%;
  margin-left: 1.25rem;
  margin-bottom: 0.75rem;
}
.shrink {
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  flex-shrink: 0;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
.chat-box {
  padding: 1.25rem;
  border-bottom-width: 1px;
}
.share-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
  align-items: center;
  display: flex;
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  border: none;
}
.title-box {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-radius: 0.375rem;
  overflow: hidden;
}
.title-content {
  padding: 1.25rem;
  border-bottom: 1px rgb(230, 230, 230) solid;
  justify-content: space-between;
  display: flex;
}
.title1 {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
}
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgba(59, 130, 246, var(--tw-text-opacity));
}
.button-flex {
  display: flex;
  padding: 1.25rem;
  justify-content: center;
  align-items: center;
}
.start-button {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgba(8, 111, 165, var(--tw-bg-opacity));
  border-radius: 0.375rem;
  width: 100%;
  border: none;
  cursor: pointer;
}
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
.ml-3 {
  margin-left: 0.75rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mr-3 {
  margin-right: 0.75rem;
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

.col-span-3 {
  grid-column: span 3 / span 3;
}
.col-span-9 {
  grid-column: span 9 / span 9;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.mb-5 {
  margin-bottom: 1.25rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.mb-0 {
  margin-bottom: 0;
}

.p-5 {
  padding: 1.25rem;
}
.font-bold {
  font-weight: 700;
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
}
.border-b {
  border-bottom: 1px rgb(230, 230, 230) solid;
}
.item_box {
  padding: 1.25rem;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-bottom-width: 1px;
  align-items: center;
  cursor: pointer;
  display: flex;
  position: relative;
  text-align: left;
}
.name {
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1rem;
}
.text {
  --tw-text-opacity: 1;
  color: rgba(156, 163, 175, var(--tw-text-opacity));
  font-size: 0.75rem;
  line-height: 1rem;
}
.userImg {
  position: relative;
}
.rounded-md {
  border-radius: 0.375rem;
}
</style>
