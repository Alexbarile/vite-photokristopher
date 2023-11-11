<script>
export default{
    name: 'AppFooter',
    
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-center flex-column align-items-center">
                    <div class="py-4">
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div>
                        <p>&#169; 2023 Wander with Kri.</p>
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;

footer{
   
    .row{
        .col{
            a{
                color: black;
                font-size: 30px;
            }
        }
    }
}

    

</style>
