<template>
    <v-container fluid id="container">
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

<style lang="scss" scoped>
#container{
    padding: 2vh 8vw 2vh 8vw;
}
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
@keyframes bounce {
    0% ,100%{-webkit-transform: translateY(0);
    transform: translateY(0);
    }
    50%{-webkit-transform: translateY(-10px);
    transform :translateY(-10px);
    }
}
h3{
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    transition-timing-function: linear;
    animation-iteration-count: 1;

}
h3:hover{
    color:rgba(208, 233, 97, 0.8) ;
    cursor: pointer;
    animation-name: bounce;

}
}
</style>