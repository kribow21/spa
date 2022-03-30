<template>
    <div id="container">
        <h3 id="subTitle">LATEST</h3>
        <h1 id="title">ANNOUNCEMENTS</h1>
        <p>Our website has been completely redone! We hope you find it attractive, user-friendly, and informational.</p>
        <p>Come join our team! We are looking for a Spa Coordinator and a Licensed Massage Therapist</p>
        <hr>
    </div>
</template>

<script>
    export default {
        name : "Announcements"
    }
</script>

<style scoped>
#container{
    background-color:rgba(198, 226, 70, 0.8) ;
}
#subTitle{
    display: block;
    color:rgba(158, 177, 75, 0.8) ;
    text-align: center;
    padding-top: 1.5vh;
}
#title{
    display: block;
    text-align: center;
    color: white;
    padding-bottom: 2vh;
}
p{
    padding: 0 3vw 2vh 3vw;
    font-size: 1.4em;
    color: white;
}
</style>