<template>
  <div class="pa-10">
    <v-form
        ref="form"
        v-model="valid"
        value
    >
      <app-bar-start/>


      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          required
          @click:append="show1 = !show1"
      ></v-text-field>





      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
          to="/shoppinglist"
      >
        Sign in
      </v-btn>

      <v-btn
          color="error"
          class="mr-4"
          @click="reset"
      >
        Reset Form
      </v-btn>


    </v-form>
  </div>

</template>

<script>
export default {
  name: "Login",
  data: () => ({

    valid:true,

    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    show1: false,
    password:'',
    rules: {
      required: value => !!value || 'Password is required.',
      min: v => v.length >= 8 || 'Min 8 characters',
    },
  }),

  methods:{
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    }
  },
  components:{
    'app-bar-start': require('@/components/AppBarStart.vue').default

  }
}
</script>

<style scoped>

</style>
