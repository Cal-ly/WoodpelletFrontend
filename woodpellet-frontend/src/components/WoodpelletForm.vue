<template>
    <div class="container">
      <h2 class="mt-4">{{ isEdit ? "Edit Woodpellet" : "Add New Woodpellet" }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="brand" class="form-label">Brand</label>
          <input type="text" class="form-control" v-model="woodpellet.brand" required />
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">Price</label>
          <input type="number" class="form-control" v-model="woodpellet.price" min="0" step="0.01" required />
        </div>
        <div class="mb-3">
          <label for="quality" class="form-label">Quality</label>
          <select class="form-select" v-model="woodpellet.quality" required>
            <option disabled value="">Select Quality</option>
            <option value="0">Undefined</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            <option value="4">Premium</option>
            <option value="5">Basically Napalm</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">{{ isEdit ? "Update" : "Add" }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import WoodpelletService from '@/services/WoodpelletService';
  
  export default {
    props: {
      editWoodpellet: Object
    },
    data() {
      return {
        woodpellet: {
          id: null,
          brand: '',
          price: 0,
          quality: 0
        },
        isEdit: false
      };
    },
    mounted() {
      if (this.editWoodpellet) {
        this.woodpellet = { ...this.editWoodpellet };
        this.isEdit = true;
      }
    },
    methods: {
      handleSubmit() {
        if (this.isEdit) {
          WoodpelletService.update(this.woodpellet.id, this.woodpellet)
            .then(() => {
              this.$emit("refreshList");
            })
            .catch(error => {
              console.error("Error updating woodpellet:", error);
            });
        } else {
          WoodpelletService.add(this.woodpellet)
            .then(() => {
              this.$emit("refreshList");
            })
            .catch(error => {
              console.error("Error adding woodpellet:", error);
            });
        }
      }
    }
  };
  </script>
  