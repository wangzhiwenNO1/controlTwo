import Vue from 'vue'
import VueRouter from 'vue-router'
import Workbench from '../views/Workbench.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/workbench',
        name: 'workbench',
        component: Workbench
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
    },
    {
        path: '/registerTwo',
        name: 'registerTwo',
        component: () => import(/* webpackChunkName: "about" */ '../views/RegisterTwo.vue')
    },
    {
        path: '/registerThree',
        name: 'registerThree',
        component: () => import(/* webpackChunkName: "about" */ '../views/RegisterThree.vue')
    },
    {
        path: '/registerFour',
        name: 'registerFour',
        component: () => import(/* webpackChunkName: "about" */ '../views/RegisterFour.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/order',/*订单*/
        name: 'order',
        component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
    },
    {
        path: '/ordering',/*订单*/
        name: 'ordering',
        component: () => import(/* webpackChunkName: "about" */ '../views/OrderIng.vue')
    },
    // {
    //     path: '/market',/*供应商管理*/
    //     name: 'market',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/Market.vue'),
    //     // children:[
    //     //   {
    //     //     path:'service',
    //     //     component:() => import(/* webpackChunkName: "about" */ '../components/market/Service.vue'),
    //     //   }
    //     // ]
    // },
    {
        path: '/demand',/*申请表*/
        name: 'demand',
        component: () => import(/* webpackChunkName: "about" */ '../components/market/Demand')
    },
    {
        path: '/laboratory',/*在线市场*/
        name: 'laboratory',
        component: () => import(/* webpackChunkName: "about" */ '../components/market/Laboratory')
    },
    {
        path: '/customer',/*在线市场*/
        name: 'customer',
        component: () => import(/* webpackChunkName: "about" */ '../views/Customer')
    },
    {
        path: '/partners',/*在线市场*/
        name: 'partners',
        component: () => import(/* webpackChunkName: "about" */ '../views/Partners')
    },
    {
        path: '/equipment',/*设备管理*/
        name: 'equipment',
        component: () => import(/* webpackChunkName: "about" */ '../views/Equipment')
    },
    {
        path: '/setup',/*设置*/
        name: 'setup',
        component: () => import(/* webpackChunkName: "about" */ '../views/Setup'),
        children: [
            {
                path: 'organization',
                component: () => import(/* webpackChunkName: "about" */ '../components/setup/Organization.vue'),
            },
            {
                path: 'information',
                component: () => import(/* webpackChunkName: "about" */ '../components/setup/Information.vue'),
            },
            {
                path: 'account',
                component: () => import(/* webpackChunkName: "about" */ '../components/setup/Account.vue'),
            },
            {
                path: 'power',
                component: () => import(/* webpackChunkName: "about" */ '../components/setup/account/Power.vue'),
            },
            {
                path: 'market',/*供应商管理*/

                component: () => import(/* webpackChunkName: "about" */ '../views/Market.vue'),
                // children:[
                //   {
                //     path:'service',
                //     component:() => import(/* webpackChunkName: "about" */ '../components/market/Service.vue'),
                //   }
                // ]
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
