<template>
  <div class="card-container">
    <div class="card search">
      <header class="card-header">
          <p class="card-header-title">
            ¿No eres una "cat person"?...
          </p>
      </header>
      <div class="card-content">
        <div class="content">
            ¡No te preocupes! Lo que queremos es que te desestreses, ¡busca lo que más te guste y/o relaje!
          <b-field class="busqueda">
            <b-input placeholder="Escribe otro animal"
                type="search"
                v-model="search"
                icon="magnify">
            </b-input>
            <p class="control">
                <button class="button is-primary" @click="searchAnimal">Buscar</button>
            </p>
          </b-field>
        </div>
      </div>
    </div>   
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit">
        <CatCard @toggleLike="myToggleLike" v-for="(item, key) in info" :key="key" :title="item.title" :image="item.images.original.url" :id="item.id" :like="item.like"/> 
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
      search: 'cat'
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
          `${this.URL_BASE}${this.search}&api_key=${process.env.VUE_APP_API_GIPHY}&limit=15`
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
    },
    myToggleLike (data){
      let gifLike = this.info.find(item => item.id=== data.id)
      gifLike.like = data.like
      this.$store.commit('toggleFav', gifLike)
    },
    searchAnimal() {
      this.info=[];
      let NEW_URL = `${this.URL_BASE}${this.search}&api_key=${process.env.VUE_APP_API_GIPHY}&limit=15`;
      axios
      .get(NEW_URL)
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
    },
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
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.card {
  width: 75vw;
  height: auto;
  margin-top:2rem;
}
@media only screen and (min-width: 700px) {
  .card {
    width: 50vw;
  }
}

.search{
  max-height: 80vw;
  width: 80vw;
}

.busqueda{
  margin-top:1rem;
  
}
</style>
