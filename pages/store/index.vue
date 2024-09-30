<template>
  <div class="main">
    <div class="main-container">
      <Navigation />
      <div class="info">
        <div class="card-grid">
          <Card
            v-for="(part, index) in autoParts"
            :key="index"
            :part="part"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/UI/Navigation.vue';
import Card from '@/components/Store/Card.vue';
export default {
  name: 'BlockPage',
  components: {
    Navigation,
    Card
  },
  data() {
    return {
      autoParts: [
        {
          name: "Brake Pads",
          brand: "Brembo",
          price: "$120",
          description: "High-performance brake pads with superior stopping power and durability.",
          image: "1.jpg"
        },
        {
          name: "Oil Filter",
          brand: "Bosch",
          price: "$15",
          description: "Bosch oil filters designed for extended performance and engine protection.",
          // image: "@/images/content-img/store/2.jpg"
        },
        {
          name: "Car Battery",
          brand: "Exide",
          price: "$100",
          description: "Long-lasting and maintenance-free car battery for all types of vehicles.",
          // image: "@/images/content-img/store/3.jpg"
        },
        {
          name: "Spark Plugs",
          brand: "NGK",
          price: "$30",
          description: "Iridium spark plugs for efficient combustion and fuel economy.",
          // image: "@/images/content-img/store/4.jpg"
        },
        {
          name: "Air Filter",
          brand: "K&N",
          price: "$50",
          description: "Reusable air filter that increases airflow and engine performance.",
          // image: "@/images/content-img/store/5.jpg"
        },
        {
          name: "Fuel Injector",
          brand: "Denso",
          price: "$75",
          description: "High-quality fuel injector for optimal engine performance and fuel efficiency.",
          // image: "@/images/content-img/store/1.jpg"
        },
        {
          name: "Radiator",
          brand: "Mishimoto",
          price: "$250",
          description: "Performance aluminum radiator for efficient engine cooling.",
          // image: "@/images/content-img/store/2.jpg"
        },
        {
          name: "Timing Belt",
          brand: "Gates",
          price: "$80",
          description: "Durable timing belt designed for precise engine timing and long life.",
          // image: "@/images/content-img/store/3.jpg"
        },
        {
          name: "Headlights",
          brand: "Philips",
          price: "$60",
          description: "Bright and energy-efficient LED headlights with a long lifespan.",
          // image: "@/images/content-img/store/4.jpg"
        },
        {
          name: "Windshield Wipers",
          brand: "Bosch",
          price: "$20",
          description: "All-season windshield wipers for clear vision during heavy rain and snow.",
          // image: "@/images/content-img/store/5.jpg"
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-grid {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
