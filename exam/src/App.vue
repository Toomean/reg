
<style lang="sass">
@import "./style/main.sass"

.Content
    max-width: 1024px
    margin: 0 auto
    padding: 1rem

.Header
    background: #eee

.Nav
    padding: 2em 1em

    &__list
        display: flex

    &__link
        transition: .2s border-color

        margin: 0 1em
        border-bottom: 1px solid

        color: inherit
        text-decoration: none

        &:hover,
        &_state_active
            border-color: transparent

        &_state_active
            cursor: default

</style>

<template>
    <div class="Wrapper">
        <header class="Header">
            <nav class="Nav">
                <ul class="Nav__list">
                    <li class="Nav__item">
                        <router-link class="Nav__link"
                            :to="{ name: 'MainPage' }"
                            :active-class="'Nav__link_state_active'"
                            :exact="true"
                        >Home</router-link>
                    </li>
                </ul>
            </nav>
        </header>

        <main class="Content">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    mounted () {
        this.$store.dispatch('getAllTiles')
    }
}
</script>
