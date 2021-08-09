<template>
  <div class="cart">
    <NavBar bkColor="#fb7299" fontSize="20px">
      <div slot="center" class="title">购物车({{ carLength }})</div>
    </NavBar>
    <Scroll
      :probeType="3"
      class="wrapper-content"
      :pullUpLoad="true"
      ref="scroll3"
    >
      <CarList />
    </Scroll>
    <CarInfoBar :isSelectAll="isSelectAll" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll.vue";
import CarList from "./childComp/CarList.vue";
import CarInfoBar from "./childComp/CarInfoBar.vue";

export default {
  components: {
    NavBar,
    Scroll,
    CarList,
    CarInfoBar,
  },
  computed: {
    ...mapGetters(["carLength","carList"]),
    isSelectAll() {
      return !this.carList.some((item) => {
        return item.isChecked == false
      })
    }
  },
  methods: {},
  activated() {
    this.$refs.scroll3.refresh();
  },
};
</script>

<style scoped>
.title {
  color: white;
}
.wrapper-content {
  height: 534px;
}
</style>