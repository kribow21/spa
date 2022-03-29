<template>
  <div>
  <Nav/>
  <MainBanner/>
  <IconBanner/>
  <Promotions/>
  <Welcome/>
  </div>
</template>

<script>
import IconBanner from '../components/IconBanner.vue'
  import MainBanner from '../components/MainBanner.vue'
  import Nav from '../components/Nav.vue'
import Promotions from '../components/Promotions.vue'
import Welcome from '../components/Welcome.vue'

  export default {
    name: 'Home',

    components: {
      Nav,
      MainBanner,
      IconBanner,
      Promotions,
      Welcome
    },
  }
</script>
