<template>
  <NavBar/>
  <router-view/>
</template>

<script>
  // sending the pro... to the local storage
  let products = [
    {
      id: 1,
      brand: 'Gucci',
      imageLink: 'https://i.postimg.cc/SsFHh1Mf/p1.jpg'
    },
    {
      id: 2,
      brand: 'Nike',
      imageLink: 'https://i.postimg.cc/02BWvHgK/p2.jpg'
    },
    {
      id: 3,
      brand: 'Nike',
      imageLink: 'https://i.postimg.cc/cLWmdq9H/p3.jpg'
    },
    {
      id: 4,
      brand: 'Nike',
      imageLink: 'https://i.postimg.cc/qqMTPDPZ/p4.jpg'
    },
    {
      id: 5,
      brand: 'Nike',
      imageLink: 'https://i.postimg.cc/MKCLRrs2/p5.jpg'
    },
    {
      id: 6,
      brand: 'Nike',
      imageLink: 'https://i.postimg.cc/bJ45TCzt/p6.jpg'
    }
  ]

  localStorage.setItem('products', JSON.stringify(products));

  import NavBar from './components/NavBar.vue'
  export default {
    components: {
      NavBar,
    },
   
  }
</script>

