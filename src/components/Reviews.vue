<template>
    <div id="container">
        <h1 id="title">WHAT CLIENTS SAY ABOUT US</h1>
        <div id="box">
            <div class="review">
            <p>"I have been massaged, polished, wrapped and buffed to silky smooth skin. Thanks to Jessica and Trudy!"</p>
            <h3>~Dana</h3>
        </div>
        <div class="review">
            <p>"Jessica is AMAZING!! My entire body is relaxed after my 90 minute massage! It doesn't get any better than that!!"</p>
            <h3>~Lisa</h3>
        </div>
        </div>
        <v-container>
            <v-row justify="center">
                <v-btn id="btn" @click="reviews">SEE ALL REVIEWS</v-btn>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name : "Reviews",
        methods: {
            reviews() {
                alert("Would send you to about page")
            }
        },
    }
</script>

<style scoped>
#container{
    background-color: rgb(223, 223, 223);
    padding: 3vh 2vw 3vh 2vw;
}
#title{
    display: block;
    text-align: center;
    color: rgb(101, 192, 187);
}
#box{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.review{
    justify-content: center;
    color: grey;
}
#btn{
    background-color:rgba(198, 226, 70, 0.8);
    color: white;
}
</style>