<template>
    <div class="navbar" :style="styleMain">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    props: {
      bkColor: {
        type: String,
        default: "#00b5e5"
      },
      fontSize: {
        type: String,
        default: "16px"
      }
    },
    computed: {
      styleMain() {
        return "backgroundColor:" + this.bkColor + ";" + "fontSize:" + this.fontSize
      }
    }
  }
</script>

<style>
  .navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    position: relative;
    z-index: 10;
    width: 100%;
    top: 0;
    left: 0;
  }
  .navbar .left, .navbar .right{
    width: 60px;
  }
  .navbar .center {
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: space-evenly;
  }
</style>
