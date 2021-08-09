<template>
  <div class="bottomBar">
    <div class="text">请选择加入购物车</div>
    <div class="shopcar" @click="addToCar">加入购物车</div>
    <div class="shop">购买</div>
  </div>
</template>

<script>
export default {
  methods: {
    addToCar() {
      this.$emit('addToCar')
    }
  }
}
</script>

<style>
.bottomBar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  background-color: white;
}
.bottomBar div {
  text-align: center;
  line-height: 50px;
}
.text {
  flex: 2;
}
.shopcar {
  flex: 1;
  background-color: yellow;
}
.shop {
  flex: 1;
  background-color: #ff8198;
  color: white;
}
</style>