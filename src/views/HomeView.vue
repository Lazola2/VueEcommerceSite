<template>
    <section class="home-page-section">
        <HomePage/>
    </section>
</template> 

<script>
    import HomePage from '../components/HomePage.vue'
    export default {
        components: {
            HomePage,
        }
    }
</script>

<style scoped>
    .home-page-section {
        height: 92vh;
        display: flex;
        align-items: center;
        padding-left: 15rem;
        gap: 4rem;
    }

    h1 {
        color: #fff;
    }
</style>