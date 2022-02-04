<template>
    <v-app>
        <AppHeader
        :dark=darkTheme 
        @changeTheme="changeTheme"/>
        <v-sheet :dark=darkTheme min-height="100vh">

        <v-main>
            <router-view/>
        </v-main>
        
        </v-sheet>
    </v-app>
</template>

<script>
    import AppHeader from "@/components/AppHeader";

export default {
    components: {
        AppHeader
    },
    data(){
        return {
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
        changeTheme(){
            this.darkTheme = !this.darkTheme;
        }
    }
};
</script>
