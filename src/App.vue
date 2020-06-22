<template>
  <div class="main">
    
    <div id="content">
      <div id="cont">
        <div>
          <b style="color:red;font-size:28px;float:left;">在线</b>
          <span style="font-size:28px;color:dimgray;float:left;">翻译</span>
          <h6 style="color:dimgray;float:left;margin-top:25px;margin-left:20px;">免费、即时的多种在线翻译</h6>
        </div>
      </div>
      <hr />
      <div id="translations">
        <Translation @allData="getAllData"></Translation>
      </div>

      <div id="result">
        <Output :showResult="showResult"></Output>
      </div>
    </div>
    <div id="cont">
    <h6 style="text-align:center;margin-top:60px;"> &copy;  2020  BG-WEIMAOLIN  粤</h6>
    </div>  
    <router-view></router-view>  
  </div>
</template>
<script>
import Translation from "../src/components/Translation";
import Output from "../src/components/Output";
export default {
  components: {
    Translation,
    Output
  },
  data() {
    return {
      showResult: ""
    };
  },
  methods: {
    getAllData(text, language) {
      this.axios
        .post(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200319T163044Z.f75b9dc913953143.dd8f1fc377c339be47efba2edd274a2b23cf20ed&lang=" +
            language +
            "&text=" +
            text
        )
        .then(response => {
          this.showResult = response.data.text[0];
          console.log(response.data.text[0]);
        });
    }
  }
};
</script>
<style lang="less">
body {
  width: 100% auto;
  margin: 0;
}
#content {
  width: 100% auto;
  height: 800px;
}
#cont {
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 200px;
  // border: solid 1px;
  height: 50px;
  line-height: 50px;
  width: 1532px;
}
#translations {
  margin-left: 200px;
  border: 1px solid white;
  height: 295px;
  width: 735px;
  float: left;
}

#result {
  margin-left: 1000px;
  border: 1px solid white;
  height: 295px;
  width: 732px;
}


</style>
