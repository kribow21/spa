<template>
  <div>
  <Nav/>
  <MainBanner/>
  <IconBanner/>
  <Promotions/>
  <Welcome/>
  <Announcements/>
  <Giftcard/>
  </div>
</template>

<script>
import Announcements from '../components/Announcements.vue'
import Giftcard from '../components/Giftcard.vue'
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
      Welcome,
      Announcements,
      Giftcard
    },
  }
</script>
