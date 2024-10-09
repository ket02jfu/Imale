<template>
  <div class="main">
    <div class="main-container">
      <Header />
      <Navigation />
      <div class="info">
        <div class="title" data-aos="fade-up" data-aos-delay="100">Информация о запчасти</div>
        <div class="part-information" v-if="part">
          <div class="part-container" data-aos="fade-up" data-aos-delay="200">
            <h2>{{ part.name }}</h2>
            <span>{{ part.brand }}</span>
            <p>{{ part.description }}</p>
            <!-- <strong>Цена: {{ part.price }}</strong> -->
          </div>
          <div class="part-image" data-aos="fade-up" data-aos-delay="300">
            <div class="image" @click="openModal">
              <img src="@/public/images/content-img/store/1.jpg" alt="" :alt="part.name" class="card-image">
            </div>
          </div>
        </div>
        <div v-else>
          <p>Запчасть не найдена.</p>
        </div>
      </div>
    </div>
    <ImageModal 
      :isVisible="isModalVisible" 
      :imageSrc="'@/public/images/content-img/store/1.jpg'" 
      @close="isModalVisible = false"
    />
  </div>
</template>

<script>
  import Navigation from '@/components/UI/Navigation.vue';
  import Header from '@/components/UI/Header.vue';
  import Card from '@/components/Store/Card.vue';
  import ImageModal from '@/components/Modals/ImageModal.vue';
  export default {
    name: 'BlockPage',
    components: {
      Navigation,
      Header,
      Card,
      ImageModal
    },
    data() {
      return {
        part: null,
        isModalVisible: false,
      };
    },
    mounted() {
      const id = this.$route.query.id;
      this.fetchPartDetails(id);
    },
    methods: {
      fetchPartDetails(id) {
        const autoParts = [{
            id: 1,
            name: "Brake Pads",
            brand: "Brembo",
            description: "High-performance brake pads with superior stopping power and durability.",
            image: "1.jpg"
          },
          {
            id: 2,
            name: "Oil Filter",
            brand: "Bosch",
            description: "Bosch oil filters designed for extended performance and engine protection.",
          },
          {
            id: 3,
            name: "Car Battery",
            brand: "Exide",
            description: "Long-lasting and maintenance-free car battery for all types of vehicles.",
          },
          {
            id: 4,
            name: "Spark Plugs",
            brand: "NGK",
            description: "Iridium spark plugs for efficient combustion and fuel economy.",
          },
          {
            id: 5,
            name: "Air Filter",
            brand: "K&N",
            description: "Reusable air filter that increases airflow and engine performance.",
          },
          {
            id: 6,
            name: "Fuel Injector",
            brand: "Denso",
            description: "High-quality fuel injector for optimal engine performance and fuel efficiency.",
          },
          {
            id: 7,
            name: "Radiator",
            brand: "Mishimoto",
            description: "Performance aluminum radiator for efficient engine cooling.",
          },
          {
            id: 8,
            name: "Timing Belt",
            brand: "Gates",
            description: "Durable timing belt designed for precise engine timing and long life.",
          },
          {
            id: 9,
            name: "Headlights",
            brand: "Philips",
            description: "Bright and energy-efficient LED headlights with a long lifespan.",
          },
          {
            id: 10,
            name: "Windshield Wipers",
            brand: "Bosch",
            description: "All-season windshield wipers for clear vision during heavy rain and snow.",
          },
        ]
        this.part = autoParts.find(part => part.id === Number(id));
      },
      openModal() {
        this.isModalVisible = true; 
      }
    }
  }

</script>

<style scoped>
  .info-page {
    padding: 16px;
  }

  .title {
    font-size: 24px;
    font-family: 'Manrope Bold';
    margin-bottom: 48px;
  }

  .part-information {
    display: flex;
    flex-direction: row;
    gap: 16px;

  }

  .part-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .part-container h2 {
    font-size: 36px;
    font-family: 'Manrope Bold';
  }

  span {
    font-size: 24px;
    color: #df3749;
  }

  .part-container p{
    font-size: 21px;
  }

  .part-image {
    max-width: 300px;
    min-width: 300px;
  }

  .image {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>
