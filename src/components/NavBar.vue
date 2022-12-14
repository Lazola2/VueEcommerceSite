<template>
    <header>
        <!-- logo -->
        <div class="logo">
            <h1>Logo</h1>
        </div>
        <nav class="nav">
            <ul class="nav-links">
                <!-- home -->
                <router-link class="router-link" to='/'>
                    <li class="links">Home</li>
                </router-link>
                
                <!-- about -->
                <router-link class="router-link" to='/about'>
                    <li class="links">About</li>
                </router-link>
                
                <!-- products -->
                <router-link class="router-link" to='/products'>
                    <li class="links">Products</li>
                </router-link>

                <!-- contact -->
                <router-link class="router-link" to='/contact'>
                    <li class="links">Contact</li>
                </router-link>

                <!-- admin -->
                <router-link class="router-link" to='/Admin'>
                    <li class="links">Admin</li>
                </router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        component: {
            name: 'NavBar'
        }
    }
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        height: 8vh;
        color: orange;
    }

    header nav ul {
        display: flex;
        gap: 3rem;
    }

    header nav ul li{
        list-style: none;
    }

    .router-link {
        text-decoration: none;
        color: orange;
    }

    
</style>
