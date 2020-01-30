import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import todolist from "./todolist.vue"
import countText from "./countText.vue"
import first from "./first.vue"

Vue.use(VueRouter)

export default new VueRouter ({
    routes:[
        {
            path:"/",
            component: App,
            children:[
                {
                    path:"first",
                    name:"first",
                    component: first
                },
                {
                    path:"todolist",
                    name:"todolist",
                    component:todolist
                },
                {
                    path:"countText",
                    name:"countText",
                    component: countText
                }
            ]
        }
    ]
})