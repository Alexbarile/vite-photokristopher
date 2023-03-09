<script>

export default{
    name: "PostCard",
    props:{
        post: Object,
        baseUrl: String,
    }
}
</script>

<template>
    <div class="card m-3">
        <div class="card-body">
            <div class="card-img-top">
                <img :src="post.cover_image != null ? `${baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/200/300'" class="img-fluid" alt="">
            </div>
            <div class="card-title p-1">
                <h5>{{ post.title }}</h5>
                <p>
                    <em><strong>Categoria</strong>: {{post.type.name}}</em>
                </p>
                <p>
                    <em>
                        <strong>Technologies</strong>:
                        <span class="badge bg-primary m-2" v-for="technology in post.technologies">
                            {{technology.name}}
                        </span>
                    </em>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/app.scss' as *;

</style>