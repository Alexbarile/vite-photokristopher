<script>
export default{
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Portfolio',
                    routeName: 'portfolio',
                },
                {
                    label: 'About me',
                    routeName: 'about_me',
                },
                {
                    label: 'Contact',
                    routeName: 'contacts',
                },
            ],
            menuCategory: [
                {
                    label: 'People',
                    routeName: 'people',
                },
                {
                    label: 'Hospitality',
                    routeName: 'hospitality',
                },
                {
                    label: 'Wedding',
                    routeName: 'wedding',
                },
                {
                    label: 'Commercial',
                    routeName: 'commercial',
                },
                {
                    label: 'Events',
                    routeName: 'events',
                },
                {
                    label: 'Street',
                    routeName: 'street',
                },
            ]
        }
    },
}
</script>

<template>
    <header>
            <div class="container">
                <div class="row d-flex justify-content-between align-items-center">
                    <div class="col">
                        <router-link :to="{name: 'home'}" class="logo">
                            <h1>Wander with Kri</h1>
                        </router-link>
                    </div>
                    <div class="col d-flex justify-content-lg-end justify-content-center">
                        <nav>
                            <ul>
                                <li v-for="(item, index) in menuItems" :key="index">
                                    <router-link :to="{name: item.routeName}" class="list-item">
                                        {{ item.label }}
                                    </router-link>
                                </li>
                                <li class="d-none" v-for="(item, index) in menuCategory" :key="index">
                                    <router-link :to="{name: item.routeName}" class="list-item">
                                        {{ item.label }}
                                    </router-link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>  
            </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss' as *;
    header{
        .row{
            padding: 10px;
            .col{

                .logo{
                    text-decoration: none;
                    color: black;
                    h1{
                        font-size: 25px;
                        margin: 0 !important;
                    }
                }

                ul{
                    display: flex;
                    list-style-type: none;
                    margin: 0 !important;
                    padding: 0 !important;

                    li{
                        padding: 15px;
                        .list-item{
                            text-decoration: none;
                            color: black;
                            white-space: nowrap;
                            transition: 0.3s;
                            
                            &:hover{
                                color: gray;
                            }
                        }
                    }
                }

                @media (max-width: 768px) {
                    .logo{
                        display: flex;
                        justify-content: center;
                    }
                }
            }
        }
    }

</style>
