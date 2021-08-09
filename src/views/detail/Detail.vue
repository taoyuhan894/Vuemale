<template>
  <div class="detail">
    <DeNavBar :title="title" @itemClick="itemClick" ref="detailNavBar" />

    <Scroll
      :probeType="3"
      class="wrapper-content"
      ref="scroll2"
      :pullUpLoad="true"
      @scrollPositon="scrollPositon"
    >
      <DetailSwiper :TopImage="swiperImage" />
      <DetailBase ref="detailBase" :mainInfo="detailInfo" />
      <DetailGoodsItem
        :goodsImages="detailInfo.detailInfoImage"
        @goodsImageLoad="goodsImageLoad"
        ref="detailGoodsItem"
      />
      <GoodsList ref="detailGoodsList" :goods="recommendGoods" />
    </Scroll>
    <BackTop @click.native="backClick(0, 0, 2000)" v-show="backisShow" />
    <DetailBottomBar @addToCar="addToCar" />
    <Toast :isShow="toastShow" :message="toastMessage" />
  </div>
</template>

<script>
import DeNavBar from "views/detail/childComp/DetailNavBar.vue";
import { getDetailGoods, Goods, getRecommendGoods } from "network/detail";
import DetailSwiper from "./childComp/DetailSwiper.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailBase from "./childComp/DetailBase.vue";
import { debounce } from "components/common/utils/debounce";
import DetailGoodsItem from "./childComp/DetailGoodsItem.vue";
import GoodsList from "components/content/GoodsList.vue";
import DetailBottomBar from "./childComp/DetailBottomBar.vue";
import BackTop from "components/content/BackTop.vue";
import Toast from "components/common/toast/Toast.vue"

export default {
  name: "Detail",
  components: {
    DeNavBar,
    DetailSwiper,
    Scroll,
    DetailBase,
    DetailGoodsItem,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast
  },
  data() {
    return {
      iid: null,
      title: ["商品", "参数", "评论", "推荐"],
      swiperImage: [],
      detailInfo: {},
      recommendGoods: [],
      detailImageListener: null,
      itemPosition: [0, 100, 200, 300],
      getItemoffsetTop: null,
      currentIndex: 0,
      currentPosition: 0,
      backisShow: false,
      toastShow: false,
      toastMessage: ""
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetailGoods(this.iid);
    this.getRecommendGoods();
    this.getItemoffsetTop = debounce(() => {
      this.itemPosition = [];
      this.itemPosition.push(0);
      this.itemPosition.push(this.$refs.detailBase.$el.offsetTop - 48);
      this.itemPosition.push(this.$refs.detailGoodsItem.$el.offsetTop - 48);
      this.itemPosition.push(this.$refs.detailGoodsList.$el.offsetTop - 48);
    }, 200);
  },
  mounted() {
    const newrefresh = debounce(this.$refs.scroll2.refresh, 200);
    this.detailImageListener = () => {
      newrefresh();
    };
    this.$bus.$on("itemImageLoad", this.detailImageListener);
  },
  deactivated() {
    this.$bus.$off("itemImageLoad", this.detailImageListener);
  },
  methods: {
    getDetailGoods(id) {
      getDetailGoods(id).then((res) => {
        this.swiperImage = res.result.itemInfo.topImages;
        this.detailInfo = new Goods(
          res.result.itemInfo,
          res.result.columns,
          res.result.detailInfo
        );
      });
    },
    goodsImageLoad() {
      this.$refs.scroll2.refresh();
      this.getItemoffsetTop();
    },
    scrollPositon(position) {
      let positionY = -position.y;
      let length = this.itemPosition.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.itemPosition[i] &&
            positionY < this.itemPosition[i + 1]) ||
            (i === length - 1 && positionY >= this.itemPosition[i]))
        ) {
          this.currentIndex = i;
          this.$refs.detailNavBar.currentIndex = this.currentIndex;
        }
      }
      this.backisShow = position.y < -1000;
    },
    getRecommendGoods() {
      getRecommendGoods().then((res) => {
        this.recommendGoods = res.data.list;
      });
    },
    itemClick(index) {
      this.$refs.scroll2.scrollSet(0, -this.itemPosition[index], 2000);
    },
    backClick(x, y, time) {
      this.$refs.scroll2.scrollSet(x, y, time);
    },
    addToCar() {
      const product = {};
      product.image = this.swiperImage[0];
      product.title = this.detailInfo.title;
      product.price = this.detailInfo.realPrice;
      product.iid = this.iid;

      this.$store.dispatch("addCart", product).then(res => {
        this.toastMessage = res
        this.toastShow = true
        setTimeout(() => {
          this.toastShow = false
        },1000)
      });
    },
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 100;
}
.wrapper-content {
  height: 574px;
}
</style>