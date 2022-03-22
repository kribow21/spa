<template>
    <v-container fluid>
        <v-row>
            <v-col align="center">
                <v-img
                class="icon"
                    src="../assets/flower.png">
                </v-img>
                <h3>Body Treatments</h3>
            </v-col>
            <v-col align="center">
                <v-img
                class="icon"
                    src="../assets/facial-treatment.png">
                </v-img>
                <h3>Facial Treatments</h3>
            </v-col>
            <v-col align="center">
                <v-img
                class="icon"
                    src="../assets/massage.png">
                </v-img>
                <h3>Massage Threapy</h3>
            </v-col>
            <v-col align="center">
                <v-img
                class="icon"
                    src="../assets/scissors.png">
                </v-img>
                <h3>Salon Services</h3>
            </v-col>
            <v-col align="center">
                <v-img
                class="icon"
                    src="../assets/candle.png">
                </v-img>
                <h3>Spa Packages</h3>
            </v-col>
            <v-col align="center">
                <v-img
                class="icon"
                    src="../assets/hand.png">
                </v-img>
                <h3>Contact Us</h3>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name : "IconBanner"
    }
</script>

<style scoped>
/*Mobile media rules*/
.icon{
    margin: 2vh;
    width: 24vw;
}
h3{
    color: grey;
    text-transform: uppercase;
}
/*Tablet media rules*/
@media only screen and (min-width: 600px) {
    .icon{
    max-width: 15vw;
}
}
/*Desktop media rules*/
@media only screen and (min-width: 1025px) {
.icon{
    max-width: 8vw;
}
}
</style>