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
    }
}

</script>

<template>
    <PostMain></PostMain>
</template>

<style lang="scss">
@use './styles/app.scss' as *;

</style>
