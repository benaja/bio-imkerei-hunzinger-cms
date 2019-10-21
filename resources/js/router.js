import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Frontpage',
            component: () => import('./views/Frontpage')
        },
        {
            path: '/produkte',
            name: 'Products',
            component: () => import('./views/Products')
        },
        {
            path: '/produkte/:productName',
            name: 'Product',
            component: () => import('./views/Product')
        },
        // {
        //   path: '/news',
        //   name: 'News',
        //   component: () => import('./views/News')
        // }
    ],
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})
