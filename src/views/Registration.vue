<template>
  <div class="pa-10">
    <v-form
        ref="form"
        v-model="valid"
        value
    >
      <app-bar-start/>
      <v-text-field
          v-model="firstname"
          :counter="30"
          :rules="firstnameRules"
          label="First Name"
          required
      ></v-text-field>

      <v-text-field
          v-model="lastname"
          :counter="30"
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
          required
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
          @click="validate;addUser();"

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
          @click="resetValidation;"
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
      v => !!v || 'First Name is required',
      v => (v && v.length <= 30) || 'First Name must be less than 30 characters',
    ],
    lastname: '',
    lastnameRules: [
      v => !!v || 'Last Name is required',
      v => (v && v.length <= 30) || 'Last Name must be less than 30 characters',
    ],
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
    addUser(){
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + 'api/v1/registration'


      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        firstName: this.firstname,
        lastName: this.lastname,
        email: this.email,
        password: this.password
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));

      this.firstname = ''
      this.lastname = ''
      this.email = ''
      this.password = ''


    }
  },
  components:{
    'app-bar-start': require('@/components/AppBarStart.vue').default

  }
}
</script>

<!--ssdfsdfsd-->
