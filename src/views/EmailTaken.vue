<template>

  <div>

    <div
        class="email-text">

      <div>
        <v-icon
            class="email-taken-icon"
            size="100px">

          mdi-account-group
        </v-icon>

      </div>


      <h4 style="color: #a22626; font-weight: normal; text-align: center">
        It seems like your E-Mail is already taken :(  Please login with this E-Mail or try to register with another E-Mail.
      </h4>
    </div>

<div class="email-taken-icon">
  <v-btn icon to="/registration">
    <v-icon
        class="back-button"
        size="75px">

      mdi-keyboard-return

    </v-icon>
  </v-btn>

  <v-btn icon to="/login">
    <v-icon
        class="login-button"
        size="75px">

      mdi-login-variant

    </v-icon>
  </v-btn>
</div>



  </div>

</template>

<script>
export default {
  name: "EmailTaken"
}
</script>

<style lang="sass">

.email-text
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)



.back-button
  position: absolute
  left: 0%
  top: 75%
  transform: translate(-350%,-70%)

.login-button
  position: absolute
  right: 0%
  top: 75%
  transform: translate(350%,-70%)


.email-taken-icon
  position: absolute
  left: 50%
  top: 75%
  transform: translate(-50%, -25%)

</style>
