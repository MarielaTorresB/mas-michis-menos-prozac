<template>
  <div class="enter">
    <h1>This is an enter page</h1>
    <Login />
  </div>
</template>

<script>
import Login from "@/components/Login.vue"

export default {
    name:"Enter",
    components:{
        Login
    }
}
</script>