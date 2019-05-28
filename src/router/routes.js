import MSite from '../views/MSite/MSite.vue'
import Search from '../views/Search/Search.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Login from '../views/Login/Login.vue'

export default [
    {
        path: '/msite',
        name: 'msite',
        component: MSite,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            showFooter: true
        }
    },
    {
        path: '/',
        redirect: '/msite'
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            showFooter: false
        }
    }
]
