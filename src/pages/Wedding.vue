<script>
export default {
    name: 'Wedding'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF1133.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF1155.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/weeding/DSCF1274.jpg" alt="">
                    </div>
                    <div class="wide">
                        <img src="../../public/img/weeding/DSCF1743.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF2402.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/weeding/DSCF2404-1.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/weeding/DSCF2407.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF2408.jpg" alt="" />
                    </div>
                    <div class="wide">
                        <img src="../../public/img/weeding/DSCF2446.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/weeding/DSCF2627.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/weeding/DSCF2752.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF2757.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF2929.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF3124.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/weeding/DSCF3194.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/weeding/DSCF3421.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF4655.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/DSCF4906-2.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/weeding/DSCF4961.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/weeding/DSCF5127.jpg" alt="" />
                    </div>
                    <div class="wide">
                        <img src="../../public/img/weeding/IMG_6764-2.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/IMG_6800.jpg" alt="" />
                    </div>
                    <div class="wide">
                        <img src="../../public/img/weeding/IMG_6836.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/IMG_6853-1.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/weeding/IMG_6866.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/IMG_6870.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/IMG_6912.jpg" alt="" />
                    </div>
                    <div class="wide">
                        <img src="../../public/img/weeding/IMG_6914.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/weeding/IMG_6917.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/weeding/IMG_7169.jpg" alt="" />
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