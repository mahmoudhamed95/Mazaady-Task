<template>
          <!-- User Block -->
        <div class="bg-white my-3 p-2 md:p-3  rounded-2xl shadow-md">
          <!-- User Avatar, Name, Bio, Followings, Followers, Rate -->
          <div class="my-2">
            <img :src="user.avatar" alt="User Avatar" class="rounded-2xl" />
          </div>
          <div class="my-2">
            <h2 class="text-lg font-semibold">{{user.name}}</h2>
            <p class="text-gray-600">{{user.bio}}</p>
          </div>
          
          <!-- Followings, Followers, Rate -->
          <div class="flex items-center justify-between gap-1 my-4">
            <div class="flex items-center gap-1 font-semibold bg-yellow-100 rounded-2xl p-2">
              <div class="text-secondary">
                <span><i class="pi pi-users"></i></span>
              </div>
              <div>
                <span class="block">{{user.followers}}</span>
                <span class="text-sm text-secondary">Followers</span>
              </div>
            </div>
            <div class="flex items-center gap-1 font-semibold bg-yellow-100 rounded-2xl p-2">
              <div class="text-secondary">
                <span><i class="pi pi-user"></i></span>
              </div>
              <div>
                <span class="block">{{user.followings}}</span>
                <span class="text-sm text-secondary">Following</span>
              </div>
            </div>
            <div class="flex items-center gap-1 font-semibold bg-yellow-100 rounded-2xl p-2">
              <div class="text-secondary">
                <span><i class="pi pi-star"></i></span>
              </div>
              <div>
                <div>
                  <span class="">{{user.overall_rate}}</span>
                  <span class="text-gray-500">({{user.ratings}})</span>
                </div>
                <span class="text-sm text-secondary">Rate</span>
              </div>
            </div>
          </div>

          <!-- Follow Button -->
          <button class="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full w-full">
            Follow
          </button>
        </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="">
</style>