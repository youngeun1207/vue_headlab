<template>
  <div class="header">
    <img class="logo" src="./assets/img/signiture.svg" @click="$router.push(`/home`)">
  </div>
  <div class="wrap">
    <router-view :posts="posts"></router-view>
  </div>
  <footer>
    <div class="contect"></div>
 </footer>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
body{
  margin: 0;
  min-height: 100%;
  position: relative;
}
.header{
  height: 5em;
  width: 100%;
  padding: 0.5em 1em;
  position: fixed;
  border-bottom: 1px solid rgba(53, 94, 252, .07);
  z-index: 100;
}
.header .logo{
  height: 100%;
}

.wrap{
  height: 100%;
  padding-bottom: 15em;
  box-sizing: border-box;
  padding-top: 6em; /* 헤더 높이(5em) + 헤더 패딩(위아래 0.5em*2) */
}

.title{
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  color: #011A41;
}

@media (max-width: 768px) {
  .header{
    height: 3em;
    width: 100%;
    padding: 0.5em 1em;
    position: fixed;
    border-bottom: 1px solid rgba(53, 94, 252, .07);
    z-index: 100;
  }
  .wrap{
    padding-top: 4em;
  }
  .title{
  font-size: 2em;
  }
}

footer{
  background-color: #011A41;
  height: 15em;
  width: 100%;
  position: absolute;  
  bottom: 0;
  left: 0;
}
</style>
