
<template>
    <div v-if="tile">
        <h1>{{ tile.title }}</h1>
        <p>{{ tile.text }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { find } from 'lodash'

export default {
    props: {
        id: true
    },

    mounted () {
        if (!this.getTile()) {
            this.$router.push('/')
        }
    },

    computed: {
        ...mapGetters([ 'allTiles' ]),
        tile () {
            return this.getTile()
        }
    },

    methods: {
        getTile () {
            return find(this.allTiles, { id: +this.id })
        }
    }
}
</script>
