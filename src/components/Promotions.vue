<template>
    <div>
        <v-carousel
        cycle
        id="carousel"
        hide-delimiters
        touchless
        :show-arrows="false"
    >
        <v-carousel-item>
        <v-sheet class="slide">
            <v-container>
                <v-row justify="center">
                    <v-col cols="6">
                        <v-img
                        class="img"
                        src="https://www.centrespa.com/wp-content/uploads/Depositphotos_25639505_s_720x465_acf_cropped.jpg">
                        </v-img>
                    </v-col>
                    <v-col cols="6">
                        <h3>Features and Specials</h3>
                        <h1>Luxury Day Spa</h1>
                        <p>Enjoy the relaxation and overall feeling of wellness that comes with a visit to Centre Spa’s luxury day spa in Portage. From our high performance facials and exfoliating body treatments to massage therapy, manicures and pedicures, the team at Centre Spa & Wellness will make your day spa experience one to remember.</p>
                        <br><p>Click learn more below to view our luxurious spa packages!</p>
                        <v-btn outlined color="white" @click="learnMore">Learn More</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
        </v-carousel-item>
        <v-carousel-item>
        <v-sheet class="slide">
            <v-container fluid>
                <v-row>
                    <v-col cols="6">
                        <v-img
                        class="img"
                        src="https://www.centrespa.com/wp-content/uploads/bridal-packages-min_720x465_acf_cropped.jpg">
                        </v-img>
                    </v-col>
                    <v-col cols="6">
                        <h3>Features and Specials</h3>
                        <h1>Bridal Packages</h1>
                        <p>The team at Centre Spa & Wellness has years of experience providing brides with bridal hair and bridal makeup services in Kalamazoo and beyond. We know how important your wedding day is and want to help you make sure it is picture perfect. Available at our salon and on location, our hair and makeup artists will work with you to come up with a look that fits you perfectly and lasts all day and night.</p>
                        <br><p>Click learn more below to view our bridal services page!</p>
                        <v-btn outlined color="white" @click="learnMore">Learn More</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
    </div>
</template>

<script>
    export default {
        name : "Promotions",
            data () {
                return {
                }
                },
            methods: {
                learnMore() {
                    alert("Would send you to services page")
                }
            },
    }
</script>

<style scoped>
/*Mobile media rules*/
.slide{
    background-color: rgb(101, 192, 187);
    color: white;
    font-size: .8em;
}
h1{
    font-size: 1.4em;
}
.img{
    height: 100%;
    padding: 15px;
}
/*Tablet media rules*/
@media only screen and (min-width: 600px) {
    .slide{
        font-size: .8em;
    }
    h1{
        font-size: 1.6rem;
    }
}
/*Desktop media rules*/
@media only screen and (min-width: 1025px) {
        .slide{
        font-size: 1em;
    }
}
</style>