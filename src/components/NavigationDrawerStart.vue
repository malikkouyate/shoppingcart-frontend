<template>
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

        <v-list-item>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>

        <v-list-item to="/registration">
          <v-list-item-title>Registration</v-list-item-title>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawerStart"
}
</script>

<style scoped>

</style>
