<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="closeModal">
    <div class="modal-content" data-aos="fade" data-aos-delay="100">
      <span class="close-button" @click="closeModal">&times;</span>
      <img src="@/public/images/content-img/store/1.jpg" alt="Modal Image" class="modal-image" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImageModal',
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      imageSrc: {
        type: String,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };

</script>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    position: relative;
    max-width: 80%;
    max-height: 80%;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }

  .modal-image {
    width: 100%;
    height: auto;
  }

</style>
