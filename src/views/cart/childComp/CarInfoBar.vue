<template>
  <div class="infoBar">
    <div class="btn">
      <div class="selectBtn" :class="{active: isSelectAll}" @click="btnClick">
        <img src="~assets/img/cart/tick.svg" />
      </div>
      <span>全选</span>
    </div>
    <div class="price">总价格:{{totalPrice}}</div>
    <div class="close">去结算({{totalCount}})</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    isSelectAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(["carLength", "carList"]),
    totalPrice() {
      return this.carList.filter((item) => {
        return item.isChecked
      }).reduce((pre, item) => {
        return pre + item.price * item.count
      },0).toFixed(2)
    },
    totalCount() {
      return this.carList.filter((item) => {
        return item.isChecked
      }).reduce((pre, item) => {
        return pre + item.count
      },0)
    }
  },
  methods: {
    btnClick() {
      if(this.isSelectAll) {
        this.carList.forEach((item) => {
          return item.isChecked = false
        })
      }else {
        this.carList.forEach((item) => {
          return item.isChecked = true
        })
      }
    }
  }
};
</script>

<style scoped>
.infoBar {
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #ccc;
  position: fixed;
  left: 0;
  bottom: 49px;
}
.btn,
.price,
.close {
  flex: 1;
  line-height: 40px;
  color: black;
}
.btn {
  display: flex;
}
.btn .active {
  background-color: red;
}
.btn .selectBtn {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
}
.btn .selectBtn img {
  display: block;
}
.close {
  background-color: #ff8198;
  text-align: center;
}
</style>