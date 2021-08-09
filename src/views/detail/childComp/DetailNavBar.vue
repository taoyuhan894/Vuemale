<template>
  <div class="dNavBar">
    <NavBar bkColor="#fff">
      <img
        src="~assets/img/common/back.svg"
        slot="left"
        class="imgItem"
        @click="goBack"
      />
      <div
        class="centerItem"
        v-for="(item, index) in title"
        :key="index"
        slot="center"
        :class="{ textColor: currentIndex == index }"
        @click="itemClick(index)"
      >
        {{ item }}
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default: ["商品", "参数", "评论", "推荐"],
    },
  },
  components: {
    NavBar,
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick",index)
    },
    goBack() {
      this.$router.back()
    }
  },
};
</script>

<style scoped>
.dNavBar {
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
  height: 44px;
}
.dNavBar .imgItem {
  margin-top: 10px;
  display: block;
  width: 25px;
  height: 25px;
  margin-left: 10px;
}
.dNavBar .textColor {
  color: #fb7299;
}
</style>