<script>
export default{
    name: "Aboutme",
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="hero-about">
                    <img src="../../public/img/aboutme.JPG" alt="Foto About Me">
                </div>
            </div>
            <div class="col-6">
                <div class="copy">
                    <h1>Kristina Prilipko</h1>
                    <p>Hi there,</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, nemo id deserunt ad modi voluptates reiciendis, et tempore quas odio veritatis voluptatum, dolore eius minus laborum fugiat. Animi, delectus? Pariatur?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../styles/app.scss' as *;

.row{
    .col-6{
        padding: 0px !important;
        background-color: rgb(189, 189, 255);
        
        .hero-about{
            img{
                width: 100%;
            }
        }

        .copy{
            padding: 150px 120px;
        }
    }
}

</style>
