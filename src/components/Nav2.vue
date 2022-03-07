<template>
    <div>
        <v-app-bar app dark color="primary" class="hidden-md-and-down" height="100">
            <div class="d-flex align-center">
                <v-img
                alt="Centre Spa"
                class="shrink mt-1"
                contain
                min-width="100"
                src="https://www.centrespa.com/wp-content/themes/bfm-child/img/logo-min.png"
                width="300"
                />
            </div>
            <v-spacer></v-spacer>
            <v-toolbar-items>
            <v-btn
            v-for="item in nav"
            :key="item.icon"
            to="#"
            :title="item.title"
            flat
            >{{ item.text }}</v-btn>
            </v-toolbar-items>
        </v-app-bar>
        
        <v-app-bar app dark color="primary" class="hidden-lg-and-up" height="100">
            <div class="d-flex align-center">
                <v-img
                alt="Centre Spa"
                class="shrink mt-1"
                contain
                min-width="100"
                src="https://www.centrespa.com/wp-content/themes/bfm-child/img/logo-min.png"
                width="250"
                />
            </div>
            <v-spacer></v-spacer>

            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-top-transition">
            <v-app-bar-nav-icon dark slot="activator"></v-app-bar-nav-icon>
            <v-card>
                <v-toolbar flat color="primary">
                <v-spacer></v-spacer>
                <v-btn icon @click.native="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
                </v-toolbar>

                <v-list>
                <v-list-tile
                    v-for="(item, index) in nav"
                    :key="index"
                    to="#"
                >
                    <v-list-tile-action>
                    <v-icon v-if="item.icon">{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                    <v-list-tile-title :title="item.title">{{ item.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                </v-list>
            </v-card>
            </v-dialog>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name : "Nav2",
        data () {
    return {
        dialog: false,
        nav: [
            {
            icon: 'home',
            text: 'Home',
            title: 'Back to Home page',
            active: true
            },
            {
            icon: 'info',
            text: 'About',
            title: 'About this demo',
            active: false
            },
            {
            icon: 'assignment_turned_in',
            text: 'Todos',
            title: 'Some stuff that needs doing',
            active: false
            },
            {
            icon: 'email',
            text: 'Contact',
            title: 'Our Contact info',
            active: false
            }
        ]
        }
        }
    }
</script>

<style lang="scss" scoped>

</style>