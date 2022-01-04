<template>
  <div class="pa-10">
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <app-bar-start/>
      <v-text-field
          v-model="firstname"
          :counter="15"
          :rules="firstnameRules"
          label="First Name"
          required
      ></v-text-field>

      <v-text-field
          v-model="lastname"
          :counter="15"
          :rules="lastnameRules"
          label="Last Name"
          required
      ></v-text-field>

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
          @click:append="show1 = !show1"
      ></v-text-field>


      <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
      ></v-checkbox>

      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"

      >
        Register
      </v-btn>

      <v-btn
          color="error"
          class="mr-4"
          @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
          color="warning"
          @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
  </div>

</template>

<script>
export default {
  data: () => ({
    valid: true,
    firstname: '',
    firstnameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 15) || 'Name must be less than 10 characters',
    ],
    lastname: '',
    lastnameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 15) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    show1: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
    },

    checkbox: false,
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
  components:{
    'app-bar-start': require('@/components/AppBarStart.vue').default

  }
}
</script>
