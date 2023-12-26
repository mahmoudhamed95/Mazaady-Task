<template>
  <div class="w-full text-white">
    <div class="text-center">
      <h1 class="text-4xl mb-8">Welcome to My Nuxt.js Assessment!</h1>
      <div class="space-x-4">
        <nuxt-link to="/form" class="inline-block">
          <button class="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full">Form Task</button>
        </nuxt-link>
        <nuxt-link to="/home" class="inline-block">
          <button class="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full">Static Design Task</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage'
};
</script>
