export default {
    base: '/',
    mode: 'history',
    routes: [
        {
            path: '*',
            component: () => import('./components/NotFound'),
            name: 'NotFound'
        },
        {
            path: '/',
            component: () => import('./components/AppContainer'),
            redirect: { name: 'Login' },
            children: [
                {
                    path: 'login',
                    component: () => import('./components/Login'),
                    name: 'Login',
                },
                {
                    path: '/user',
                    component: () => import('./components/AuthContainer'),
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
                            component: () => import('./components/general/Dashboard'),
                            name: 'Dashboard'
                        }
                    ]
                }
            ]
        }
    ]
}