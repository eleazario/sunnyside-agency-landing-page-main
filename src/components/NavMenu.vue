<template>
    <div id="navMenu">
        <div class="triangle"></div>
        <div class="navItems">
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Projects</a>
            <button class="contact-btn">Contact</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.triangle {
    border-left: 24px solid transparent;
    border-bottom: 24px solid;
    @apply
        w-0
        h-0
        border-b-white
        absolute
        -top-6
        right-6;
}

#navMenu {
    @apply
        px-6
        mx-auto
        relative;
}

.navItems {
    @apply
        bg-white
        text-center
        py-6
}

.navItems > * {
    @apply
        py-3
}

.navItems > a {
    @apply
        block
        text-dark-grayish-blue
        text-lg
}

.contact-btn {
    font-family: 'Fraunces', serif;
    @apply
        w-32
        my-3
        rounded-full
        bg-yellow
        text-very-dark-desaturated-blue
        uppercase;
}

</style>