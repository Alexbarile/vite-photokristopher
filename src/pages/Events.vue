<script>
export default {
    name: 'Events',
    data() {
        return {
            
            images: [
                { url: 'aboutme.JPG' },
                { url: 'hero.JPG' },
                { url: 'aboutme.JPG' },
            ],
        };
    },
    methods: {
        getImagePath: function (img) {
             return `/img/${img}`
        },
        openModal(index) {
        //  Apre la modale corrispondente all'immagine cliccata
        const modalId = 'exampleModal' + index;
        new bootstrap.Modal(document.getElementById(modalId)).show();
        },
    },
    
}
</script>

<template>
    <div class="container">


        <!-- TYPE 1 -->


        <div class="row">
            <div class="col text-center">
                <div class="grid-wrapper">

                    <!-- MODALE DINAMICA -->

                    <div>
                        <div v-for="(image, index) in images" :key="index">
                            <div class="square" @click="openModal(index)">
                                <img :src="getImagePath(image.url)" alt="Immagine" />
                            </div>
                            <div :id="'exampleModal' + index" class="modal fade" :aria-labelledby="'exampleModalLabel' + index" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <img :src="getImagePath(image.url)" alt="Immagine" />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <!-- MODALE STATICA -->

                    <!-- <div class="square" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <img data-bs-toggle="modal" data-bs-target="#exampleModal" src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>


        <!-- TYPE 2 -->


        <div class="row">
            <div class="col">
                <div id="masonry">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/1.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/2.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/3.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/4.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/6.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/8.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/9.jpg">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/7.jpg">
                </div>
            </div>
        </div>


        <!-- TYPE 3 -->


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


        <!-- TYPE 4 -->


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


// TYPE 1

.square img{
    width: 200px;
}

.big img{
    width: 1000px;
}
.middle img{
    width: 500px;
}


// TYPE 2

div#masonry { 
  display: flex; 
  flex-direction: column; 
  flex-wrap: wrap;
  height: 100vw;
  max-height: 800px;
  font-size: 0;
  overflow-y: hidden;
}
div#masonry img {  
  width: 33.3%;
  transition: .8s opacity;
} 

div#masonry:hover img { opacity: 0.3; }
div#masonry:hover img:hover { opacity: 1; } 

/* fallback for earlier versions of Firefox */

@supports not (flex-wrap: wrap) {
  div#masonry { display: block; }
  div#masonry img {  
  display: inline-block;
  vertical-align: top;
  }
}


// TYPE 3

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


// TYPE 4

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