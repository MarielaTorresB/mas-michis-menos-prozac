<template>
    <div class="favoritos">
        <p>Aleluya!!</p>
        <CatCard @toggleLike="myToggleLike" v-for="(item, key) in info" :key="key" :title="item.title" :image="item.images.original.url" :id="item.id" :like="item.like"/> 
    </div>
</template>

<script>
export default {
    name: "Favoritos",
}
</script>

<style scoped>
p{
    font-size: 10rem;
}
</style>