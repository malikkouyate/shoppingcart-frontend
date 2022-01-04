<template>
  <div>
    <app-bar-list/>
    <p style="position: center">This is an about Page</p>
  </div>
</template>

<script>
export default {

  components:{
    'app-bar-list': require('@/components/AppBarList.vue').default

  }
}
</script>
