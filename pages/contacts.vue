<template>
    <div class="main">
      <div class="main-container">
        <Navigation />
        <Header/>
        <div class="info">
            <div class="title" data-aos="fade-up" data-aos-delay="100">Контакты</div>
            <div class="contact-grid">
                <div class="contact" 
                    v-for="contact in contacts"
                    :key="contact.id"
                    data-aos="fade-up" 
                    data-aos-delay="200"
                >
                    <div class="name">{{contact.name}}</div>
                    <div class="description">{{contact.description}}</div>
                    <div class="phone">{{contact.phone}}</div>
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
    components:{
        Navigation,
        Header
    },
    data() {
      return {
        contacts: [
            {
                name: "Игорь Захаров",
                description: "High-performance brake pads with superior stopping power and durability.",
                phone: "+7 (123) 456 78 90"
            },
            {
                name: "Артём Вуколов",
                description: "Bosch oil filters designed for extended performance and engine protection.",
                phone: "+7 (123) 456 78 90"
            },
            {
                name: "Андрей Кузнецов",
                description: "Long-lasting and maintenance-free car battery for all types of vehicles.",
                phone: "+7 (123) 456 78 90"
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
    .contact-grid{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 36px;
    }
    .contact{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .name{
        font-size: 18px;
        font-family: 'Manrope Bold';
    }
    .description {
        font-size: 16px;
        font-family: 'Manrope Light';
        color: #7D838E;
    }
    .phone{
        font-size: 18px;
    }
</style>