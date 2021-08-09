<template>
  <div class="baseInfo">
    <div class="title">
      <p>{{mainInfo.title}}</p>
    </div>
    <div class="price">
      <span>￥{{mainInfo.realPrice}}</span>
      <span>{{mainInfo.oldPrice}}</span>
    </div>
    <div class="info">
      <div v-for="(item,id) in mainInfo.columns" :key="id">{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainInfo: {
      type: Object
    }
  },
}
</script>

<style scoped>
.baseInfo {
  box-shadow: 0px 1px 5px #ccc;
}
.title {
  font-weight: bold;
  font-size: 18px;
}
.price {
  padding: 5px 0;
}
.price span:nth-child(1) {
  font-size: 30px;
  color: #ff8198;
}
.price span:nth-child(2) {
  text-decoration: line-through;
}
.info {
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
}

</style>