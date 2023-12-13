<script>
export default {
    name: 'Hospitality'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="grid-wrapper">
                    <div class="square">
                        <img src="../../public/img/bars/DSCF6264-2.JPG" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/DSCF8104.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/bars/DSCF8151.jpg" alt="">
                    </div>
                    <div class="wide">
                        <img src="../../public/img/bars/DSCF8159.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/DSCF8163.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/bars/DSCF8178.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/bars/DSCF8427.JPG" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/DSCF8452.JPG" alt="" />
                    </div>
                    <div class="wide">
                        <img src="../../public/img/bars/DSCF8457.JPG" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/bars/DSCF9211-3.jpg" alt="" />
                    </div>
                    <div class="tall">
                        <img src="../../public/img/bars/DSCF9215.JPG" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/DSCF9222.JPG" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/DSCF9240.JPG" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4039x6059_052936.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4066x6099_052930.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4105x6220_052927.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4105x6220_054288.JPG" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4116x6174_052923.jpg" alt="" />
                    </div>
                    <div class="wide">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4160x6240_054260.jpg" alt="" />
                    </div>
                    <div class="square">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_4160x6240_058109.jpg" alt="" />
                    </div>
                    <div class="wide">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_6240x4160_058087.jpg" alt="" />
                    </div>
                    <div class="big">
                        <img src="../../public/img/bars/FUJIFILM_X-T30_6240x4160_058099.jpg" alt="" />
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