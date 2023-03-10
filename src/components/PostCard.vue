<script>
import {store} from '../store'

export default{
    name: "PostCard",
    props:{
        post: Object,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template> 
    <div class="card m-3">
        <div class="card-body">
            <div class="card-img-top">
                <img :src="post.cover_image != null ? `${store.baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/200/300'" class="img-fluid" alt="">
            </div>
            <div class="card-title p-1">
                <h5>{{ post.title }}</h5>
                <p>
                    <em v-if="post.type">
                        <strong>Categoria</strong>: {{post.type.name}}
                    </em>
                    <em v-else>
                        Nessuna Categoria
                    </em>
                </p>
                <p>
                    <em>
                        <strong>Technologies</strong>:
                        <span class="badge bg-primary m-2" v-for="technology in post.technologies" :key="technology.id">
                            {{technology.name}}
                        </span>
                    </em>
                </p>
                <!-- <a href="#" class="btn btn-warning">
                    Leggi l'articolo
                </a> -->
                <router-link :to="{ name: 'single-post', params: { slug: post.slug } }" class="btn btn-sm btn-success">Leggi l'articolo</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/app.scss' as *;

</style>