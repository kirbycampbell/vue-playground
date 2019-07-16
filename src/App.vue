<template>
  <div id="app">
    <div id="nav">
      <div class="img-outer">
        <img class="top-img" alt="Vue logo" src="https://i.imgur.com/loopcea.jpg" />
        <div class="site-title">StatUs.io</div>
      </div>
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
    <div class="footer">
      <div class="inner-footer">
        Created By Kirby Campbell
        <br />
        <div class="small-text">
          View
          <a
            href="https://github.com/kirbycampbell/vue-playground"
            target="_blank"
            rel="noopener noreferrer"
          >Front End</a> and
          <a
            href="https://github.com/kirbycampbell/backend-express/blob/master/server/routes/api/posts.js"
            target="_blank"
            rel="noopener noreferrer"
          >Back End</a> on Github
        </div>
      </div>
    </div>
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
  background-color: #01171dda;
}

.site-title {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(43, 41, 41, 0.445);
  color: rgb(223, 220, 248);
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.img-outer {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 300px;
  width: 100%;
  z-index: 10;
}
.top-img {
  width: 100%;
  z-index: 0;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: rgb(28, 32, 49);
  margin-top: 30px;
}
.inner-footer {
  color: white;
}
.small-text {
  margin-top: 10px;
  font-size: 12px;
}
a {
  color: rgb(171, 171, 233);
}
@media all and (max-width: 750px) {
  .img-outer {
    height: 180px;
  }
}
</style>
