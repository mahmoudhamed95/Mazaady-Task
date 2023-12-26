<template>
<div class="w-full flex flex-wrap">   

      <!-- First Column -->
      <div class="md:w-1/2 lg:w-1/3 p-2">
        <UserCard :user="user"></UserCard>
        <UserQR :user="user"></UserQR>
      </div>

      <!-- Second Column -->
      <div class="md:w-1/2 lg:w-2/3 p-2">
        <div class="bg-white my-3 p-2 md:p-3 rounded-2xl shadow-md">
          <div class="flex items-center justify-between mb-4">
            <!-- Button Group -->
            <div class="flex gap-2">
              <!-- Products Button -->
              <button
                :class="[activeButton === 'Products'?'border-secondary text-secondary bg-light-yellow-100':'border-gray-300 text-gray-500' ]"
                @click="setActiveButton('Products')"
                class="border p-2 md:px-4 rounded-2xl"
              >
                Products
              </button>

              <!-- Article Button -->
              <button
                :class="[activeButton === 'Article'?'border-secondary text-secondary bg-light-yellow-100':'border-gray-300 text-gray-500' ]"
                @click="setActiveButton('Article')"
                class="border p-2 md:px-4 rounded-2xl"
              >
                Article
              </button>

              <!-- Reviews Button -->
              <button
                :class="[activeButton === 'Reviews'?'border-secondary text-secondary bg-light-yellow-100':'border-gray-300 text-gray-500' ]"
                @click="setActiveButton('Reviews')"
                class="border p-2 md:px-4 rounded-2xl"
              >
                Reviews
              </button>
            </div>

            <!-- Add Review Button -->
            <button class="hidden lg:flex bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-2xl items-center gap-2">
              <span class=""><i class="pi pi-plus-circle"></i></span>
              <span>Add Review</span>
            </button>
          </div>
          <ProductList :products="products"></ProductList>
        </div>
      </div>

  </div>
</template>

<script>
import UserCard from '~/components/home/UserCard.vue';
import UserQR from '~/components/home/UserQR.vue';
import ProductList from '~/components/home/ProductList.vue';
export default {
  layout: 'ProfileLayout',
  components: {
    UserCard,
    UserQR,
    ProductList
  },
  data() {
    return {
      activeButton: 'Products',
      user: {
        name: 'Hala Ahmed',
        bio:
          'I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.',
        followings: 5,
        followers: 201,
        overall_rate: 4.1,
        ratings: 12,
        avatar: require('~/assets/profile/avatar_large.svg')
      },
      products: [
        {
          id: 1,
          title: 'Six-piece clothing set (blouse - pants - hat)',
          price: 100,
          image: require('~/assets/profile/product.svg'),
          category: 'Live Auction',
          is_favourit: false
        },
        {
          id: 2,
          title: 'Six-piece clothing set (blouse - pants - hat)',
          price: 100,
          image: require('~/assets/profile/product.svg'),
          category: 'Hot Sale',
          is_favourit: true
        }
      ]
    };
  },
  methods: {
    setActiveButton(button) {
      this.activeButton = button;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>