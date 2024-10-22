<template>
  <div class="main">
    <div class="main-container">
      <Header/>
      <Navigation />
      <div class="info">
        <div class="title" data-aos="fade-up" data-aos-delay="100">Список товаров</div>
        <div class="search">
          <div class="input-container" data-aos="fade-up" data-aos-delay="100">
            <input type="text" id="input" required="" v-model="searchQuery" maxlength="256">
            <label for="input" class="label">Поиск</label>
            <div class="underline"></div>
          </div>
          <div class="payment-filters" data-aos="fade-up" data-aos-delay="200">
            <button @click="selectSearch('name')" class="filter-search-button" :class="{ active: selectedSearch === 'name' }">По названию</button>
            <button @click="selectSearch('article')" class="filter-search-button" :class="{ active: selectedSearch === 'article' }">По артиклю</button>
          </div>
        </div>
        <div class="card-grid">
          <Card
            v-for="(part, index) in filteredAutoParts"
            :key="index"
            :part="part"
            data-aos="fade-up" 
            data-aos-delay="200"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navigation from '@/components/UI/Navigation.vue';
import Header from '@/components/UI/Header.vue';
import Card from '@/components/Store/Card.vue';
export default {
  name: 'BlockPage',
  components: {
    Navigation,
    Header,
    Card
  },
  data() {
    return {
      searchQuery: '',
      selectedBrands: [],
      selectedSearch: 'name',
      autoParts: [
        {
          id: 1,
          name: "Brake Pads",
          brand: "Brembo",
          article: "BP123",
          description: "High-performance brake pads with superior stopping power and durability.",
          image: "1.jpg"
        },
        {
          id: 2,
          name: "Oil Filter",
          brand: "Bosch",
          article: "OF456",
          description: "Bosch oil filters designed for extended performance and engine protection.",
          // image: "@/images/content-img/store/2.jpg"
        },
        {
          id: 3,
          name: "Car Battery",
          brand: "Exide",
          article: "CB789",
          description: "Long-lasting and maintenance-free car battery for all types of vehicles.",
          // image: "@/images/content-img/store/3.jpg"
        },
        {
          id: 4,
          name: "Spark Plugs",
          brand: "NGK",
          article: "B3123",
          description: "Iridium spark plugs for efficient combustion and fuel economy.",
          // image: "@/images/content-img/store/4.jpg"
        },
        {
          id: 5,
          name: "Air Filter",
          brand: "K&N",
          article: "OP123",
          description: "Reusable air filter that increases airflow and engine performance.",
          // image: "@/images/content-img/store/5.jpg"
        },
        {
          id: 6,
          name: "Fuel Injector",
          brand: "Denso",
          article: "KE123",
          description: "High-quality fuel injector for optimal engine performance and fuel efficiency.",
          // image: "@/images/content-img/store/1.jpg"
        },
        {
          id: 7,
          name: "Radiator",
          brand: "Mishimoto",
          article: "BK163",
          description: "Performance aluminum radiator for efficient engine cooling.",
          // image: "@/images/content-img/store/2.jpg"
        },
        {
          id: 8,
          name: "Timing Belt",
          brand: "Gates",
          article: "OM173",
          description: "Durable timing belt designed for precise engine timing and long life.",
          // image: "@/images/content-img/store/3.jpg"
        },
        {
          id: 9,
          name: "Headlights",
          brand: "Philips",
          article: "LP739",
          description: "Bright and energy-efficient LED headlights with a long lifespan.",
          // image: "@/images/content-img/store/4.jpg"
        },
        {
          id: 10,
          name: "Windshield Wipers",
          brand: "Bosch",
          article: "SQ155",
          description: "All-season windshield wipers for clear vision during heavy rain and snow.",
          // image: "@/images/content-img/store/5.jpg"
        },
      ]
    }
  },
  computed: {
    filteredAutoParts() {
      const query = this.searchQuery.toLowerCase();

      return this.autoParts.filter(part => {
        const matchesSearch = this.selectedSearch === 'name'
          ? part.name.toLowerCase().includes(query) 
          : part.article.toLowerCase().includes(query); 
          
        const matchesBrand = this.selectedBrands.length === 0 || this.selectedBrands.includes(part.brand);
        return matchesSearch && matchesBrand;
      });
    }
  },
  methods: {
    selectSearch(type) {
      this.selectedSearch = type; 
    },
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
.title {
  font-size: 24px;
  font-family: 'Manrope Bold';
  margin-bottom: 48px;
}
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
  background: var(--background-gray, #edeef3);
  font-size: 21px;
}

.search-input::placeholder{
  color: rgba(128, 128, 128, 0.428);
}
.payment-filters{
  margin-bottom: 24px;
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
