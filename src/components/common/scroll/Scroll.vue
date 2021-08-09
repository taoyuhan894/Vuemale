<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    //监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollPositon", position);
    });

    //监听scroll滚动到底部
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp")
    });
  },
  methods: {
    scrollSet(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    //完成加载更多函数
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    }
  },
};
</script>

<style>
</style>