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
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;



.square img{
    width: 200px;
}

.big img{
    width: 1000px;
}
.middle img{
    width: 500px;
}

    
</style>