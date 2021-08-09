<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActiveColor() {
      return this.isActive ? {} : {color: this.activeColor}
    },
    isActive() {
      return this.$route.path.indexOf(this.path)
    }
  }
}
</script>

<style>
  .tab-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .tab-item .active {
    color: red;
  }
</style>