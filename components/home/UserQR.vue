<template>
          <!-- QR Code Section -->
        <div class="bg-white my-3 p-2 md:p-3 rounded-2xl shadow-md">

          <!-- Top Section -->
          <div class="flex items-center justify-between">
            <div class="text-lg font-semibold">QR Code</div>
            <div class="flex gap-3">
              <!-- Eye Icon Button -->
              <button class="text-gray-600">
                <i class="pi pi-eye"></i>
              </button>
              <!-- Share Icon Button -->
              <button class="text-gray-600">
                <i class="pi pi-share-alt"></i>
              </button>
              <!-- Download Icon Button -->
              <button class="text-gray-600">
                <i class="pi pi-download"></i>
              </button>
              <!-- Toggle Button (visible on small screens) -->
              <button @click="toggleSections" class="lg:hidden text-gray-600">
                <i class="pi" :class="[showQrContent?'pi-angle-up':'pi-angle-down']"></i>
              </button>
            </div>
          </div>
          <!-- Content Section with Vue Transition -->
          <transition name="fade" mode="out-in">
            <div class="content-wrapper" v-if="showQrContent">
              <!-- Second Section -->
              <div class="my-4 bg-yellow-100 p-3 rounded-2xl">
                <!-- Download Icon -->
                <button class="text-secondary">
                  <i class="pi pi-download"></i>
                </button>
                <span class="ml-2 text-sm">Download the QR code or share it with your friends.</span>
              </div>

              <!-- Third Section -->
              <!-- Gradient Background Box -->
              <div class="bg-gradient-to-r from-primary to-secondary p-3 rounded-2xl shadow-md">
                <!-- White Box with Company Logo, User Name, QR Code, Follow Us Text -->
                <div class="bg-white p-3 rounded-2xl shadow-md text-center">
                  <!-- Company Logo -->
                  <img src="~/assets/profile/mazaady_logo.svg" alt="Company Logo" class="mx-auto mb-2" />

                  <!-- User Name -->
                  <div class="text-lg text-gray-700 font-semibold mb-2">{{user.name}}</div>

                  <!-- QR Code Image -->
                  <img src="~/assets/profile/qr_code.svg" alt="QR Code" class="mx-auto mb-2" />

                  <!-- Follow Us Text -->
                  <div class="text-sm text-gray-500">Follow us on Mazaady</div>
                </div>
              </div>
            </div>
          </transition>

        </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showQrContent: true
    };
  },
  methods: {
    toggleSections() {
      this.showQrContent = !this.showQrContent;
    }
  }
};
</script>
<style lang="">
</style>