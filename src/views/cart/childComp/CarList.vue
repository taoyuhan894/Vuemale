<template>
  <div class="carList">
    <CarListItem v-for="(item, id) in carList" :key="id" :item="item" />
  </div>
</template>

<script>
import CarListItem from "./CarListItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CarListItem,
  },
  computed: {
    ...mapGetters(["carLength", "carList"]),
  },
};
</script>

<style>
</style>