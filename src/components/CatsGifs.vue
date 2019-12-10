<template>
    <div class="card-container">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
          <div class="card" v-for="(item, key) in info" :key="key">
          <header class="card-header">
            <p class="card-header-title">{{ item.title | cut | capitalize }}</p>
            <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i :class="isFav ? 'fas' : 'far'" class="fa-heart"  aria-hidden="true"></i>
            </span>
            </a>
          </header>
          <div class="card-image">
          <figure class="image is-4by3">
            <img :src="item.images.original.url" alt="Placeholder image">
          </figure>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
          <b-button v-text="isFav ? 'Favorita' : 'Guardar en Favoritos'"></b-button>
           <b-button>
                Add <span class="mdi mdi mdi-home"></span>
            </b-button>
      </div>
    </div>
  </div>
</template>

<script>
// require('dotenv').config();
import axios from "axios";



export default {
  name: "CatsGifs",
  data() {
    return {
      info: [],
      URL_BASE: "https://api.giphy.com/v1/gifs/search?q=",
      limit: 5,
      busy: false,
    };
  },
  methods: {
    loadMore() {
      this.busy = true;
      axios
        .get(
          `${this.URL_BASE}cats&api_key=${process.env.VUE_APP_API_GIPHY}&limit=15`
        )
        .then(response => {
          let resp = response.data.data;
          resp=resp.map(elem => {
            elem.like= false;
            return elem
          })
          const append = resp.slice(
          this.info.length,
          this.info.length + this.limit
        );
        this.info = this.info.concat(append);
        this.busy = false;
      });
    }
  },
  created() {
    this.loadMore();
  },
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
  computed: {
    isFav(){
      let myGifs= this.$store.state.favGifs

      let index=myGifs.findIndex(gif => gif.id === this.id)
      return index >=0
    }
  },
}
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  width: 30vw;
  height: auto;
  margin-top:2rem;
}
</style>
