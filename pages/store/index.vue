<template>
  <div class="main">
    <div class="main-container">
      <Navigation />
      <div class="info">
        <div class="search">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Поиск..."
            class="search-input"
            maxlength="256"
            data-aos="fade-up" 
            data-aos-delay="100"
          />
        </div>
        <div class="brand-filters">
          <button
            v-for="brand in uniqueBrands"
            :key="brand"
            @click="toggleBrandFilter(brand)"
            :class="{ active: selectedBrands.includes(brand) }"
            class="brand-button"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            {{ brand }}
          </button>
        </div>
        <div class="card-grid">
          <Card
            v-for="(part, index) in filteredAutoParts"
            :key="index"
            :part="part"
            data-aos="fade-up" 
            data-aos-delay="300"
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
      searchQuery: '',
      selectedBrands: [],
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
  },
  computed: {
    uniqueBrands() {
      const brands = this.autoParts.map(part => part.brand);
      return [...new Set(brands)];
    },
    filteredAutoParts() {
      const query = this.searchQuery.toLowerCase();
      return this.autoParts.filter(part => {
        const matchesSearch = part.name.toLowerCase().includes(query) || part.brand.toLowerCase().includes(query);
        const matchesBrand = this.selectedBrands.length === 0 || this.selectedBrands.includes(part.brand);
        return matchesSearch && matchesBrand;
      });
    }
  },
  methods: {
    toggleBrandFilter(brand) {
      const index = this.selectedBrands.indexOf(brand);
      if (index === -1) {
        this.selectedBrands.push(brand); 
      } else {
        this.selectedBrands.splice(index, 1); 
      }
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
.search-input {
  padding: 16px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
  border: none;
  outline: none;
  border-radius: 16px;
  background: var(--background-gray, #f8f9fc);
  font-size: 21px;
}

.search-input::placeholder{
  color: rgba(128, 128, 128, 0.428);
}

.brand-filters {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.brand-button {
  padding: 8px 12px;
  background: var(--background-gray, #f8f9fc);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all .3s ease;
}
.brand-button:hover{
  background-color: #df3749;
  color: white;
}

.brand-button.active {
  background-color: #df3749;
  color: white;
}
</style>
