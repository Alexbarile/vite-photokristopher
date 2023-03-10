//importare createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

//importare le componenti delle pagine
import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';

//creiamo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'post_list',
            component: PostList
        },

        //rotta per il dettaglio del post
        {
            //con :nome_parametro andiamo a passare il parametro per visualizzare il dettaglio di un articolo, il nome_parametro uguale a quello dato in api.php di laraver
            path: '/blog/:slug',
            name: 'single-post',
            component: SinglePost
        },

        //rotta per errore 404 (sempre per ultima)
        {
            path: '/*',
            name: 'not-found',
            component: NotFound
        },
    ]
})

//4 esportiamo il router

export { router };