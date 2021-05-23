<template>
    <v-app>
        <!--<v-navigation-drawer app style="background-color:green">
           
          <div>hello</div>
          <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red lighten-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Click Me
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="headline grey lighten-2">
                  Privacy Policy
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                  >
                    I accept
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-navigation-drawer>-->
        <v-navigation-drawer
          app
          permanent
          left
          v-model="drawer"
          :mini-variant.sync="mini"
          v-if="show_nav"
        >
          <template v-slot:prepend>
            <v-list-item two-line>
              <v-list-item-avatar class="my-0">
                <img src="https://randomuser.me/api/portraits/women/81.jpg">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Jane Smith</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </v-list-item-content>

              <v-btn
                icon
                @click.stop="mini = !mini"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>

            </v-list-item>
          </template>

          <v-divider/>

          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        

        <!--<v-app-bar app style="background-color:blue">
          <div>hello</div>
        </v-app-bar>-->
        <v-app-bar
          color="primary"
          dark
          app
          style="height:64px"
        >
          <v-app-bar-nav-icon @click.stop="navVisibility"></v-app-bar-nav-icon>

          <v-toolbar-title>Title</v-toolbar-title>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main  style="background-color:pink">
          <div>hello</div>

          <!-- Provides the application the proper gutter -->
          <v-container fluid  style="background-color:yellow">
            <div>hello</div>

            <!-- If using vue-router 
            <router-view></router-view>-->
            <router-view  />
          </v-container>
        </v-main>

        <v-footer app  class="indigo lighten-5" dense>
          <h6>All Right Reserve @c-2021</h6>
          <!-- -->
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
      }
    },
    methods: {
      navVisibility() {
        if (this.mini && this.show_nav) {
          this.mini = false
        } else {
          this.show_nav = !this.show_nav
        }
      }
    }
  }
</script>