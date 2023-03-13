<script>
export default{
    name: 'AppHeader',
    data() {
        return {
            menuItems: [
                {
                    label: 'Homepage',
                    routeName: 'homepage',
                },
                {
                    label: 'Blog',
                    routeName: 'post_list',
                },
                // {
                //     label: 'Contatti',
                //     routeName: 'contacts',
                // },
                // {
                //     label: 'Categorie',
                //     routeName: 'categories_list',
                // },
            ]
        }
    },
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-md background-nav">
            <div class="container">
                <div class="navbar-brand">
                    <img src="" class="logo">
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{name: item.routeName}" class="nav-link text-white">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    .background-nav{
        background-color: rgb(181, 181, 252);
    }

</style>
