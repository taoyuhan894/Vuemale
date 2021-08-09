<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "添加成功",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(204, 204, 204, 0.76);
  color: white;
  width: 150px;
  height: 30px;
  border-radius: 30px;
  line-height: 30px;
  text-align: center;
}
</style>