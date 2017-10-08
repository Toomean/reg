
<style lang="sass">

.Tile
	position: relative
	display: block

	height: 100%
	padding: .5rem 1rem

	color: white
	text-shadow: 1px 1px rgba(0, 0, 0, .9)

	&:hover
		&:before
			background: rgba(0, 0, 0, .25)

	&:before
		transition: background-color .2s

		content: ''

		position: absolute
		top: 0
		left: 0

		width: 100%
		height: 100%

		background: rgba(0, 0, 0, .5)
	
	&__wrapper
		height: 100%
		position: relative
		display: flex
		flex-direction: column

	&__title
		margin: 0 0 35%

	&__desc
		margin: auto 0 0

</style>

<template>
	<div class="Grid">
		<div class="Grid__cell" :class="[`Grid__cell_${tile.type}`]" v-for="tile in allTiles">
			<div class="Grid__box">
				<a class="Tile" :style="getRandomKitten()">
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
import { random } from 'lodash'
import kittens from 'shared/kittens'

export default {
    created () {
        this.$store.dispatch('getAllTiles')

        console.log(kittens)
    },

    computed: mapGetters([ 'allTiles' ]),

    methods: {
    	getRandomKitten () {
    		return kittens[random(0, kittens.length - 1)]
    	}
    }
}
</script>
