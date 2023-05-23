<template>
    <div :class="['sectionImage', imageMobile, 'lg:hidden']"></div>
    <div :class="['sectionImage', imageDesktop, 'hidden', 'lg:block', first??'order-2']"></div>
    <div :class="['content']">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
        <div>
            <a class="link" href=""><mark :class="`bg-${color}`">Learn More</mark></a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imageMobile', 'imageDesktop', 'title', 'description', 'first', 'color']
}
</script>

<style scoped>
.content {
    @apply
        flex
        flex-col
        px-8
        py-14
        lg:px-32
        text-center
        lg:text-left
        justify-center
}

.content > * {
    @apply
        mb-6
        lg:mb-12
}

.sectionImage {
    @apply
        h-[312px]
        lg:h-[600px]
        bg-center
        bg-cover
}

.title {
    @apply 
        font-[900]
        lg:text-5xl
        text-3xl
        text-very-dark-desaturated-blue
}

.description {
    @apply
        text-dark-grayish-blue
}

.link {
    font-family: 'Fraunces', serif;
    @apply
        font-[900]
        uppercase
        text-very-dark-desaturated-blue
}

mark {
  display: inline-block;
  line-height: 0em;
  @apply
    bg-opacity-30
    hover:bg-opacity-100
    pb-3
    px-2
    rounded-full
}

</style>