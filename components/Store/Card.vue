<template>
  <div class="card-container">
    <div class="img">
        <!-- <img :src="require(`@/public/images/content-img/store/${part.image}`)" :alt="part.name" class="card-image" > -->
        <img src="@/public/images/content-img/store/1.jpg" alt="" :alt="part.name" class="card-image" >
    </div>
    <h3>{{ part.name }}</h3>
    <p>{{ part.description }}</p>
    <span>{{ part.brand }}</span>
    <strong>{{ part.price }}</strong>
  </div>
</template>

<script>
export default {
  props: {
    part: Object
  }
}
</script>

<style scoped>
.card-container {
  width: calc(100% / 3 - 12px);
  height: auto;
  background: var(--background-gray, #f8f9fc);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all .3s ease;
  overflow: hidden;
  padding-bottom: 16px;
}

.card-container:hover{
    background: white;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.087);
}

.img{
    width: 100%;
    height: 250px;
    overflow: hidden;
}
.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h3 {
  font-size: 18px;
  margin: 8px 0;
  padding: 0 16px;
}

p {
  font-size: 14px;
  color: #555;
  padding: 0 16px;
}

span {
  font-size: 12px;
  color: #777;
  padding: 0 16px;
}

strong {
  font-size: 16px;
  color: #000;
  padding: 0 16px;
}
</style>
