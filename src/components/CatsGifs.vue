<template>
    <div>
        <h1> {{info}} </h1>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "CatsGifs",
    data() {
        return {
            info:"",
            URL_BASE:"http://api.giphy.com/v1/gifs/search?q=",
            LIMIT:"&limit=5"
        }
    },
    created() {
    axios
      .get(`${this.URL_BASE}cats${process.env.API_GIPHY}${this.LIMIT}`)
      .then(response => {
        this.info = response.data.data;
      })

      .catch();
  },
}

</script>