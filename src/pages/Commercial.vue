<script>
export default {
    name: 'Commercial'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="square">
                        <img src="../../public/img/commercial/D1970DA2-418C-4E1A-8CAD-E2466CEBEF61.PNG" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/commercial/DSCF9055.JPG" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/commercial/DSCF9076.JPG" alt="">
                    </div>
                    <div class="wide">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="tall">
                        <img src="" alt="" />
                    </div>
                    <div class="big">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="wide">
                        <img src="" alt="" />
                    </div>
                    <div class="big">
                        <img src="PG" alt="" />
                    </div>
                    <div class="tall">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                    <div class="big">
                        <img src="" alt="" />
                    </div>
                    <div class="square">
                        <img src="" alt="" />
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

/* Reset CSS */

img {
	max-width: 100%;
	height: auto;
	vertical-align: middle;
	display: inline-block;
}

/* Main CSS */

.grid-wrapper > div > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 2px;
}

.grid-wrapper {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: 200px;
	grid-auto-flow: dense;
}
.grid-wrapper .wide {
	grid-column: span 2;
}
.grid-wrapper .tall {
	grid-row: span 2;
    transition: 1s;
}
.grid-wrapper .big {
    grid-column: span 2;
    grid-row: span 2;
}

// HOVER FILTRO COLORE, INGRADIMENTO FOTO, BOX SHADOW

.grid-wrapper .square img, .tall img, .wide img, .big img{
    transition: 1s;
}

.grid-wrapper .square:hover img{
    transform: scale(1.4);
    height: 50vh;
    box-shadow: 0 0 6px 3px rgb(239, 239, 211);
}

.grid-wrapper .tall:hover img{
    transform: scale(1.5);
    box-shadow: 0 0 6px 3px rgb(239, 239, 211);
}

.grid-wrapper .wide:hover img, .big:hover img{
    transform: scale(1.3);
    height: 70vh;
    box-shadow: 0 0 6px 3px rgb(239, 239, 211);
}
    
</style>