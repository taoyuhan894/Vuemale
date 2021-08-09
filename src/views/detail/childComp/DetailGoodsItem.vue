<template>
  <div class="goodsItem">
    <img
      :src="item"
      v-for="(item, index) in goodsImages"
      :key="index"
      @load="goodsImageLoad"
    />
  </div>
</template>

<script>
export default {
  props: {
    goodsImages: {
      type: Array,
    },
  },
  data() {
    return {
      counter: 0,//判断图片加载完没有
      imagesLength: 0
    }
  },
  methods: {
    goodsImageLoad() {
      if(++this.counter == this.imagesLength) {
        this.$emit("goodsImageLoad")
      }
    }
  },
  watch: {
    goodsImages() {
      this.imagesLength = this.goodsImages.length
    }
  }
};
</script>

<style>
.goodsItem {
  width: 100%;
  margin-top: 30px;
  box-shadow: 0 -1px 5px #ccc;
}
.goodsItem img {
  display: block;
  width: 100%;
}
</style>