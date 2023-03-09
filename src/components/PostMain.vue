<script>
import axios from 'axios';

export default{
    name: "PostMain",
    data(){
        return{
            posts: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000/', 
        }
    },
    methods: {
        getPosts(){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/posts`).then(response) => {
                 if(response.data.success){
                    this.posts = response.data.results 
                 }
            }
        }
    },
}

</script>

<template>
    <PostMain></PostMain>
</template>

<style lang="scss">
@use './styles/app.scss' as *;

</style>
