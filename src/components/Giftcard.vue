<template>
    <div id="container">
        <div id="text">
            <h1>Centre Spa Gift Card</h1>
            <h3>Give the gift of relaxation with a gift card to Centre Spa!</h3>
        </div>
        <v-btn id="btn">Purchase Now</v-btn>
    </div>
</template>

<script>
    export default {
        name : "Giftcard"
    }
</script>

<style scoped>
#container{
    background-color: rgb(101, 192, 187);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 3vh 2vw 3vh 2vw;
}
#btn{
    background-color:rgba(198, 226, 70, 0.8);
    color: white;
}
#text{
    color: white;
}
</style>