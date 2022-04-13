<template>
    <footer class="container">
        <section>
            <h2>ABOUT</h2>
            <ul>
                <li>Who We Are</li>
                <li>Our Staff</li>
                <li>Our Policies</li>
                <li>Testimonials</li>
                <li>Employment</li>
                <li>Latest News</li>
            </ul>
        </section>
        <section>
            <h2>SERVICES</h2>
            <ul>
                <li>Body Treatments</li>
                <li>Bridal</li>
                <li>Facial Treatments</li>
                <li>Hair Removal</li>
                <li>Makeup</li>
                <li>Massage Therapy</li>
                <li>Nails</li>
                <li>Salon</li>
                <li>Spa Packages</li>
            </ul>
        </section>
        <section>
            <h2>CONTACT</h2>
            <ul>
                <li>Contact Us</li>
                <li>Request an Appointment</li>
                <li>Gift Cards</li>
            </ul>
        </section>
        <section>
            <h2>HOURS</h2>
            <ul>
                <li>Mon: Closed</li>
                <li>Tues: 9-6</li>
                <li>Wed: 9-8</li>
                <li>Thurs: 9-8</li>
                <li>Fri: 9-6</li>
                <li>Sat: 9-4</li>
                <li>Sun: Closed</li>
            </ul>
        </section>
        <section id="contact">
            <img src="https://www.centrespa.com/wp-content/themes/bfm-child/img/logo-min.png" alt="spa"/>
            <h3>2276 East Centre Avenue</h3>
            <h3>Portage, MI 49002</h3>
            <h3>269.327.6772</h3>
            <v-btn @click="contactUs">CONTACT US</v-btn>
            <v-btn
                href="https://www.facebook.com/CentreSpaAndWellness/?ref=br_rs"
                target="_blank"
                class="mx-4 white--text"
                icon
                >
                <v-icon size="32px">
                    mdi-facebook
                </v-icon>
            </v-btn>
        </section>
        <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Centre Spa & Wellness All Rights Reserved</strong>
        </v-card-text>    
    </footer>
</template>

<script>
    export default {
        name : "MainFooter",
        methods: {
            contactUs() {
                alert("Would send you to contact page")
            }
        },
    }
</script>

<style scoped>
/*Mobile media rules*/
.container{
    display: flex;
    flex-flow: wrap;
    flex-direction: column;
    text-align: center;
    background-color: rgb(101, 192, 187);
}
h2, h3{
    padding-top: 20px;
    color: white;
}
ul{
    list-style-type: none;
    padding: 0;
}
li{
    color: grey;
    font-size: 1.1em;
}
img{
    padding-top: 2vh;
}

/*Tablet media rules*/
@media only screen and (min-width: 600px) {
    .container{
        flex-direction: row;
        justify-content: space-around;
    }
}
/*Desktop media rules*/
@media only screen and (min-width: 1025px) {
    .container{
        min-width: 100%;
        justify-content: center;
    }
    h2,ul{
        padding-left: 5vw;
    }
    #contact{
        padding-left: 5vw;
    }

}

</style>