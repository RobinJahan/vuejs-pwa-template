<template>
    <v-container class="loginContainer">

        <v-card
        width="400"
        outlined
        elevation="4">

            <v-app-bar dark color="deep-purple" width="100%" elevation="5">
                <v-toolbar-title>Login</v-toolbar-title>
            </v-app-bar>

            <v-form
            class="mx-6 pa-6"
            ref="form"
            v-model="valid"
            lazy-validation
            >

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>

            <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
            ></v-text-field>

            <v-btn
            :disabled="!valid"
            color="purple accent-1"
            class="mr-4"
            @click="validate"
            >Validate</v-btn>
        </v-form>

        </v-card>
        
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style scoped>
    .loginContainer{
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }
</style>