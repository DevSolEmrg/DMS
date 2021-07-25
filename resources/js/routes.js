import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '*',
            component: () => import(/* webpackChunkName: "not_found" */ './components/NotFound'),
            name: 'NotFound'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "welcome_container" */ './components/AppContainer'),
            //redirect: { name: 'Login' },
            children: [
                {
                    path: '',
                    component: () => import(/* webpackChunkName: "public_container" */ './components/PublicContainer'),
                    /*beforeEnter: (to, from, next) => {
                        axios.get('/api/authenticated').then(() => {
                            next()
                        }).catch(() => {
                            return next({ name: 'Login'})
                        });
                    },*/
                    meta: {
                        auth: true
                    },
                    children: [
                        {
                            path: '',
                            component: () => import('./components/Login'),
                            name: 'Login',
                            meta: {
                                auth: false
                            }
                        },
                        {
                            path: 'guest',
                            component: () => import('./components/Guest'),
                            name: 'Guest',
                            meta: {
                                auth: false
                            }
                        },
                    ]
                },
                {
                    path: '',
                    component: () => import(/* webpackChunkName: "auth_container" */ './components/AuthContainer'),
                    /*beforeEnter: (to, from, next) => {
                        axios.get('/api/authenticated').then(() => {
                            next()
                        }).catch(() => {
                            return next({ name: 'Login'})
                        });
                    },*/
                    meta: {
                        auth: true
                    },
                    children: [
                        {
                            path: 'dashboard',
                            component: () => import(/* webpackChunkName: "dashboard" */ './components/general/Dashboard'),
                            name: 'Dashboard'
                        },
                        {
                            path: 'dashboard2',
                            component: () => import(/* webpackChunkName: "sample_page" */ './components/general/SamplePage'),
                            name: 'Dashboard2'
                        }
                    ]
                }
            ]
        }
    ]
})

/*routes.beforeEach((to, from, next) => {
    console.log("==", to)
    next()
})*/

/*routes.beforeEach((to, from, next) => {
    console.log("==", to)
    next()
})*/

export default routes
