<template>
    <div class="navigation">
        <div class="logo">
            <img src="@/public/images/content-img/logo.png" alt="">
        </div>
        <hr>
        <nuxt-link to="/" :class="{ active: isActive('/active-orders') }" class="nav-link">Активные заказы</nuxt-link>
        <nuxt-link to="/" :class="{ active: isActive('/orders-history') }" class="nav-link">История заказов</nuxt-link>
        <nuxt-link to="/contacts" :class="{ active: isActive('/contacts') }" class="nav-link">Контакты</nuxt-link>
        <nuxt-link to="/partners" :class="{ active: isActive('/partners') }" class="nav-link">Партнеры</nuxt-link>
        <nuxt-link to="/" :class="{ active: isActive('/store') }" class="nav-link">Список товаров</nuxt-link>
        <nuxt-link to="/warranty" :class="{ active: isActive('/warranty') }" class="nav-link">Гарантия и возврат</nuxt-link>
    </div>
</template>
<script>
export default {
    methods:{
        isActive(path) {
            return this.$route.path === path;
        },
    }
}
</script>
<style scoped>
    .navigation{
        width: fit-content;
        height: fit-content;
        padding: 16px;
        background: #FFFFFF;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        z-index: 200;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
        position: sticky;
        position: -webkit-sticky;
        top: 24px;
        margin-top: 70px;
    }

    .logo{
        border-radius: 16px;
        overflow: hidden;
        width: 220px;
        height: 220px;
    }

    .logo img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .nav-link {
        color: rgba(128, 128, 128, 0.514);
        font-size: 16px;
        cursor: pointer;
        width: fit-content;
        font-family: 'Manrope Light';
        padding: 6px 8px;
      }
      
      .nav-link:hover {
        color: #df3749;
      }
      
      .nav-link.active {
        color: white;
        background: #df3749;
        border-radius: 8px;
      }
      
      .nav-link.active:hover {
        background: #df3749;
        color: white !important;
      }
    hr{
        width: 100%;
        background: rgba(128, 128, 128, 0.514);
        border: none;
        height: 1px;
    }
    .sign{
        color: #df3748ea;
    }
</style>