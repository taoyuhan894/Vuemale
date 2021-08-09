<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, id) in goods" :key="id" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
.goods-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>