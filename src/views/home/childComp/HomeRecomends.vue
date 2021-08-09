<template>
  <div class="recommends">
    <div class="items" v-for="(item,id) in childRecommends" :key="id">
      <div>
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </div>
      <div class="textA">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    childRecommends: {
      type: Array
    }
  }
}
</script>

<style>
  .recommends {
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }
  .recommends .items img {
    width: 75px;
  }
  .recommends .textA {
    width: 75px;
    text-align: center;
  }
</style>