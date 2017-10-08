
<style lang="sass">

.Tile
	
	&__title

	&__description

</style>

<template>
	<div class="Grid">
		<div class="Grid__cell" :class="[`Grid__cell_${tile.type}`]" v-for="tile in allTiles">
			<div class="Grid__box">
				<a class="Tile" :style="{ backgroundImage: 'url(http://placekitten.com/g/300/300)' }">
					<h2 class="Tile__title">{{ tile.title }}</h2>
					<p class="Tile__desc">{{ tile.description }}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    created () {
        this.$store.dispatch('getAllTiles')
    },

    computed: mapGetters([ 'allTiles' ])
}
</script>
