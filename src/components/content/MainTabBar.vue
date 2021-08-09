<template>
  <TabBar>
    <TabBarItem path="/home">
      <img src="~assets/img/tabbar/Homepage.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/Homepage_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/category_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img src="~assets/img/tabbar/Cart.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/Cart_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profiy">
      <img src="~assets/img/tabbar/MySettings.svg" alt="" slot="item-icon" />
      <img
        src="~assets/img/tabbar/MySettings_active.svg"
        alt=""
        slot="item-icon-active"
      />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>

</style>