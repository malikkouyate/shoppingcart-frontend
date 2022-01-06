<template>
  <div>
    <app-bar-list/>
    <div>
      <v-carousel hide-delimiters>
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
        >

          <v-row
              class="fill-height"
              align="center"
              justify="center"
          >
            <div class="text-h2" style="color: white; text-align: center; font-weight: bold ">
               {{ item.texts }}
            </div>
          </v-row>

        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          texts: "Unser Eichhörnchen > Eure Eichhörnchen"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          texts: "Was ein schöner Himmel!"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          texts: "Fly high like a bird!"
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          texts: "Dieser Planet > Erde"
        },
      ],
    }
  },

  components:{
    'app-bar-list': require('@/components/AppBarList.vue').default
  }

}
</script>

