<template>
    <div class="page">
        <div class="error">
            <div class="title" data-aos="fade-left" data-aos-delay="200" v-if="error.statusCode === 404">404</div>
            <div class="title" data-aos="fade-left" data-aos-delay="200" v-if="error.statusCode === 500">500</div>
            <div class="sub-title" data-aos="fade-right" data-aos-delay="400" v-if="error.statusCode === 404">К сожалению, запрашиваемая страница не найдена. Попробуйте перейти на главную страницу.</div>
            <div class="sub-title" data-aos="fade-right" data-aos-delay="200" v-if="error.statusCode === 500">На сервере произошла непредвиденная ошибка. Пожалуйста, подождите. Она вскоре будет исправлена.</div>
            <nuxt-link to="/" class="link" data-aos="fade-left" data-aos-delay="600" v-if="error.statusCode === 404">
                <span class="text">Перейти</span>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'error',
    head() {
        return {
            title: this.error.statusCode,
        }
    },
    props: ['error'],
    layout: 'error' 
  }
</script>
<style scoped>
    .error{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        min-height: 100vh;
        position: relative;
    }

    .title{
        background: -webkit-linear-gradient(3.76deg, #df3749 20.71%, #580000 108.34%);
        font-size: 370px;
        font-family: 'Manrope ExtraBold';
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .sub-title{
        max-width: 450px;
        text-align: center;
        margin-bottom: 52px;
    }

    .link{
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 10px;
        font-size: 16px;
        font-weight: 600;
        color: #ffffff;
        background: linear-gradient(53.76deg, #df3749 20.71%, #580000 108.34%);
        text-decoration: none;
        border-radius: 12px;
        transition: opacity .3s ease;
    }
    .link:hover {
        opacity: .65;
    }
    @media (max-width: 1250px){
        .title{
            font-size: 250px;
        }
    }
    @media (max-width: 560px){
        .error{
            padding: 0 24px;
        }
        .title{
            font-size: 150px;
        }
        .sub-title{
            max-width: none;
            text-align: center;
        }   
    }
</style>