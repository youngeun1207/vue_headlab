<template>
    <div class="relative w-full md:-mt-[6em]" v-motion-slide-bottom>
        <img class="w-full" src="../assets/img/main2.png">
        <h1 class="absolute top-[50%] left-[8vw] text-5xl text-main -translate-y-1/2 font-bold">
            Hanyang<br>Education in<br>Art+Design<br>Lab
        </h1>
    </div>
    <div class="about-cont">
        <div class="title">우리 연구실은요..</div>
    </div>
  
</template>

<script>
export default {
    name: 'MainPage',
}
</script>

<style>
.banner{
    position: relative;
    margin-top: -6em; /* 상단에 고정 */
}
.banner img{
    width: 100%;
}
.banner h1{
    position: absolute;
    top: 48%;
    left: 8vw;
    transform: translate(0, -50%);
    color: #011A41;
    font-size: 6vw;
}
@media (max-width: 768px) {
    .banner{
        margin-top: 0em;
    }
    .banner h1 {
        font-size: 7vw;
        top: 44%;
        left: 7vw;
    }
}
.about-cont{
    padding-top: 4em;
    width: 80%;
    margin: auto;
    text-align:center;
    margin-bottom: 4em;
}
.about-cont:after {
    content:'';
    display:block;
    clear:both;
}
@media (max-width: 768px) {
    .about-cont{
        padding-top: 3em;
        width: 95%;
        text-align:center;
    }
}
</style>