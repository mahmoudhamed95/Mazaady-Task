<template>
  <!-- Product Card  -->
  <div class="flex flex-wrap gap-2 mb-4 relative">
    <!-- Product Image with Ribbon -->
      <div class="relative">
        <img :src="product.image" alt="Product Image" class="w-full h-full min-width-20 object-cover rounded-3xl">
        <!-- Ribbon for Product Category -->
        <div class="absolute bottom-0 right-0 bg-primary text-white px-2 py-1 rounded-br-3xl rounded-tl-3xl">
          {{ product.category }}
        </div>
        <!-- Ribbon for Product Category -->
        <div :class="getRibbonClass(product.category)" class="absolute bottom-0 right-0 text-white px-2 py-1 rounded-br-3xl rounded-tl-3xl">
          {{ product.category }}
        </div>
      </div>
      <div class="product-details grow">
        <!-- Product Title, Starting Price, Countdown -->
        <h2 class="text-lg font-semibold mb-2">{{ truncateTitle(product.title) }}</h2>
        <p class="">
          <span class="text-gray-600">Starting Price</span>
          <span class="font-bold">{{ product.price }} EGP</span>
        </p>
        <!-- Countdown Timer (You may use a library for this) -->
        <div class="flex items-center gap-2 mt-2">
          <h6 class="text-gray-600 min-w-10">Lot starts in</h6>
          <div class="flex items-baseline gap-1 bg-yellow-100 text-secondary rounded-full px-2 py-1">
            <span class="text-lg font-bold">5</span>
            <span class="font-semibold text-sm">Days</span>
          </div>
          <div class="flex items-baseline gap-1 bg-yellow-100 text-secondary rounded-full px-2 py-1">
            <span class="text-lg font-bold">12</span>
            <span class="font-semibold text-sm">Hours</span>
          </div>
          <div class="flex items-baseline gap-1 bg-yellow-100 text-secondary rounded-full px-2 py-1">
            <span class="text-lg font-bold">30</span>
            <span class="font-semibold text-sm">Minutes</span>
          </div>
        </div>
      </div>
      <div class="favorite-btn">
        <!-- Fav Icon Button -->
        <button class="hidden lg:flex text-primary">
          <i v-if="product.is_favourit" class="pi pi-heart-fill"></i>
          <i v-else class="pi pi-heart"></i>
        </button>
        <!-- Fav Icon Button for small screens -->
        <button @click="product.is_favourit=!product.is_favourit" class="flex lg:hidden text-primary bg-white rounded-full p-2 absolute top-2 left-2">
            <i v-if="product.is_favourit" class="pi pi-heart-fill"></i>
            <i v-else class="pi pi-heart"></i>
        </button>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleFavourite() {
      this.product.is_favourit = !this.product.is_favourit;
    },
    truncateTitle(title) {
      const maxLength = 50;
      return title.length > maxLength
        ? title.slice(0, maxLength) + '...'
        : title;
    },
    getRibbonClass(category) {
      if (category === 'Live Auction') {
        return 'bg-primary';
      } else if (category === 'Hot Sale') {
        return 'bg-secondary';
      } else {
        // Default class or additional conditions can be added here
        return 'bg-gray-500';
      }
    }
  }
};
</script>
<style lang="">
</style>