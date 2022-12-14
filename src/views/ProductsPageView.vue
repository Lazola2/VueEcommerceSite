<template>
    <section class="products-page-view">
        <h1>Products</h1>
        <div class="product-items">
            <ProductItem/>
        </div>
    </section>
    
</template>
<script>
    import ProductItem from '@/components/Products.vue'
    export default {
        components: {
            ProductItem,
        }
    }
</script>

<style scoped> 
    h1 {
        color: white;
        font-size: 50px;
        margin: 3rem;
    }

    .product-items {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .products-page-view {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>