<script>
import axios from 'axios';

export default{
    name: "PostMain",
    data(){
        return{
            posts: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000/',
            lastPage: null
        }
    },
    methods: {
        getPosts(post_page){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/posts`, { params: { page: post_page }}).then((response) => {
                if(response.data.success) {
                    this.posts = response.data.posts.data
                    this.currentPage = response.data.posts.current_page;
                    this.lastPage = response.data.posts.last_page;
                    this.loading = false
                }
                else {
                    alert('Non completo')
                }
            });
        }
    },
    mounted() {
        this.getPosts(this.currentPage);
    },
}

</script>

<template>
    ciao
</template>

<style lang="scss">
@use '../styles/app.scss' as *;

</style>
