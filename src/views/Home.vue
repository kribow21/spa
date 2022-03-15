<template>
  <div>
  <Nav/>
  <MainBanner/>
  </div>
</template>

<script>
  import MainBanner from '../components/MainBanner.vue'
  import Nav from '../components/Nav.vue'

  export default {
    name: 'Home',

    components: {
      Nav,
      MainBanner
    },
  }
</script>
