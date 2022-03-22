<template>
    <header>
        <nav>
            <div class="branding">
                <img src="https://www.centrespa.com/wp-content/themes/bfm-child/img/logo-min.png" alt="spa"/>
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name : 'Home'}">Home</router-link></li>
                <li><router-link class="link" :to="{ name : ''}">About</router-link></li>
                <li><router-link class="link" :to="{ name : ''}">Location</router-link></li>
                <li><router-link class="link" :to="{ name : ''}">Contact</router-link></li>
            </ul>
            <!-- <v-btn href="tel:269-327-6772" id="callBtn" >CALL TODAY 269.327.6772</v-btn> -->
            <div class="icon">
                <v-btn @click="toggleMobileNav" class="menu" v-show="mobile" :class="{'icon-active' : mobileNav}"><v-icon >mdi-menu</v-icon></v-btn>
            </div>
            <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li><router-link class="link" :to="{ name : 'Home'}">Home</router-link></li>
                <li><router-link class="link" :to="{ name : ''}">About</router-link></li>
                <li><router-link class="link" :to="{ name : ''}">Location</router-link></li>
                <li><router-link class="link" :to="{ name : ''}">Contact</router-link></li>
            </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
    export default {
        name : "Nav",
        data() {
            return {
                scrollPosition: null,
                mobile: null,
                mobileNav: null,
                windowWidth: null
            }
        },
        created () {
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
        },
        methods: {
            toggleMobileNav() {
                this.mobileNav  = !this.mobileNav
            },
            checkScreen(){
                this.windowWidth = window.innerWidth;
                if(this.windowWidth <= 750){
                    this.mobile = true;
                    return
                }
                this.mobile = false;
                this.mobileNav = false;
                return;
            }
        },
    }
</script>

<style lang="scss" scoped>
header{
    background-color:rgba(208, 233, 97, 0.8) ;
    width: 100%;
    z-index: 99;
    position: fixed;
    color: white;

    nav{
    display: flex;
    position: relative;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media(min-width: 1140px){
        max-width: 1140px;
    }

    ul,
    .link {
    font-weight: 500;
    color: white;
    list-style: none;
    text-decoration: none;
    }
    li{
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
    }
    .link{
    font-size: 14px;
    transition: .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;

    &:hover {
        color: grey;
        border-collapse: grey;
    }
    }
    .branding{
        display: flex;
        align-items: center;

        img{
            width: 275px;
            transition: .5s ease all;
        }
    }
    .navigation{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
    }
    .icon{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 1px;
    height: 100%;

        .menu{
        cursor: pointer;
        transition: .8s ease all;
        }
    }
    .icon-active{
        transform: rotate(180deg);
    }
    .dropdown-nav{
        display: flex;
        flex-direction: column;
        position: fixed;
        width :100%;
        max-width: 250px;
        height: 100%;
        background-color:white ;
        top: 10.5vh;
        right: 0;

        li{
            margin-left: 0;
            .link{
                color: black;
            }
        }
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition: 1s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
        transform: translateX(250px);
    }
    .mobile.nav-enter-to{
        transform: translateX(0);
    }

    }
}
</style>