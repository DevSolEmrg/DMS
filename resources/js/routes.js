export const routes = {
    base: __dirname,
    mode: 'history',
    routes: [
        {
            path: '*',
            component: NotFound,
            name: 'NotFound'
        },
        {
            path: __dirname,
            component: AppContainer,
            children: [
                {
                    path: 'login',
                    component: Login,
                    name: 'Login',
                },
                {
                    path: '',
                    component: AuthContainer,
                    beforeEnter: (to, from, next) => {
                        axios.get('/api/authenticated').then(() => {
                            next()
                        }).catch(() => {
                            return next({ name: 'Login'})
                        });
                    },
                    children: [
                        {
                            path: 'dashboard',
                            component: Dashboard,
                            name: 'Dashboard'
                        }
                    ]
                }
            ]
        }
    ]
}