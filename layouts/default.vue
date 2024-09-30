<template>
    <Nuxt />
</template>

<script>
export default {
    name: 'Index',
    head() {
        return {
            title: 'Личный кабинет',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Личный кабинет'
                },
                { property: 'og:title', content: 'Ваш личный кабинет', },
                { property: 'og:description', content: 'Все самые лучшие продукты и модули Aspandau Academy',},
                { property: "og:url",content: `https://aspandau.academy${this.$route.path}`},
                // { property: 'og:image', content: 'https://yt3.googleusercontent.com/wBmT5FOxrtZ3HOg-OLpmwyXj4F6pOEOtTcwqKS7E_WEOKCNg8oruX3l4vssk1sqOvMdu_Q1qjA=s900-c-k-c0x00ffffff-no-rj'},
            ],
        }
    },
}
</script>