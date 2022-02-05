<template>
    <div>
        <v-app-bar app dark color="deep-purple" width="100vw" elevation="5">
            <v-toolbar-title>{{$route.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            fixed
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

                <v-list-item @click="goTo('/')">

                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item @click="goTo('Camera')"> 
                    <v-list-item-icon>
                        <v-icon>mdi-camera</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Camera</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item @click="goTo('Parameters')"> 
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
                        <v-icon>{{!dark ? "mdi-brightness-6" : "mdi-brightness-4"}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{!dark ? "Light theme" : "Dark theme"}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            
        </v-navigation-drawer> 
    </div>
</template>

<script>

export default {
    props: {
        dark: {
            type: Boolean,
            require : true
        }
    },
    data() {
        return{
            drawer: false,
        }
    },
    methods: {
        toggleTheme(){
            this.$emit('changeTheme', !this.dark)
        },
        goTo(view){
            this.$router.push(view).catch(()=>{});
        },
    }
}
</script>
