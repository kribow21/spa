<template>
    <v-carousel
    cycle
    hide-delimiters
    :show-arrows="false"
    class="carousel"
    >
        <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        height="100%"
        >
        <v-sheet
        >
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
                <div class="text-h3 text-center" id="banTitle">
                    {{ item.title }}
                </div>
                <div class="text-h6 text-center" id="banText">
                    {{ item.subText }}
                </div>
            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        name : "MainBanner",
            data () {
        return {
            items: [
            {
                src:"https://www.centrespa.com/wp-content/uploads/centre-spa-wellness-banner1-min_1920x812_acf_cropped.jpg",
                title:"Find Your Centre with Massage Threapy",
                subText: "Massage Threapy is an excellent way to improve your overall health and wellness"
            },
            {
                src:"https://www.centrespa.com/wp-content/uploads/centre-spa-wellness-banner2-min_1920x812_acf_cropped.jpg",
                title:"Enjoy a Facial Treatment at Our Day Spa",
                subText: "Improve the radience and smoothness of your skin with a facial treatment"
            },
            {
                src:"https://www.centrespa.com/wp-content/uploads/centre-spa-wellness-salon-services-min.jpg",
                title:"Enchance Your Look with Our Salon Services",
                subText: "Wether you desire a cut,color,or stylying, our talented hair stylists have you covered"

            },
        ],
        }
        },
    }

</script>

<style scoped>
/*Mobile media rules*/
#banTitle{
    position: absolute;
    margin-top:70vh;
    color: white;
    text-shadow: 3px 3px grey;
}
#banText{
    position: absolute;
    margin-top: 95vh;
    color: white;
    text-shadow: 2px 2px grey;
}
.carousel{
    padding-top: 9.5vh;
}
/*Desktop media rules*/
@media only screen and (min-width: 1025px) {
#banTitle{
    margin-top:80vh;
}
#banText{
    margin-top:90vh;
}
.carousel{
    padding-top: 8.7vh;
}
}
</style>