<template>
  <div class="home">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>
