<template>
    <div class="researcher-cont">
        <div class="title">Researchers</div>
        <p>연구실 구성원</p>
        <ProfileVue v-for="researcher in researchers" :key="researcher" :profile="researcher"/>
    </div>
    <div class="alumni-cont">
        <div class="title">Alumni</div>
        <p>졸업생</p>
        <AlumniVue v-for="researcher in researchers" :key="researcher" :alumni="researcher"/>
    </div>
</template>

<script>
import AlumniVue from './Alumni.vue'
import ProfileVue from './Profile.vue'
export default {
    name: 'ResearcherVue',
    data() {
        return {
            researchers: [],
        }
    },
    components:{
        ProfileVue: ProfileVue,
        AlumniVue: AlumniVue,
    },
    mounted() {
        this.axios.get('/researcher.json').then((result)=>{
            this.researchers = result.data;
        });
    },
}
</script>

<style>
.researcher-cont{
    padding-top: 2em;
    width: 80%;
    margin: auto;
    text-align:center;
}
.researcher-cont:after {
    content:'';
    display:block;
    clear:both;
}
.researcher-cont p{
    margin-top: 0.5em;
    margin-bottom: 1em;
    color: #888888;
}
@media (max-width: 768px) {
    .researcher-cont{
        padding-top: 3em;
        width: 95%;
        margin: auto;
        text-align:center;
    }
}

.alumni-cont{
    padding-top: 4em;
    width: 80%;
    margin: auto;
    text-align:center;
    margin-bottom: 4em;
}
.alumni-cont:after {
    content:'';
    display:block;
    clear:both;
}
.alumni-cont p{
    margin-top: 0.5em;
    margin-bottom: 1em;
    color: #888888;
}
@media (max-width: 768px) {
    .alumni-cont{
        padding-top: 4em;
        width: 95%;
        margin: auto;
        text-align:center;
    }
}
</style>