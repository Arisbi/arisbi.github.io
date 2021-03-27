<template>
  <div>
    <Navbar/>
    <Nuxt />
  </div>
</template>
<script>
import Navbar from '~/components/menu.vue'

export default {
  components: {
    Navbar
  },
  props: ['Navbar'],
}
</script>
<style>
</style>
