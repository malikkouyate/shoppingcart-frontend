<template>

<div>

  <div
  class="email-text">

    <v-icon
        size="100px">

      mdi-lock-clock

    </v-icon>

    Click the link in the E-Mail within the next 10 minutes to activate your account

  </div>

  <div class="home-button">
    <v-btn icon to="/">
      <v-icon size="50px" color="black">mdi-home</v-icon>
    </v-btn>
  </div>

</div>

</template>

<script>
export default {
  name: "EmailValidationPage"
}
</script>

<style lang="sass">

.email-text
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5

.home-button
  position: absolute
  left: 50%
  top: 75%
  transform: translate(-50%,-70%)
  opacity: 0.5

</style>
<!--asdasdas-->
