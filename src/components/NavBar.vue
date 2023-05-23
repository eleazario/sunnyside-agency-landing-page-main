<template>
    <div id="nav" :class="{ navSolid: navBackground }">
        <div class="flex items-center">
            <a href=""><img class="" src="../images/logo.svg" alt=""></a>
        </div>
        <div class="hidden lg:flex navMenu">
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Projects</a>
            <button>Contact</button>
        </div>
        <button @click="hamburgerMenu" class="lg:hidden"><img src="../images/icon-hamburger.svg" alt=""></button>
    </div>
</template>

<script>
export default {
    props: ['navBackground'],
    methods: {
        hamburgerMenu(){
            this.$emit('onHamburgerMenu')
        }
    }
}
</script>

<style scoped>

#nav {
    @apply
        flex
        justify-between
        px-6
        py-8
        mb-4
        lg:px-10
        transition
        ease-in-out
        duration-300
}

.navSolid {
    @apply
        bg-dark-blue
        bg-opacity-50
}

.navMenu {
    @apply
        items-center
}

.navMenu > a {
    @apply
        mr-10
        text-white
}

.navMenu > button {
    font-family: 'Fraunces', serif;
    @apply
        w-36
        h-14
        bg-white
        rounded-full
        uppercase
        hover:bg-opacity-50
        hover:text-white
}

</style>