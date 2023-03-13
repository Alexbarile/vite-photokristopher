<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "SinglePost",
    data() {
        return {
            baseUrl: store.baseUrl,
            post: null,
            loading: store.loading,
        }
    },
    mounted() {
        // this.loading = true;
        axios.get(`${this.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
                this.post = response.data.post
                console.log(this.post)
                this.loading = false
            }
            else {
                //redirect pagina 404
                this.$router.push({ name: 'not-found' })
            }
        })
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col d-flex justify-content-center align-items-center align" v-if="loading">
                <div class="lds-dual-ring"></div>
            </div>
            <div v-else class="col">
                <div class="d-flex justify-content-end m-4">
                    <router-link class="btn btn-sm btn-success" :to="{ name: 'post_list'}">Torna ai Post</router-link>
                </div>
                <div class="card mt-4">
                    <div class="card-img-top">
                        <div class="cover-img">
                            <img :src="post && post.cover_image ? `${store.baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/200/300'" class="img-fluid" alt="">
                        </div>
                    </div>
                    <div class="card-title p-1">
                    <h5>{{ post.title }}</h5>
                    <div class="card-body">
    
                        <p v-if="post.type">
                            <em v-if="post.type">
                                <strong>Categoria</strong>: {{post.type.name}}
                            </em>
                            <em v-else>
                                Nessuna Categoria
                            </em>
                        </p>
                        <p v-if="post.technologies.length > 0">
                            <em>
                                <strong>Technologies</strong>:
                                <span class="badge bg-primary m-2" v-for="technology in post.technologies" :key="technology.id">
                                    {{technology.name}}
                                </span>
                            </em>
                        </p>
                        <p>
                            <em>
                                <strong>Descrizione</strong>: {{ post.content }}
                            </em>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card m-3">
        <div class="card-body">
        </div>
    </div>
</template>
<style lang="scss" scoped>
   .cover-img{
    width: 200px;
   }

   .lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid black;
  border-color: black transparent black transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>