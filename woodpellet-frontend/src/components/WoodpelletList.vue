<template>
    <div class="container">
      <h2 class="mt-4">Woodpellet List</h2>
      <button class="btn btn-primary mb-3" @click="fetchWoodpellets">Refresh</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quality</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="woodpellet in woodpellets" :key="woodpellet.id">
            <td>{{ woodpellet.id }}</td>
            <td>{{ woodpellet.brand }}</td>
            <td>{{ woodpellet.price }}</td>
            <td>{{ getQualityLabel(woodpellet.quality) }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="deleteWoodpellet(woodpellet.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import WoodpelletService from '@/services/WoodpelletService';
  
  export default {
    data() {
      return {
        woodpellets: [],
        qualityLabels: {
          0: 'Undefined (0)',
          1: 'Low (1)',
          2: 'Medium (2)',
          3: 'High (3)',
          4: 'Premium (4)',
          5: 'Basically Napalm (5)'
        }
      };
    },
    mounted() {
      this.fetchWoodpellets();
    },
    methods: {
      fetchWoodpellets() {
        WoodpelletService.getAll()
          .then(response => {
            this.woodpellets = response.data;
          })
          .catch(error => {
            console.error("Error fetching woodpellets:", error);
          });
      },
      deleteWoodpellet(id) {
        WoodpelletService.delete(id)
          .then(() => {
            this.fetchWoodpellets();
          })
          .catch(error => {
            console.error("Error deleting woodpellet:", error);
          });
      },
      getQualityLabel(quality) {
        return this.qualityLabels[quality] || 'Unknown Quality';
      }
    }
  };
  </script>
  