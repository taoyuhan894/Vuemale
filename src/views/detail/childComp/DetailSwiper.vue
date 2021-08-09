<template>
  <div class="detail-swiper">
    <Swiper class="wrapper-content">
      <SwiperItem class="swiper-item" v-for="(item,index) in TopImage" :key="index">
          <img id="DetailSwiperImg" :src="item" />
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper";
export default {
  props: {
    TopImage: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
}
</script>

<style scoperd>
#DetailSwiperImg {
  height: 400px;
}
</style>