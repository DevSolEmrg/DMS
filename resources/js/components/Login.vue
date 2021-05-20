<template>
    <!--<div> LOGIN PAGE - Hello {{ message }} <router-link to="/user/dashboard">Dashboard</router-link> </div>-->
    <v-app>
        <v-main>
            <v-container fluid fill-height>
                <v-layout class="align-center justify-center">
                    <v-card width="400px">
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Login</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <validation-observer ref="observer" v-slot="{ invalid }">
                                <form @submit.prevent="submit">
                                    <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                                        <v-text-field
                                            v-model="email"
                                            :error-messages="errors"
                                            label="E-mail"
                                            required
                                        />
                                    </validation-provider>
                                    <validation-provider v-slot="{ errors }" name="password" rules="required">
                                        <v-text-field
                                            v-model="password"
                                            type="password"
                                            :error-messages="errors"
                                            label="Password"
                                            required
                                        />
                                    </validation-provider>
                                    <v-card-actions>
                                        <v-row align="center" justify="end">
                                            <v-btn class="mr-2" @click="clear" v-text="'clear'"/>
                                            <v-btn
                                                color="primary"
                                                type="submit"
                                                :disabled="invalid"
                                                justify="end"
                                                @click="submit"
                                                v-text="'submit'"
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
      password: 'dsdgs',
      email: 'sdgsdg@gmail.com',
    }),

    methods: {
      submit () {
        //this.$refs.observer.validate()
        console.log(this.$router)
        this.$router.push({ path: "/user/dashboard" })
        //this.$router.replace('/user/dashboard')
      },
      clear () {
        this.email = ''
        this.password = ''
        this.$refs.observer.reset()
      },
    },
  }
</script>

<style>

</style>