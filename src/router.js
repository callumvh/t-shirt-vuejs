import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ShirtView from "./views/ShirtView.vue";
import VueKonva from "vue-konva";
import vueSlider from "vue-slider-component";

Vue.use(Router);
Vue.use(VueKonva);
Vue.use(vueSlider);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/shirt-maker",
      name: "shirtMaker",
      component: ShirtView
    }
  ]
});
