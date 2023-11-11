<script>
    export default{
        name: 'Home',
    }
</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hero-image">
                        <div class="hero-text">
                            <h3 class="pb-4">Photography</h3>
                            <router-link :to="{name: 'portfolio'}" class="logo">
                                <button>SEE</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use '../styles/app.scss' as *;

main{

    .row{

        .hero-image{
            background-image: url("../../public/img/hero.JPG");
            background-color: #cccccc;
            height: 1000px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }
    
        .hero-text{
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
    
            h3{
                text-transform: uppercase;
                font-size: 20px;
                font-weight: 400;
                letter-spacing: 10px;
            }
    
            button{
                border: 1px solid white;
                background-color: transparent;
                padding: 8px 70px;
                color: white;
            }
        }    
    }
}
</style>
