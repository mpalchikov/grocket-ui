import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";
import AddNew from "./views/AddNew.vue";
import Configuration from "./views/Configuration.vue";
import AddNode from "./views/AddNode.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "addNew",
    path: "/add-new",
    component: AddNew,
  },
  {
    name: "configuration",
    path: "/configuration",
    component: Configuration,
  },
  {
    name: "addNode",
    path: "/add-node",
    component: AddNode,
  },
];

const router = new VueRouter({ mode: "history", routes });

export default router;
