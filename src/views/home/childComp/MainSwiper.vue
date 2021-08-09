<template>
  <div class="mainSwiper">
    <swiper>
      <swiper-item v-for="(item, id) in childBanners" :key="id">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper";
export default {
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    childBanners: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
};
</script>

<style>
</style>