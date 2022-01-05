<template>

  <div>
    <v-navigation-drawer
        v-model="drawer"
        app
        bottom
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/login">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

          <v-list-item to="/registration">
            <v-list-item-title>Registration</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://picsum.photos/1920/1080?random"
        scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="v-toolbar__title v-app-bar-title" style="width: 220px;">
        <div class="v-app-bar-title__content" style="width: 200px;">DripList</div>
        <div class="v-app-bar-title__placeholder" style="visibility: hidden;">DripList</div>
      </div>

      <v-spacer></v-spacer>


    </v-app-bar>
  </div>

</template>

<script>
export default {
  name: 'AppBarStart',
  data: () => ({
    drawer: null

  })
}
</script>

<style scoped>

</style>
