
<style lang="sass">

.Tile
	position: relative
	display: block

	min-height: 100%
	padding: 1rem

	color: white

	&:before
		content: ''

		position: absolute
		top: 0
		left: 0

		width: 100%
		height: 100%

		background: rgba(0, 0, 0, .5)
	
	&__wrapper
		position: relative

	&__title

	&__description

</style>

<template>
	<div class="Grid">
		<div class="Grid__cell" :class="[`Grid__cell_${tile.type}`]" v-for="tile in allTiles">
			<div class="Grid__box">
				<a class="Tile" :style="{ backgroundImage: 'url(http://placekitten.com/g/300/300)' }">
					<div class="Tile__wrapper">
						<h2 class="Tile__title">{{ tile.title }}</h2>
						<p class="Tile__desc">{{ tile.description }}</p>
					</div>
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
