<template>
  <div class="home">
    <nav-bar bkColor="#fb7299" fontSize="20px">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="MainTabControl tabSlide"
      :title="titles"
      @itemId="itemClick"
      ref="tabControl2"
      v-show="isTabFixed"
    />
    <scroll
      class="wrapper-content"
      ref="scroll"
      :probeType="3"
      @scrollPositon="scrollPositon"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <main-swiper :childBanners="banners" @swiperImageLoad="swiperImageLoad" />
      <home-recomends :childRecommends="recommends" />
      <recommend-bg />
      <tab-control
        class="MainTabControl"
        :title="titles"
        @itemId="itemClick"
        ref="tabControl"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick(0, 0, 2000)" v-show="backisShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import {
  getHomeMultidata,
  getHomeGoods,
  getHomeGoodsTitle,
} from "network/home.js";
import MainSwiper from "views/home/childComp/MainSwiper.vue";
import HomeRecomends from "./childComp/HomeRecomends.vue";
import RecommendBg from "./childComp/RecommendBg.vue";
import TabControl from "components/content/TabControl.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import GoodsList from "../../components/content/GoodsList.vue";
import BackTop from "../../components/content/BackTop.vue";
import { debounce } from "components/common/utils/debounce";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      titles: [],
      type: "pop",
      backisShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImageListener: null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.type].list;
    },
  },
  components: {
    NavBar,
    MainSwiper,
    HomeRecomends,
    RecommendBg,
    TabControl,
    Scroll,
    GoodsList,
    BackTop,
    
  },
  created() {
    this.getHomeGoodsTitle();
    this.getHomeMultidata();
    this.getHomeGoods("pop", 0);
    this.getHomeGoods("new", 0);
    this.getHomeGoods("sell", 0);
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImageListener = () => {
      refresh()
    }
    this.$bus.$on("itemImageLoad",this.itemImageListener);
  },
  activated() {
    this.$refs.scroll.scrollSet(0,this.saveY,0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y

    this.$bus.$off('itemImageLoad',this.itemImageListener)
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type, page) {
      page = page + 1;
      this.goods[type].page += 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        //完成加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    loadMore() {
      this.getHomeGoods(this.type, this.goods[this.type].page);
    },
    getHomeGoodsTitle() {
      getHomeGoodsTitle().then((res) => {
        this.titles = res.data.filter.list;
      });
    },
    itemClick(id) {
      switch (id) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "sell";
          break;
        case 2:
          this.type = "new";
          break;
      }
      //两个tabcontrol状态保持一致
      this.$refs.tabControl.currentIndex = id;
      this.$refs.tabControl2.currentIndex = id;
    },
    backClick(x, y, time) {
      this.$refs.scroll.scrollSet(x, y, time);
    },
    scrollPositon(position) {
      //判断是否显示yop按钮
      this.backisShow = position.y < -1000;

      //决定是否吸顶（position:fixed）
      this.isTabFixed = position.y < (-this.tabOffsetTop + 44);
    },
    swiperImageLoad() {
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
  },
};
</script>

<style scoped>
.home {
  /* padding-top: 44px; */
  width: 100%;
}
.home .navbar {
  color: #fff;
}
.wrapper-content {
  height: 574px;
}
.home .tabSlide {
  position: absolute;
  width: 100%;
  z-index: 20;
}
</style>