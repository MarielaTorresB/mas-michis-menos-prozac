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
  // created() {
    // axios
    //   .get(
    //     `${this.URL_BASE}cats&api_key=${process.env.VUE_APP_API_GIPHY}&limit=${this.LIMIT}`
    //   )
    //   .then(response => {
    //     this.info = response.data.data;
    //   })

    //   .catch();
  // },
   methods: {
    loadMore() {
      // console.log("Adding 5 more data results");
      this.busy = true;
      axios
        .get(
          `${this.URL_BASE}cats&api_key=${process.env.VUE_APP_API_GIPHY}&limit=15`
        )
        .then(response => {
          const resp = response.data.data;
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
//   methods: {
//   scroll () {
//     window.onscroll = () => {
//       let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
//       if (bottomOfWindow) {
//         axios
//           .get(
//             `${this.URL_BASE}cats&api_key=${process.env.VUE_APP_API_GIPHY}&offset=5&limit=${this.LIMIT+5}`
//             )
//           .then(response => {
//             this.info.push(response.data.results[0]);
//           });
//       }
//     };
//   },
// },
// mounted() {
//   this.scroll(this.person);
// }
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
