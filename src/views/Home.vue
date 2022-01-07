<template>
<div>
  <app-bars/>

  <h1 style="font-size: 500%; text-align: center">Welcome to our DripList</h1>
  <h4 style="font-size: 150%; opacity: 0.6; text-align: center">Built to keep track of your desires</h4>

  <v-icon size="200px" class="emoticon-home">
    mdi-emoticon-cool
  </v-icon>

</div>
</template>

<script>


  export default {
    name: 'Home',

    components:{
      'app-bars': require('@/components/AppBarStart.vue').default
    }

  }
</script>

<style lang="sass">

.img-home
  position: absolute
  left: 50%
  top: 65%
  transform: translate(-50%, -50%)
  border-radius: 10%

.img-home-2
  position: absolute
  left: 15%
  top: 65%
  transform: translate(-10%, -50%)
  border-radius: 10%

.img-home-3
  position: absolute
  right: 15%
  top: 65%
  transform: translate(-10%, -50%)
  border-radius: 10%

.emoticon-home
  position: absolute
  left: 50%
  top: 250%
  transform: translate(-50%,-250%)

</style>

