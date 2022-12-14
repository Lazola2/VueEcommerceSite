<template>
    <div class="product" v-for="product in products" v-bind:key="product">
        <img :src="product.imageLink"/>
        <div class="content">fgd</div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',
    data: function () {
        return {
            products: JSON.parse(localStorage.getItem('products'))
        }
    }
}   
</script>

<style scoped>
.product {
    display: flex;
    flex-direction: row;
    width: 250px;
    height: 300px;  
    position: relative; 
    transition: .4s;
}

.product:hover .content {
    height: 100%;
}

.content {
    height: 0;
    width: 100%;
    background: black;
    z-index: 1;
    position: absolute;
}

img {
    width: 100%;
    height: 100%;
    z-index: -1;
}
</style>