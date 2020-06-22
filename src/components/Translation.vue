<template>
  <div class="translation">
    <form @submit="submitForm">
      <select v-model="language" class="select">
        <option value="en">英语</option>
        <option value="zh">中文</option>
        <option value="ru">俄语</option>
        <option value="ko">韩语</option>
        <option value="ja">日语</option>
      </select>
      <button class="translationBtn" type="submit">翻译</button>
      <br />
      <textarea
        type="text"
        @focus="move"
        @blur="leave"
        v-model="enterContent"
        :placeholder="placeholder"
      ></textarea>
    </form>
  </div>
</template>

<script>
export default {
  name: "Translation",
  data() {
    return {
      placeholder: "请输入你要翻译的文字或网址",
      enterContent: "",
      language: ""
    };
  },
  methods: {
    move() {
      this.placeholder = "";
    },
    leave() {
      this.placeholder = "请输入你要翻译的文字或网址";
    },
    submitForm(e) {
      e.preventDefault(); //event.preventDefault() 说明 该方法将通知 Web 浏览器不要执行与事件关联的默认动作(如果存在这样的动作)。
      if (this.enterContent == "") {
        console.log("请输入你要翻译的文字或网址");
      } else {
        this.$emit("allData", this.enterContent, this.language);
      }
    }
  },
  created() {
    this.language = "en";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.select {
  width: 270px;
  height: 40px;
  margin: 0 20px 20px 0;
}
.translationBtn {
  width: 130px;
  height: 40px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 3px;
}
textarea {
  border: none;
  resize: none;
  width: 732px;
  height: 230px;
  background-color: #f2f2f2;
  border-radius: 8px;
  font-size: 18px;
  line-height: 30px;
  color: dimgray;
}

textarea::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: dimgray !important;
  font-size: 14px;
}
</style>
