<template>
  <div>
    <Navbar/>
    <Main/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default {
  name: 'App',
  components: {
    Navbar,
    Main
  }
}
</script>

