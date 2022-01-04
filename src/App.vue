<template>
  <v-app id="inspire">

    <app-bars/>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null

  }),
  components:{
    'app-bars': require('@/components/AppBar.vue').default
  }
}

</script>
