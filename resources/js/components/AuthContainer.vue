<template>
    <v-app>
        <v-navigation-drawer app permanent left v-model="drawer" :mini-variant.sync="mini" v-if="show_nav">
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-list-item-avatar class="my-0">
                        <!--<img src="https://randomuser.me/api/portraits/women/81.jpg">-->
                        <img :src="profilePic">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>Jane Smith</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-btn icon  @click.stop="mini = !mini">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                </v-list-item>
            </template>
            <v-divider/>
            <v-list dense>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="item in items" :key="item.title">
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn block class="error" v-if="!mini" @click="logout">
                        <v-icon left>mdi-logout</v-icon>
                        Logout
                    </v-btn>
                    <v-btn block class="error" v-else icon elevation="4" @click="logout">
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-app-bar color="primary" dark app style="height:64px">
            <v-app-bar-nav-icon @click.stop="navVisibility"/>
            <v-toolbar-title>Title</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>

        <v-footer app  class="indigo lighten-5" dense>
            <h6>All Right Reserve @c-2021</h6>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false,
                drawer: null,
                mini: false,
                show_nav: true,
                items: [
                    { title: 'Home', icon: 'mdi-home-city' },
                    { title: 'My Account', icon: 'mdi-account' },
                    { title: 'Users', icon: 'mdi-account-group-outline' },
                ],
                selectedItem: 0,
            }
        },
        computed: {
            profilePic() {
                return location.origin + '/image/profile.jpg'
            }
        },
        methods: {
            navVisibility() {
                if (this.mini && this.show_nav) {
                    this.mini = false
                } else {
                    this.show_nav = !this.show_nav
                }
            },
            logout() {
                axios.post('/api/logout', { headers: { Authorization: 'Bearer' + this.$store?.state?.users?.auth?.token, 'Content-Type': 'application/json' } }).then(response => {
                    this.$store.commit("UNSET_AUTH")
                    localStorage.removeItem("meta");
                    this.$router.replace({ name: "Login" })
                }).catch(error=>{
                    console.log('error in logout:', error)
                })
            }
        },
        mounted() {
            console.log('store:::', this.$store.state)
            /*setTimeout(() => {
                console.log('ds')
                this.$router.push({ name: 'Login'});
            }, 10000);*/
        }
    }
</script>