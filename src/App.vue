<template>
  <div id="app">
<ResearchPage/>
  </div>
</template>

<script>
import ResearchPage from "@/components/ResearchPage";
export default {
  name: 'App',
  components: {
  ResearchPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
