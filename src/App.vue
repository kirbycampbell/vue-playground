<template>
  <div id="app">
    <div id="nav">
      <div class="img-outer">
        <img class="top-img" alt="Vue logo" src="https://i.imgur.com/loopcea.jpg" />
      </div>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.img-outer {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 300px;
  width: 100%;
  z-index: -100;
}
.top-img {
  width: 100%;

  z-index: -110;
}
</style>
