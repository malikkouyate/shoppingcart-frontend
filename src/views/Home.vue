<template>

  <app-bars/>
</template>

<script>


  export default {
    name: 'Home',

    components:{
      'app-bars': require('@/components/AppBarStart.vue').default
    }

  }
</script>
