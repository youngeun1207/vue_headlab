import { createWebHistory, createRouter } from "vue-router";
import MainPage from './components/MainPage.vue';
import ResearcherVue from './components/Researcher.vue'
import PostVue from './components/Post.vue'
// import DetailProject from './components/DetailProject.vue';

const routes = [
    // {
    //     path: "/project/:id(\\d+)", // "/detail/아무문자(정규식 숫자만 한정)"
    //     component: DetailProject
    // },
    {
        path: "/people",
        component: ResearcherVue,
    },
    {
        path: "/post",
        component: PostVue,
    },
    {
        path: "/:anything(.*)",
        component: MainPage,
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 