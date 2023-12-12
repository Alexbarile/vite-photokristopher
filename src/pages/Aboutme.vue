<script>
export default{
    name: "Aboutme",
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div data-aos="fade-right" class="hero-about">
                    <img src="../../public/img/aboutme.JPG" alt="">
                </div>
            </div>
            <div data-aos="fade-left" class="col-lg-6 col-md-6 col-sm-12 bg-copy">
                <div class="copy">
                    <h1>Kristina Prilipko</h1>
                    <p>Hi there,</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, nemo id deserunt ad modi voluptates reiciendis, et tempore quas odio veritatis voluptatum, dolore eius minus laborum fugiat. Animi, delectus? Pariatur?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

.row{
    .col-lg-6, .col-md-6{
        padding: 0px !important;
        
        .hero-about{
            img{
                width: 100%;
                height: 100%;
            }
        }

        .copy{
            padding: 150px 120px;
        }

        @media (max-width: 992px) {

            .copy{
                padding: 120px 50px;
            }
        }
    }

    .bg-copy{
        background-color: rgb(226, 226, 226);
    }
}

</style>
