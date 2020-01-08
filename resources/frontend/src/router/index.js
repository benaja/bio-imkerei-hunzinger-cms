import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Frontpage',
      component: () => import('@/views/Frontpage'),
    },
    {
      path: '/produkte',
      name: 'Products',
      component: () => import('@/views/Products'),
    },
    {
      path: '/produkte/:productName',
      name: 'Product',
      component: () => import('@/views/Product'),
    },
    {
      path: '/galerie',
      name: 'Gallery',
      component: () => import('@/views/Gallery'),
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('@/views/News'),
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: () => import('@/views/AboutUs'),
    },
    {
      path: '/about/:scrollTo',
      name: 'AboutUs',
      props: true,
      component: () => import('@/views/AboutUs'),
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: () => import('@/views/Contact'),
    },
    {
      path: '/projekt',
      name: 'Project',
      component: () => import('@/views/Project'),
    },
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});
