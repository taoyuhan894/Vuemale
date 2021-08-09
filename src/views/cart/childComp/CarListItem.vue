<template>
  <div class="carListItem" @click="itemClick">
    <div class="btn">
      <div class="btnItem" :class="{active: this.item.isChecked}">
        <img src="~assets/img/cart/tick.svg">
      </div>
    </div>
    <div class="imageItem">
      <img :src="item.image" />
    </div>
    <div class="mainInfo">
      <div class="title">{{ item.title }}</div>
      <div class="price">
        <span>￥{{ item.price }}</span>
        <span>X{{ item.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["carLength", "carList"]),
  },
  methods: {
    itemClick() {
      this.item.isChecked = !this.item.isChecked
    }
  },
};
</script>

<style scoped>
.carListItem {
  width: 100%;
  display: flex;
  height: 100px;
}
.carListItem .btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carListItem .btn .btnItem {
  background-color: #ccc;
  border-radius: 50%;
}
.carListItem .btn .active {
  background-color: red;
}
.carListItem .imageItem {
  flex: 3;
  padding: 5px;
}
.carListItem .imageItem img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.carListItem .mainInfo {
  flex: 6.5;
}
.carListItem .mainInfo .title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.carListItem .mainInfo .price {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.carListItem .mainInfo .price span:first-child {
  color: #ff8198;
  font-size: 20px;
}
</style>