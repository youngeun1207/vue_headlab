<template>
  <div class="profile-card" v-motion-slide-visible-bottom>
    <p class="profile-name">{{profile.name}}</p>
    <img :src="profile.image">
    <p class="profile-course">{{profile.course}}</p>
    <p class="profile-interest">research interests: {{profile.interest}}</p>
  </div>
</template>

<script>
export default {
    name: 'ProfileVue',
    props:{
        profile: Object,
    }
}
</script>

<style scoped>
.profile-card{
    background-color: #e9e9e9;
    width: 23%;
    padding: 0.3em 0;
    text-align: center;
    border-radius: 1rem;
    float: left;
    margin: 1%;
}
.profile-card img{
    overflow: hidden;
    width: 100%;
    margin-bottom: 0.3rem;
}
.profile-card .profile-name{
    font-size: 1.4rem;
    font-weight: 700;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    color: black;
}
.profile-card .profile-course{
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: black;
}
.profile-card .profile-interest{
    font-size: 1em;
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: left;
    padding-left: 1em;
    color: #474747;
}
@media (max-width: 768px) {
    .profile-card{
        width: 47%;
        margin: 1.5%;
    }
    .profile-card .profile-name{
        font-size: 1.2rem;
        font-weight: 700;
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
        color: black;
    }
    .profile-card .profile-course{
        font-size: 1rem;
    }
    .profile-card .profile-interest{
        font-size: 0.8em;
        padding-left: 0.5em;
    }
}
</style>