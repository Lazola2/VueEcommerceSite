<template>
    <div class="homepage-component">
        <p class="homepage-paragraph">Get the latest, in fashion quality brands</p>
        <h1 class="homepage-heading">
            Summer 
            <span class="highlighted">specials</span><br>
            for 
            <span class="highlighted">you!</span>
        </h1>
        <button class="shop-button">Shop</button>
    </div>
</template>

<script>
    export default {
        name: 'HomePage' 
    }
</script>

<style scoped>
    .homepage-component{
        color: #fff;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .homepage-component .homepage-heading {
        font-size: 75px;
    }

    .homepage-paragraph {
        font-size: 30px;
        color: orange;
        margin-left: 5px;
    }

    .highlighted {
        color: orange;
    }

    .shop-button {
        height: 50px;
        width: 250px;
        font-size: 20px;
        border: 2px solid orange;
        background: none;
           left: -2px;
        top: -2px;
        color: orange;
        position: relative;
    }

    .shop-button::after {
        content: '';
        position: absolute;
        height: 50px;
        width: 0;
        transition: .2s;
        background: orange;
        left: -2px;
        top: -2px;
        color: white;
        display: flex;
        align-items:center;
        justify-content: center;
    }

    .shop-button:hover::after {
        content: 'Shop';
        height: 50px;
        width: 250px;
        overflow: hidden;
    }
    
</style>
