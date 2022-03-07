import Vue from 'vue';
import colors from 'vuetify/lib/util/colors'
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
            primary: colors.green.darken1, //#D4E157
            secondary: colors.cyan.darken2, // #0097A7
            accent: colors.grey.lighten2, // #E0E0E0
            },
        },
        },
        breakpoint: {
            mobileBreakpoint: 'xs'
            },
});
