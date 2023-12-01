<script>
export default {
    name: 'Wedding'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">

                <!-- MASONRY PERSONALIZZATO -->

                <div class="gallery">
                    <img src="../../public/img/paesaggio.webp" class="img-1x1" alt="">
                    <img src="../../public/img/paesaggio.webp" class="img-2x2" alt="">
                    <img src="../../public/img/paesaggio.webp" class="img-2x1" alt="">
                    <img src="../../public/img/paesaggio.webp" class="img-3x1" alt="">
                    <img src="../../public/img/paesaggio.webp" class="img-1x2" alt="">
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

.row{
    .col{

        // MASONRY PERSONALIZZATO
        .gallery{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-auto-flow: dense;
        }

        .gallery img {
            width: 100%;
            object-fit: cover;
            padding: 3px;
        }

        .gallery > .img-1x1{
            grid-column-end: span 1;
            grid-row-end: span 1;
            aspect-ratio: 1 / 1;
        }
        .gallery > .img-2x2{
            grid-column-end: span 2;
            grid-row-end: span 2;
            aspect-ratio: 2 / 2;
        }
        .gallery > .img-2x1{
            grid-column-end: span 2;
            grid-row-end: span 1;
            aspect-ratio: 2 / 1;
        }
        .gallery > .img-3x1{
            grid-column-end: span 3;
            grid-row-end: span 1;
            aspect-ratio: 3 / 1;
        }
        .gallery > .img-1x2{
            grid-column-end: span 1;
            grid-row-end: span 2;
            aspect-ratio: 1 / 2;
        }
    }
}
    
</style>