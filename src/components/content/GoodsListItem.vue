<template>
  <div class="good-list-item" @click="itemMessage">
    <img :src="showImage" @load="imageLoad" />
    <div class="goods-text">{{ goodsItem.title }}</div>
    <div class="price-sale">
      <span>￥{{ goodsItem.price }}</span>
      <span>{{ showSale }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    },
    showSale() {
      return this.goodsItem.itemSale || this.goodsItem.sale;
    },
  },
  methods: {
    imageLoad() {
      // if (this.$route.path.indexOf("/home")) {
      //   console.log(this.$route.path);
      //   this.$bus.$emit("itemImageLoad");
      // } else if (this.$route.path.indexOf("/detail")) {
      //   console.log(this.$route.path)
      //   this.$bus.$emit("detailImageLoad");
      // }
      this.$bus.$emit("itemImageLoad");
    },
    itemMessage() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style>
.good-list-item {
  width: 50%;
  padding-left: 5px;
  padding-right: 5px;
}
.good-list-item img {
  width: 100%;
  display: block;
  border-radius: 10px;
}
.good-list-item .goods-text {
  width: 100%;
  height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
}
.good-list-item .price-sale {
  display: flex;
  justify-content: center;
}
.good-list-item .price-sale span {
  flex: 1;
  text-align: center;
  font-size: 13px;
}
</style>