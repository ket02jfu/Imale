<template>
  <div class="main">
    <div class="main-container">
      <Header />
      <Navigation />
      <div class="info">
        <div class="title" data-aos="fade-up" data-aos-delay="100">Корзина товаров</div>
        <div class="search">

          <input type="text" v-model="searchQuery" placeholder="Поиск..." class="search-input" maxlength="256"
            data-aos="fade-up" data-aos-delay="200" />

          <button @click="toggleSortOrder" class="sort-button" data-aos="fade-up" data-aos-delay="200">
            <span>Сортировать по дате</span>
            <i class="sort-icon" :class="{'rotated': sortOrder === 'asc'}">&#9660;</i>
          </button>

        </div>
        <div class="payment-filters" data-aos="fade-up" data-aos-delay="200">
          <button @click="resetPaymentFilter" class="payment-button" :class="{ active: selectedPayment === null }">
            Все
          </button>
          <button @click="togglePaymentFilter('paid')" :class="{ active: selectedPayment === 'paid' }"
            class="payment-button">
            Оплаченные
          </button>
          <button @click="togglePaymentFilter('unpaid')" :class="{ active: selectedPayment === 'unpaid' }"
            class="payment-button">
            Отмененные
          </button>
        </div>
        <div class="card-grid">
          <Card v-for="(part, index) in filteredAutoParts" :key="index" :part="part" data-aos="fade-up"
            data-aos-delay="300" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navigation from '@/components/UI/Navigation.vue';
  import Header from '@/components/UI/Header.vue';
  import Card from '@/components/Cart/Card.vue';

  export default {
    name: 'BlockPage',
    components: {
      Navigation,
      Header,
      Card,
    },
    data() {
      return {
        searchQuery: '',
        selectedPayment: null,
        selectedBrands: [],
        sortOrder: 'desc',
        autoParts: [{
            name: 'Brake Pads',
            brand: 'Brembo',
            description: 'High-performance brake pads with superior stopping power and durability.',
            image: '1.jpg',
            date: '23.10.2024',
            paid: true,
            price: 200,
            id: 1
          },
          {
            name: 'Oil Filter',
            brand: 'Bosch',
            description: 'Bosch oil filters designed for extended performance and engine protection.',
            image: '1.jpg',
            date: '22.10.2024',
            paid: true,
            price: 100,
            id: 2
          },
          {
            name: 'Car Battery',
            brand: 'Exide',
            description: 'Long-lasting and maintenance-free car battery for all types of vehicles.',
            image: '1.jpg',
            date: '21.10.2024',
            paid: false,
            price: 150,
            id: 3
          },
        ],
      };
    },
    computed: {
      filteredAutoParts() {
        const query = this.searchQuery.toLowerCase();
        const filtered = this.autoParts.filter((part) => {
          const matchesSearch =
            part.name.toLowerCase().includes(query) || part.brand.toLowerCase().includes(query);
          const matchesPayment =
            this.selectedPayment === null || 
            (this.selectedPayment === 'paid' && part.paid) ||
            (this.selectedPayment === 'unpaid' && !part.paid);

          return matchesSearch && matchesPayment;
        });

        return filtered.sort((a, b) => {
          const dateA = new Date(a.date.split('.').reverse().join('-'));
          const dateB = new Date(b.date.split('.').reverse().join('-'));
          if (this.sortOrder === 'asc') {
            return dateA - dateB;
          } else {
            return dateB - dateA;
          }
        });
      },
    },
    methods: {
      toggleSortOrder() {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      },
      togglePaymentFilter(type) {
        this.selectedPayment = this.selectedPayment === type ? null : type;
      },
      resetPaymentFilter() {
        this.selectedPayment = null;
      },
    },
  };

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

  .search {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .search-input {
    padding: 16px;
    width: 100%;
    max-width: 400px;
    border: none;
    outline: none;
    border-radius: 16px;
    background: var(--background-gray, #edeef3);
    font-size: 21px;
  }

  .search-input::placeholder {
    color: rgba(128, 128, 128, 0.428);
  }

  .sort-button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #000;
  }

  .sort-icon {
    font-size: 16px;
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  .sort-icon.rotated {
    transform: rotate(180deg);
  }


  .payment-filters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
  }

  .payment-button {
    padding: 8px 12px;
    background: var(--background-gray, #f8f9fc);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s ease;
  }

  .payment-button:hover {
    background-color: #df3749;
    color: white;
  }

  .payment-button.active {
    background-color: #df3749;
    color: white;
  }

</style>
