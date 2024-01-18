import { createRouter, createWebHashHistory } from 'vue-router'


import ListPage from '@/modules/pokemon/pages/ListPage'

// import AboutPage from '@/modules/pokemon/pages/AboutPage'
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
// import NoPageFound from '@/modules/shared/pages/NoPageFound'


const routes = [
    { 
        path: '/', 
        component: ListPage 
    },
    { 
        path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    { 
        path: '/:pokemonid', 
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage')
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router