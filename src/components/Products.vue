<template>
    <div>
        <main>
            <h1>PRODUCTS WE USE</h1>
            <p>From Aveda to Moroccan Oil, Pevonia and, Bumble and bumble, we have the salon and spa products that you need to maintain your level of luxury in your own home. Whether you’re looking for the best hair or skin care products,
            the team at Centre Spa & Wellness can work with you to help you find the products that you need to “find your Centre."</p>
        </main>
        <div class="container">
            <div class="product">
                <a href="https://www.davines.com/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/davines-min_500x300_acf_cropped.jpg" alt="davines">
                </a>
            </div>
            <div class="product">
                <a href="https://ecocandleco.com/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/eco-candle-co-min_500x300_acf_cropped.jpg" alt="soy wax candles">
                </a>
            </div>
            <div class="product">
                <a href="https://www.ybskin.com/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/youngblood-min_500x300_acf_cropped.jpg" alt="youngblood mineral cosmetics">
                </a>
            </div>
            <div class="product">
                <a href="https://www.redken.com/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/redken-min_500x300_acf_cropped.jpg" alt="redkin">
                </a>
            </div>
            <div class="product">
                <a href="https://www.colorwowhair.com/uk/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/colorwow-min_500x300_acf_cropped.jpg" alt="colorwow">
                </a>
            </div>
            <div class="product">
                <a href="https://www.moroccanoil.com/ca_en" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/moroccan-oil-min_500x300_acf_cropped.jpg" alt="moroccanoil">
                </a>
            </div>
            <div class="product">
                <a href="https://pevoniaglobal.com/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/pevonia-min_500x300_acf_cropped.jpg" alt="pervonia skincare">
                </a>
            </div>
            <div class="product">
                <a href="https://www.aveda.com/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/aveda-min_500x300_acf_cropped.jpg" alt="aveda">
                </a>
            </div>
            <div class="product">
                <a href="https://cnd.com/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/cnd-min_500x300_acf_cropped.jpg" alt="hands feet beauty">
                </a>
            </div>
            <div class="product">
                <a href="https://www.bumbleandbumble.ca/" target="blank">
                <img src="https://www.centrespa.com/wp-content/uploads/bumble-and-bumble_500x300_acf_cropped.jpg" alt="bumble and bumble">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Products"
    }
</script>

<style scoped>
main{
    padding: 2vh 3vw 0 3vw;
}
h1{
    display: block;
    text-align: center;
    color: rgb(101, 192, 187);
}
p{
    color: grey;
    padding-top: 1vh;
}
.container{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    row-gap: 12px;
}
/*Mobile media rules*/
img{
    width: 45vw;
    border: solid grey .5mm;
}
/*Tablet media rules*/
@media only screen and (min-width: 600px) {
    img{
        width: 30vw;
    }
}
/*Desktop media rules*/
@media only screen and (min-width: 1025px) {
    img{
        width: 20vw;
    }
    .product{
        overflow: visible;
    }
    img{
        transition: transform .5 ease;
    }
    img:hover{
        transform: scale(1.1);
    }
}
</style>