<template>
<div class="w-full md:w-auto mx-auto  p-3 bg-white rounded shadow-md">
    <h1 class="text-2xl text-center font-bold mb-4">Form Task</h1>
    <!-- Main Category Dropdown -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-600">Main Category</label>
      <Dropdown
        :options="mainCategories"
        v-model="selectedMainCategory"
        optionLabel="name"
        filter
        placeholder="Select Main Category"
        @change="onMainCategoryChange"
        class="w-full"
      />
    </div>

    <!-- Sub Category Dropdown -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-600">Sub Category</label>
      <Dropdown
        :options="subCategories"
        v-model="selectedSubCategory"
        optionLabel="name"
        filter
        placeholder="Select Sub Category"
        @change="onSubCategoryChange"
        class="w-full"
      />
    </div>

  <!-- Properties Dropdowns -->
  <div v-for="property in properties" :key="property.id" class="mb-4">
    <label class="block text-sm font-medium text-gray-600">{{ property.name }}</label>
    <Dropdown
      :options="property.options"
      v-model="property.value"
      optionLabel="name"
      filter
      placeholder="Select Option"
      class="w-full"
    />
    <span v-if="property.value">    
      <InputText
        v-if="property.value.id === 'other'"
        v-model="property.other_Value"
        placeholder="Enter Other Value"
        class="mt-2 w-full"
      />
    </span>  
  </div>

    <!-- Submit Button -->
    <button class="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full" @click="onSubmit">
      Submit
    </button>

    <!-- Display Selected Values Table -->
    <div v-if="selectedValues.length > 0" class="mt-6 w-full overflow-auto">
    <table class="w-full border-collapse">
      <thead>
        <tr class="bg-gradient-to-r from-black-500 to-white-500">
          <th class="py-2 px-4">Key</th>
          <th class="py-2 px-4">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in selectedValues" :key="item.key">
          <td class="py-2 px-4 border">{{ item.key }}</td>
          <td class="py-2 px-4 border">
            <!-- Display input value for 'Other' option -->
            <span v-if="item.key !== 'Other'">{{ item.value }}</span>
            <span v-else>
              <span v-if="item.customValue !== undefined">{{ item.customValue }}</span>
              <span v-else>Other</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

export default {
  components: {
    Dropdown,
    InputText
  },
  data() {
    return {
      selectedValues: [],
      mainCategories: [],
      selectedMainCategory: null,
      subCategories: [],
      selectedSubCategory: null,
      properties: []
    };
  },
  methods: {
    // async fetchMainCategories() {
    //   try {
    //     const response = await this.$axios.$get(
    //       'https://staging.mazaady.com/api/v1/get_all_cats'
    //     );
    //     this.mainCategories = [...response.data.categories];
    //   } catch (error) {
    //     console.error('Error fetching main categories:', error);
    //   }
    // },
    onMainCategoryChange() {
      if (this.selectedMainCategory) {
        this.subCategories = [...this.selectedMainCategory.children] || [];
      }
    },
    async onSubCategoryChange() {
      // Fetch properties based on selected sub-category
      if (this.selectedSubCategory) {
        const response = await this.$axios.$get(
          `https://staging.mazaady.com/api/v1/properties?cat=${
            this.selectedSubCategory.id
          }`
        );
        this.properties = response.data || [];
        this.properties.forEach(property => {
          const other = { id: 'other', name: 'Other' };
          property.options.push(other);
        });
      }
    },
    onSubmit() {
      // Collect and display selected values
      this.selectedValues = [];
      // Add selected main category
      if (this.selectedMainCategory) {
        this.selectedValues.push({
          key: 'Main Category',
          value: this.selectedMainCategory.name
        });
      }
      // Add selected sub category
      if (this.selectedSubCategory) {
        this.selectedValues.push({
          key: 'Sub Category',
          value: this.selectedSubCategory.name
        });
      }
      // Add selected properties
      for (const property of this.properties) {
        let value = '';
        if (property.value === null || property.value === '') {
          value = '--';
        } else if (property.value.id === 'other') {
          value = property.other_Value || '--';
        } else {
          value = property.value.name;
        }
        this.selectedValues.push({
          key: property.name,
          value: value
        });
      }
    }
  },
  async fetch() {
    try {
      const response = await this.$axios.$get(
        'https://staging.mazaady.com/api/v1/get_all_cats'
      );
      this.mainCategories = [...response.data.categories];
    } catch (error) {
      console.error('Error fetching main categories:', error);
    }
  }
  // mounted() {
  //   // Fetch main categories when component is created
  //   this.fetchMainCategories();
  // }
};
</script>

<style scoped>
</style>
