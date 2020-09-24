
<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<style>
#q-app {
  display: inline-block;
  font-size: 1rem;
  color: rgb(133, 0, 0);
  background-color: #46bbbb;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
</style>

<script>
  export default { name: 'App' }
</script>
