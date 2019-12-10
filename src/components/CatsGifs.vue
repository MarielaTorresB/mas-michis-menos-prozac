<template>
    <div class="card-container">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
        <CatCard v-for="(item, key) in info" :key="key" :title="item.title" :image="item.images.original.url"/> 
      </div>
    </div>
  
</template>

<script>
import axios from "axios";
import CatCard from "../components/CatCard";


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
  components:{
    CatCard
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

 
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  width: 40vw;
  height: auto;
  margin-top:2rem;
}
</style>
