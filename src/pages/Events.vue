<script>
export default {
    name: 'Events',
    data() {
        return {
            selectedImage: {
                url: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            },
            selectedBig: {
                url: 'https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=564&amp;q=80',
            },
            // images: [
            //     { url: 'aboutme.JPG' },
            //     { url: 'hero.JPG' },
            //     { url: 'aboutme.JPG' },
            // ],
        };
    },
    methods: {

        // getImagePath: function (img) {
        //     return `/img/${img}`
        // },
        openModal(index) {
        // Chiudi eventuali altre modalità aperte
            this.closeAllModals();

            // Apre la modale corrispondente all'immagine cliccata
            new bootstrap.Modal(document.getElementById('exampleModal-' + index)).show();
        },
        closeAllModals() {
        // Chiude tutte le modalità aperte
            for (let i = 0; i < this.images.length; i++) {
                const modal = new bootstrap.Modal(document.getElementById('exampleModal-' + i));
                modal.hide();
            }
        },

        // openModal() {
        // Apre la modale
        //     new bootstrap.Modal(document.getElementById('exampleModal-1')).show();
        //     new bootstrap.Modal(document.getElementById('exampleModal-2')).show();
        // },

        // openModal(index) {
        // Apre la modale corrispondente all'immagine cliccata
        // const modalId = 'exampleModal' + index;
        // new bootstrap.Modal(document.getElementById(modalId)).show();
        // },

    },
    
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <div class="grid-wrapper">




                    <div>
                        <!-- Lista di immagini con modali dinamiche -->
                        <div class="square" @click="openModal">
                            <img :src="selectedImage.url" alt="Immagine" />
                        </div>

                        <!-- Modale dinamica -->
                        <div class="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <img :src="selectedImage.url" alt="Immagine in modale" />
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div>
                        <div class="square" @click="openModal">
                            <img :src="selectedBig.url" alt="Immagine" />
                        </div>

                        <!-- Modale dinamica -->
                        <div class="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <img :src="selectedBig.url" alt="Immagine in modale" />
                                </div>
                            </div>
                        </div>
                    </div>








                    <!-- MODALE DINAMICA -->

                    <!-- <div>
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
                    </div> -->

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



.square {
    width: 500px;
    height: 500px;
}

.big {
    width: 500px;
    height: 500px;
}
.tell{
    width: 500px;
    height: 800px;
}

    
</style>