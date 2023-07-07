<template>
  <div class="alumni-card" v-motion-slide-visible-bottom>
    <div class="alumni-basic-cont">
        <p class="alumni-name">{{alumni.name}}</p>
        <p class="alumni-course">{{alumni.course}}</p>
    </div>
    <div class="alumni-detail-cont">
        <p class="alumni-interest">paper: {{alumni.interest}}</p>
        <p class="alumni-date">2023.02</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AlumniVue',
    props:{
        alumni: Object,
    }
}
</script>

<style>
.alumni-card{
    width: 48%;
    padding: 1em 1.5em;
    text-align: center;
    border-radius: 1.5rem;
    border: solid #c8c8c8 1.5px;
    float: left;
    margin: 1%;
    box-sizing : border-box;
    display: flex;
    align-items: center;
}
.alumni-card .alumni-basic-cont{
    margin-right: 1.3em;
}
.alumni-card .alumni-detail-cont{
    text-align: left;
    margin: 0;
}
.alumni-card .alumni-name{
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 0.3em;
    color: black;
}
.alumni-card .alumni-course{
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    color: black;
}
.alumni-card .alumni-interest{
    font-size: 1em;
    text-align: left;
    margin: 0;
    margin-bottom: 0.3em;
    color: #474747;
}
.alumni-card .alumni-date{
    font-size: 1em;
    text-align: left;
    color: #474747;
    margin: 0;
}
@media (max-width: 768px) {
    .alumni-card{
        width: 100%;
        margin: 1% 0;
        border: solid #c8c8c8 1px;
    }
    .alumni-card .alumni-name{
        font-size: 1.2rem;
        font-weight: 700;
        color: black;
    }
    .alumni-card .alumni-course{
        font-size: 1rem;
    }
    .alumni-card .alumni-interest{
        font-size: 0.8em;
    }
}
</style>