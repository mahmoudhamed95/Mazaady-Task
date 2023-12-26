<template>
<div>
  <!-- Product List -->
  <h2 class="p-3">Products <span class="text-gray-500">({{products.length}})</span></h2>
  <Product v-for="product in products" :key="product.id" :product="product"></Product>
</div>
</template>
<script>
import Product from '~/components/home/Product.vue';
export default {
  components: {
    Product
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="">
</style>