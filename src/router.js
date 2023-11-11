//importare createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

//importare le componenti delle pagine
import Home from './pages/Home.vue';
import Portfolio from './pages/Portfolio.vue';
import Aboutme from './pages/Aboutme.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';
import Contacts from './pages/Contacts.vue';
import ThankYou from './pages/ThankYou.vue';

//creiamo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/aboutme',
            name: 'about_me',
            component: Aboutme
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
        {
            path: '/contatti',
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: ThankYou
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