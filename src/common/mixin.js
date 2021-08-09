export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    //监听图片加载完成
    //存在一个bug，refresh函数找不到
    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  }
}
// mixins: [itemListenerMixin]