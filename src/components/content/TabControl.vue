<template>
  <div class="tab-control">
    <div
      class="tab-item"
      :class="{ itemActive: currentIndex == id }"
      v-for="(item, id) in title"
      :key="id"
      @click="itemClick(id)"
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(id) {
      this.currentIndex = id;
      this.$emit("itemId",id)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  background-color: #ffffff;
  align-items: center;
}
.tab-control .tab-item {
  font-size: 16px;
}
.tab-control .tab-item span {
  padding: 5px;
}
.tab-control .itemActive span {
  border-bottom: 2px solid #fb7299;
}
</style>