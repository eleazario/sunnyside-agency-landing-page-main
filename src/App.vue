<template>
    <header class="nav">
        <NavBar
            @onHamburgerMenu="hamburgerMenu"
            :navBackground="navBackground"
        />
        <NavMenu :class="{ hidden: navMenu }"/>
    </header>
    <div id="section-0">
        <h1>We Are Creatives</h1>
        <img src="./images/icon-arrow-down.svg" alt="">
    </div>
    <div id="section-1">
        <SectionOne
            :imageMobile="`bg-[url('/src/images/mobile/image-transform.jpg')]`"
            :imageDesktop="`bg-[url('/src/images/desktop/image-transform.jpg')]`"
            :title="'Transform your brand'"
            :description="'We are all full-service creative agency specializing in helping brands grow fast. Engage your client through compelling visual that do most of the marketing for you.'"
            :first="true"
            :color="'yellow'"
        />
        <SectionOne
            :imageMobile="`bg-[url('/src/images/mobile/image-stand-out.jpg')]`"
            :imageDesktop="`bg-[url('/src/images/desktop/image-stand-out.jpg')]`"
            :title="'Stand out to the right audience'"
            :description="'Using a collaborative formula of designers, reasearchers, photographers, videographers, and copywriters, we\'ll build and extend your brand in digital places.'"
            :color="'soft-red'"
        />
    </div>
    <div id="section-2">
        <SectionTwo
            :imageMobile="`bg-[url('/src/images/mobile/image-graphic-design.jpg')]`"
            :imageDesktop="`lg:bg-[url('/src/images/desktop/image-graphic-design.jpg')]`"
            :title="'Graphic Design'"
            :description="'Great design makes your memorable. We deliver artwork that underscores your brand message and capture potential clients\' attention.'"
        />
        <SectionTwo
            :imageMobile="`bg-[url('/src/images/mobile/image-photography.jpg')]`"
            :imageDesktop="`lg:bg-[url('/src/images/desktop/image-photography.jpg')]`"
            :title="'Photography'"
            :description="'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'"
        />
    </div>
    <div id="section-3">
        <h3 class="section-3-title">Client Testimonials</h3>
        <div class="grid lg:grid-cols-3">
            <SectionThree
                :portrait="require('@/images/image-emily.jpg')"
                :testimony="'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'"
                :name="'Emily R.'"
                :description="'Marketing Director'"
            />
            <SectionThree
                :portrait="require('@/images/image-thomas.jpg')"
                :testimony="'Sunnyside\'s enthusiasm coupled with their keen interest in our brand\'s success made it a satisfying and enjoyable experience.'"
                :name="'Thomas S.'"
                :description="'Chief Operating Officer'"
            />
            <SectionThree
                :portrait="require('@/images/image-jennie.jpg')"
                :testimony="'Incredible result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'"
                :name="'Jennie F.'"
                :description="'Business Owner'"
            />
        </div>
    </div>
    <div id="section-4">
        <img class="lg:hidden" src="./images/mobile/image-gallery-milkbottles.jpg" alt="">
        <img class="lg:hidden" src="./images/mobile/image-gallery-orange.jpg" alt="">
        <img class="lg:hidden" src="./images/mobile/image-gallery-cone.jpg" alt="">
        <img class="lg:hidden" src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="">

        <img class="hidden lg:block" src="./images/desktop/image-gallery-milkbottles.jpg" alt="">
        <img class="hidden lg:block" src="./images/desktop/image-gallery-orange.jpg" alt="">
        <img class="hidden lg:block" src="./images/desktop/image-gallery-cone.jpg" alt="">
        <img class="hidden lg:block" src="./images/desktop/image-gallery-sugarcubes.jpg" alt="">
    </div>
    <footer>
        <img src="./images/logo-green.svg" alt="">
        <div class="footer-menu">
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Projects</a>
        </div>
        <div class="footer-social">
            <a href=""><font-awesome-icon :icon="['fab', 'square-facebook']" /></a>
            <a href=""><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href=""><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href=""><font-awesome-icon :icon="['fab', 'pinterest']" /></a>
        </div>
    </footer>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NavMenu from './components/NavMenu.vue'
import SectionOne from './components/SectionOne.vue'
import SectionTwo from './components/SectionTwo.vue'
import SectionThree from './components/SectionThree.vue'

export default {
    name: 'App',
    data(){
        return {
            navMenu: true,
            navBackground: false
        }
    },
    components: {
        NavBar,
        NavMenu,
        SectionOne,
        SectionTwo,
        SectionThree
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        hamburgerMenu(){
            this.navMenu = !this.navMenu
        },
        handleScroll(){
            let scrollValue = window.scrollY
            if(scrollValue>=600){
                this.navBackground = true
            }
            else
                this.navBackground = false
            console.log(this.navBackground);
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&display=swap');

html, body {
    @apply m-0 h-full
}

#app {
    @apply 
        h-full
        relative
}

.nav {
    @apply
        fixed
        w-full
}

#section-0 {
    @apply
        bg-[url('/src/images/mobile/image-header.jpg')]
        lg:bg-[url('/src/images/desktop/image-header.jpg')]
        bg-bottom
        bg-cover
        h-[538px]
        lg:h-[700px]
        pt-32
        lg:pt-40
}

#section-0 > h1 {
    font-family: 'Fraunces', serif;
    @apply
        text-[42px]
        font-[900]
        text-white
        text-center
        tracking-widest
        uppercase
        mb-8
}

#section-0 > img {
    @apply
        mx-auto
}

#section-1 {
    @apply
        grid
        lg:grid-cols-2
}

#section-2 {
    @apply
        grid
        lg:grid-cols-2
}

#section-3 {
    @apply
        text-center
        pt-16
        pb-12
        lg:py-32
        lg:px-28
}

#section-3 > h3 {
    @apply
        tracking-[0.2em]
        uppercase
        text-lg
        text-grayish-blue
        mb-16
}

#section-4 {
    @apply
        grid
        grid-cols-2
        lg:grid-cols-4
}

footer {
    @apply
        bg-[#90d4c5]
        py-16
}

footer > img {
    @apply
        mx-auto
        mb-10
        w-44
}

.footer-menu {
    @apply
        flex
        mx-auto
        mb-16
        justify-around
        lg:justify-center
        lg:gap-14
        text-dark-moderate-cyan
}

.footer-menu > a {
    @apply
        hover:text-white
}

.footer-social {
    @apply
        flex
        mx-auto
        justify-center
        gap-8
}

.footer-social > a > * {
    @apply
        text-xl
        text-dark-desaturated-cyan
        hover:text-white
}

</style>
