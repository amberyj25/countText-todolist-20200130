import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import todolist from "./todolist.vue"
import countText from "./countText.vue"

Vue.use(VueRouter)

export default new VueRouter ({
    routes:[
        {
            path:"/",
            component: App,
            children:[
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