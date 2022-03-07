<template>
  <div>
  <Nav2/>
  <MainBanner/>
  </div>
</template>

<script>
  import MainBanner from '../components/MainBanner.vue'
  import Nav2 from '../components/Nav2.vue'

  export default {
    name: 'Home',

    components: {
      Nav2,
      MainBanner
    },
  }
</script>
