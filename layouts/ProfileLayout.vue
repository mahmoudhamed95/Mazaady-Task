<template>
  <div>
    <!-- Header -->
    <header class="bg-white text-gray-800">
      <div class="container mx-auto flex justify-between items-center p-4">
        <!-- Logo and Navigation -->
        <div class="flex items-center gap-3">
          <!-- Toggle Menu Button for Small Screens -->
          <button @click="toggleMenu" class="lg:hidden text-gray-600">
            <i class="pi pi-bars"></i>
          </button>

          <img src="~/assets/profile/mazaady_logo.svg" alt="Company Logo" class="" />
          
          <!-- Navigation Links for Larger Screens -->
          <div class="hidden lg:flex items-center gap-3">
            <NuxtLink to="/home" class="text-gray-700 font-semibold">Home</NuxtLink>
            <NuxtLink to="/blog" class="text-gray-700 font-semibold">Blog</NuxtLink>
            <NuxtLink to="/gifts" class="text-gray-700 font-semibold">Gifts</NuxtLink>
          </div>
        </div>

        <!-- Search, Notifications, User Avatar, Language, and Add New Product Button -->
        <div class="flex items-center gap-3">
          <!-- Search Icon -->
          <button class="text-gray-600">
            <i class="pi pi-search"></i> 
          </button>

          <span class="text-gray-300">|</span>

          <!-- Notifications Icon -->
          <button class="text-gray-600">
            <i class="pi pi-bell"></i>
          </button>

          <span class="text-gray-300">|</span>

          <!-- User Avatar -->
          <img src="~/assets/profile/avatar_small.svg" alt="Company Logo" class="" />

          <!-- Add New Product Button -->
          <button class="hidden lg:flex bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-2xl items-center gap-2">
            <span class=""><i class="pi pi-plus-circle"></i></span>
            <span>Add New Product</span> 
          </button>

          <!-- Language Selector -->
          <button class="hidden lg:flex items-center gap-2 text-gray-600 p-2">
            <span><i class="pi pi-globe"></i></span>
            <span class="text-gray-300">|</span>
            <span>EN</span>
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-show="isMobileMenuOpen" class="lg:hidden bg-white p-4">
        <NuxtLink
          to="/home"
          class="block p-2 text-gray-800 hover:text-primary transition duration-300"
          @click="closeMobileMenu"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/blog"
          class="block p-2 text-gray-800 hover:text-primary transition duration-300"
          @click="closeMobileMenu"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          to="/gifts"
          class="block p-2 text-gray-800 hover:text-primary transition duration-300"
          @click="closeMobileMenu"
        >
          Gifts
        </NuxtLink>
      </div>
    </header>

      <!-- Content Section -->
      <div class="container mx-auto">
        <!-- Your page content goes here -->
        <Nuxt />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Your styles go here */
::v-deep .nuxt-link-exact-active,
.nuxt-link-active {
  color: var(--primary-color) !important;
  border-bottom: 4px solid;
  border-radius: 38px 38px 0px 0px;
}
</style>
