<template>
  <div class="main">
    <div class="main-container">
      <Navigation />
      <Header/>
      <div class="info">
        <div class="title" data-aos="fade-up" data-aos-delay="100">Нам доверяют</div>
        <div class="partners-grid">
          <div class="partner" 
            v-for="partner in partners"
            :key="partner.id"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div class="image">
              <img src="@/public/images/content-img/partner.jpeg" alt="">
            </div>
            <div class="partner-title">
              Imale & "{{ partner.name }}"
            </div>
            <div class="description">
                {{ partner.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Navigation from '@/components/UI/Navigation.vue';
  import Header from '@/components/UI/Header.vue';
  export default {
    components: {
      Navigation,
      Header
    },
    data() {
      return {
        partners: [{
            name: "Partner 1",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eveniet corrupti quae ea modi doloribus blanditiis ut mollitia quidem asperiores? Incidunt, consequatur ad! Modi maiores laudantium minima quo illum dolores!",
            img: "+7 (123) 456 78 90"
          },
          {
            name: "Partner 2",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At harum totam deleniti officia reprehenderit. Fuga quasi provident similique nemo? Ipsam error officiis sed blanditiis molestias voluptatem, recusandae atque unde quo.",
            img: "+7 (123) 456 78 90"
          },
          {
            name: "Partner 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea quasi quod temporibus aspernatur odit vel voluptates incidunt impedit assumenda, quia, unde, porro quas consequatur. Incidunt nesciunt ipsa quas praesentium!",
            img: "+7 (123) 456 78 90"
          },
        ]
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

  .partners-grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  .partner {
    width: calc(100% / 3 - 12px);
  }

  .image {
    width: 200px;
    height: 100px;
    margin-bottom: 12px;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .partner-title {
    font-size: 18px;
    margin-bottom: 8px;
    font-family: 'Manrope Bold';
  }

  .description {
    font-size: 16px;
    font-family: 'Manrope Light';
    color: #7D838E;
  }

</style>
