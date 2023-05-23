<template>
    <div :class="[imageMobile, imageDesktop, 'content']">
        <h2 class="title">{{ title }}</h2>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: ['imageMobile', 'imageDesktop', 'title', 'description']
}
</script>

<style scoped>
.content {
    @apply
        pt-[24rem]
        lg:pt-[28rem]
        pb-16
        px-8
        lg:px-40
        lg:pb-20
        text-center
        bg-center
        bg-cover
}

.title {
    @apply
        font-[900]
        text-3xl
        text-dark-desaturated-cyan
        mb-10
}

.description {
    @apply
        text-dark-desaturated-cyan
}

</style>