<template>
  <div class="output">
    <div class="showResult">
      {{showResult}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["showResult"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.output {
  border: none;
  resize: none;
  width: 732px;
  height: 232px;
  background-color: #f2f2f2;
  border-radius: 8px;
  margin-top: 60px;
  // position: relative;
}
.showResult{
  margin-left: 20px;
  // margin-top: 200px;
  position: absolute;
  margin-top: 10px;
  color: red;
}
</style>