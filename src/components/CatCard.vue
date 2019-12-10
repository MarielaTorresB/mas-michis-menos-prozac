<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{ title | cut | capitalize }}</p>
            <b-button @click="toggleLike">
                <span class="icon">
                <i :class="isFav ? 'fas' : 'far'" class="fa-heart"  aria-hidden="true"></i>
                </span>
            </b-button>
        </header>
          <div class="card-image">
        <figure class="image is-4by3">
            <img :src="image" alt="Placeholder image">
        </figure>
          </div>
    </div>
</template>

<script>
export default {
    name: "CatCard",
    props:['title', 'image', 'key', 'id', 'like'],
    filters: {
        cut: function (value) {
            const myTitle=value.split('GIF')
            return myTitle[0]
        },
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
    },
    computed: {
    isFav(){
      let myGifs= this.$store.state.favGifs

      let index=myGifs.findIndex(gif => gif.id === this.id)
      return index >=0
    }
    },
    methods: {
        toggleLike(){
            let data ={
                id: this.id,
                like: !this.like,
                image: this.image,
                title: this.title
            }
            this.$emit('toggleLike', data)
        }
    },
};
</script>

<style scoped>
.card-image{
    padding:1rem;
}

.card-header{
    display:flex;
    justify-content: space-around;
    align-items: center;
}

button{
    margin:1rem;
}
</style>