<template>
    <div>
        <img :src="portrait" alt="">
        <p class="testimony">{{ testimony }}</p>
        <p class="name">{{ name }}</p>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: ['portrait', 'testimony', 'name', 'description']
}
</script>

<style scoped>
div {
    @apply
        mb-16
        lg:mb-0
        px-8
}

img {
    @apply
        mx-auto
        mb-10
        rounded-full
        w-20
}
.testimony {
    @apply
        mb-10
        text-very-dark-grayish-blue
}

.name{
    font-family: 'Fraunces', serif;
    @apply
        text-very-dark-desaturated-blue
        text-xl
        font-bold
        mb-3
}

.description {
    @apply
        text-base
        text-grayish-blue
}

</style>