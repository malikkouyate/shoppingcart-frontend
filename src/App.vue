<template>
  <v-app id="inspire">


    <v-main>
      <router-view></router-view>
    </v-main>

    <footer-s/>

  </v-app>
</template>

<script>
export default {

  components:{
    'footer-s': require('@/components/Footer.vue').default
  }
}

</script>
