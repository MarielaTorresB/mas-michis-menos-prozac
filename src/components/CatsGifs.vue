<template>
    <div class="card-container">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
          <div class="card" v-for="(item, key) in info" :key="key">
          <header class="card-header">
            <p class="card-header-title" v-text="item.title"></p>
            <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <!-- <i class="fas fa-angle-down" aria-hidden="true"></i> -->
              <ion-icon name="heart-empty"></ion-icon>
            </span>
            </a>
          </header>
          <div class="card-image">
          <figure class="image is-4by3">
            <img :src="item.images.original.url" alt="Placeholder image">
          </figure>
          </div>
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
          // resp=resp.map(elem => {
          //   elem.like= false;
          //   return
          // })
          // const resp=response.data.data.map(elem => {
          //   elem.like= false;
          //   return
          // })
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
