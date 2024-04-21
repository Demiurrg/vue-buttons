import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/pages/Home.vue'
import {RouteNames} from './routes'
import News from '@/components/pages/buletin/News.vue';
import Article from "@/components/pages/buletin/Article.vue";
import PostArticle from '@/components/pages/buletin/PostArticle.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    component: HomePage
  },
  {
    path: '/news',
    name: RouteNames.NEWS,
    component: News
  },
  {
    path: '/article',
    name: RouteNames.ARTICLE,
    component: Article
  },
  {
    path: '/post/:id',
    name: RouteNames.POST,
    component: PostArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
