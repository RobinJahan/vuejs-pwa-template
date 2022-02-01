<template>
  <v-app>
    <v-app-bar app dark dense color="deep-purple">
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
        
    <v-sheet :dark=darkTheme min-height="100vh">
      <v-navigation-drawer
        v-model="drawer"
          absolute
          right
          temporary
          dark>
          <v-list-item>
              <v-list-item-content>
                  <v-list-item-title class="text-h6">TEMPLATE-PWA</v-list-item-title>
                  <v-list-item-subtitle>Menu</v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense nav>

            <v-list-item @click="goHome">

              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="goParameters"> 
              <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Parameters</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list>

          <v-divider></v-divider>

          <v-list dense nav>
            <v-list-item @click="toggleTheme">
              <v-list-item-icon>
                <v-icon>{{!darkTheme ? "mdi-brightness-6" : "mdi-brightness-4"}}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                  <v-list-item-title>{{!darkTheme ? "Light theme" : "Dark theme"}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
            
        </v-navigation-drawer>

      <v-main>
        <router-view/>
      </v-main>
      
    </v-sheet>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data(){
    return {
      drawer: false,
      darkTheme: false
    }
  },
  mounted() {
    if (localStorage.darkTheme) {
      this.darkTheme = localStorage.darkTheme === "true";
    }
  },
  watch: {
    darkTheme(newTheme) {
      localStorage.darkTheme = newTheme;
    }
  },
  methods: {
    toggleTheme(){
      this.darkTheme = !this.darkTheme;
    },
    goHome(){
      this.$router.push("/").catch(()=>{});
    },
    goParameters(){
      this.$router.push("Parameters").catch(()=>{});
    }

  }
};
</script>

<style>
html {
    overflow: hidden !important;
}
</style>
