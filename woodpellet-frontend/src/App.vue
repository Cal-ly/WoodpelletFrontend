<template>
  <div class="container">
    <h1 class="mt-5">Woodpellet Management</h1>
    <WoodpelletForm @refreshList="refreshList" />
    <WoodpelletList ref="woodpelletList" />
  </div>
</template>

<script>
import WoodpelletList from './components/WoodpelletList.vue';
import WoodpelletForm from './components/WoodpelletForm.vue';

export default {
  components: {
    WoodpelletList,
    WoodpelletForm
  },
  methods: {
    refreshList() {
      this.$refs.woodpelletList.fetchWoodpellets();
    }
  }
};
</script>
