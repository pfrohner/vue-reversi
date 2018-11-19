<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}

.button {
	display: inline-block;
  margin: 0;
  padding: 0.75rem 1rem;
	border: 0;
	border-radius: 0.5rem;
	background-color: #aaa;
	color: #fff;
	font-weight: 700;
	font-size: 1rem;
  line-height: 1.5;
  outline: none;
	cursor: pointer;
	-webkit-appearance: none;
	-webkit-font-smoothing: antialiased;
}
</style>
