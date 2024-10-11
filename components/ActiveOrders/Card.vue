<template>
  <nuxt-link :to="`/store/info?id=${part.id}`" class="card-container">
    <div class="img">
      <img src="@/public/images/content-img/store/3.jpg" alt="" :alt="part.name" class="card-image" >
    </div>
    <h3>{{ part.name }}</h3>
    <p>{{ part.description }}</p>
    <span>{{ part.brand }}</span>
    <strong>{{ part.price }} ₸</strong>
    <div class="status-container">
      <div class="status" :class="{'active': part.status === 'Active', 'archive': part.status === 'Archive'}">
        {{ part.status === 'Active' ? 'Активный' : 'Архив' }}
      </div>
      <div class="date">
        {{ part.date }}
      </div>
    </div>
  </nuxt-link>
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

.card-container:hover {
    background: white;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.087);
}

.img {
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
  color: black;
}

p {
  font-size: 14px;
  color: #555;
  padding: 0 16px;
}

span {
  font-size: 12px;
  color: #df3749;
  padding: 0 16px;
}

strong {
  font-size: 16px;
  color: #000;
  padding: 0 16px;
}

.status-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
}

.status {
  font-size: 14px;
  font-weight: bold;
}

.status.active {
  color: green;
}

.status.archive {
  color: gray;
}

.date {
  font-size: 12px;
  color: #555;
}
</style>
