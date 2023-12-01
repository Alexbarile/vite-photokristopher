<script>
export default {
    name: 'Commercial'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="container-img">
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                    <div class="card-img p-2">
                        <img src="../../public/img/paesaggio.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

.row{
    .col{

        .container-img{
            display: flex;
        }

        .card-img{
            flex: 1;
            overflow: hidden;
            transition: 0.5s;
        }

        .card-img img{
            object-fit: cover;
            filter: grayscale(1); 
            transform: scale(1);
            transition: all 0.5s;
        }

        .card-img:hover{
            flex: 2;
        }

        .card-img:hover img{
            filter: none;
            transform: scale(1.1);
        }
    }
}
    
</style>