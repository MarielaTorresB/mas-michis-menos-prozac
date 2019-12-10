<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">{{ title | cut | capitalize }}</p>
            <b-button>
                <span class="icon">
                <i :class="isFav ? 'fas' : 'far'" class="fa-heart"  aria-hidden="true"></i>
                </span>
            </b-button>
            <!-- <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i :class="isFav ? 'fas' : 'far'" class="fa-heart"  aria-hidden="true"></i>
            </span>
            </a> -->
        </header>
          <div class="card-image">
        <figure class="image is-4by3">
            <img :src="image" alt="Placeholder image">
        </figure>
          </div>
        <!-- <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </footer>
          <b-button v-text="isFav ? 'Favorita' : 'Guardar en Favoritos'"></b-button>
           <b-button>
                Add <span class="mdi mdi mdi-home"></span>
            </b-button> -->
    </div>
</template>

<script>
export default {
    name: "CatCard",
    props:['title', 'image', 'key'],
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