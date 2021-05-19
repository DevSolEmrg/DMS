export default {
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
            redirect: { name: 'Login' },
            children: [
                {
                    path: 'login',
                    component: () => import('./components/Login'),
                    name: 'Login',
                },
                {
                    path: '/user',
                    component: () => import(/* webpackChunkName: "container" */ './components/AuthContainer'),
                    /*beforeEnter: (to, from, next) => {
                        axios.get('/api/authenticated').then(() => {
                            next()
                        }).catch(() => {
                            return next({ name: 'Login'})
                        });
                    },*/
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
}