<template>
  <div>
  <Nav/>
  <MainBanner/>
  <IconBanner/>
  </div>
</template>

<script>
import IconBanner from '../components/IconBanner.vue'
  import MainBanner from '../components/MainBanner.vue'
  import Nav from '../components/Nav.vue'

  export default {
    name: 'Home',

    components: {
      Nav,
      MainBanner,
      IconBanner
    },
  }
</script>
