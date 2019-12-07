<template>
    <div>
        <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Component
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
<div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
      info: "",
      URL_BASE: "http://api.giphy.com/v1/gifs/search?q=",
      LIMIT: "&limit=15"
    };
  },
  created() {
    axios
      .get(
        `${this.URL_BASE}cats&api_key=${process.env.VUE_APP_API_GIPHY}${this.LIMIT}`
      )
      .then(response => {
        this.info = response.data.data;
      })

      .catch();
  }
};
</script>

<style scoped>
.is-ancestor {
  display: flex;
  flex-wrap: wrap;
}
.box {
  width: 30vw;
  height: auto;
}
</style>
