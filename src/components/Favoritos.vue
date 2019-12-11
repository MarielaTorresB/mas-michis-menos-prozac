<template>
    <div class="favoritos card-container">
        <CatCard @toggleLike="myToggleLike" v-for="(item, key) in misFavs" :key="key" :title="item.title" :image="item.images.original.url" :id="item.id" :like="item.like"/> 
    </div>
</template>

<script>
import CatCard from "../components/CatCard";

export default {
    name: "Favoritos",
    data() {
        return {
            misFavs:[]
        }
    },
    components:{
        CatCard
    },
    created() {
       this.getFavs() 
    },
    methods: {
        getFavs() {
      let favos=this.$store.state.favGifs;
    //   this.misFavs.push(favos);
      this.misFavs=[...favos];
    },
    },
}
</script>


<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
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
</style>
