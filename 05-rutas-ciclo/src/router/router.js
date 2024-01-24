import { createRouter, createWebHashHistory } from 'vue-router'


import ListPage from '@/modules/pokemon/pages/ListPage'

// import AboutPage from '@/modules/pokemon/pages/AboutPage'
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
// import NoPageFound from '@/modules/shared/pages/NoPageFound'


const routes = [
    { 
        path: '/', 
        redirect: '/home'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackchunkname: "aboutpage" */ '@/modules/pokemon/pages/listpage')
            },
            { 
                path: '/about', 
                name: 'about',
                component: () => import(/* webpackchunkname: "aboutpage" */ '@/modules/pokemon/pages/aboutpage')
            },
            { 
                path: '/pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import(/* webpackchunkname: "pokemonpage" */ '@/modules/pokemon/pages/pokemonpage'),
                props: (route) => {
                    const id = number(route.params.id);
                    return isnan(id) ? { id: 1 } : { id }
                }
            }
        ]
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