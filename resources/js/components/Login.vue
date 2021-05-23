<template>
    <!--<div> LOGIN PAGE - Hello {{ message }} <router-link to="/user/dashboard">Dashboard</router-link> </div>-->
    <v-app>
        <v-main>
            <v-container fluid fill-height class="indigo lighten-5">
                <v-layout class="align-center justify-center">
                    <v-card width="500px">
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Login</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <validation-observer ref="observer" v-slot="{ invalid }">
                                <form @submit.prevent="submit">
                                    <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                                        <v-text-field
                                            class="mt-4"
                                            v-model="email"
                                            :error-messages="errors"
                                            label="E-mail | Username"
                                            required
                                            clear-icon="mdi-close-circle"
                                            clearable
                                            prepend-inner-icon="mdi-account-circle"
                                            outlined
                                        />
                                    </validation-provider>
                                    <validation-provider v-slot="{ errors }" name="password" rules="required|min:8">
                                        <v-text-field
                                            class="mb-4"
                                            v-model="password"
                                            :error-messages="errors"
                                            label="Password"
                                            required
                                            clear-icon="mdi-close-circle"
                                            clearable
                                            prepend-inner-icon="mdi-shield-key"
                                            outlined
                                            hint="At least 8 characters"
                                            counter
                                            :append-icon="show_pass ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show_pass ? 'text' : 'password'"
                                            @click:append="show_pass = !show_pass"
                                        />
                                    </validation-provider>
                                    <v-card-actions>
                                        <v-row align="center" justify="end">
                                            <v-btn class="mr-2" @click="guest" v-text="'guest area'"/>
                                            <v-btn class="mr-2" @click="clear" v-text="'clear'"/>
                                            <v-btn
                                                color="primary"
                                                type="submit"
                                                :disabled="invalid"
                                                justify="end"
                                                @click="submit"
                                                v-text="'login'"
                                            />
                                        </v-row>
                                    </v-card-actions>
                                </form>
                            </validation-observer>
                        </v-card-text>
                    </v-card>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
  import {  ValidationObserver, ValidationProvider } from 'vee-validate'

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      password: 'dsdgsdsf',
      email: 'sdgsdg@gmail.com',
      show_pass: false
    }),

    methods: {
      submit () {
        //this.$refs.observer.validate()
        console.log(this.$router)
        this.$router.push({ name: "Dashboard" })
        //this.$router.replace('/user/dashboard')
      },
      clear () {
        this.email = ''
        this.password = ''
        this.$refs.observer.reset()
      },
      guest() {
          this.$router.push({ name: "Guest" })
      }
    },
  }
</script>

<style>

</style>