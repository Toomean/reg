
import api from 'api'
import * as types from '../mutation-types'

const state = {
	tiles: []
}

const getters = {
	allTiles: state => state.tiles
}

const actions = {
	getAllTiles ({commit}) {
		api.get('/tiles')
		.then(rs => {
			commit(types.SET_TILES, { tiles: rs.data.tiles  })
		})
	}
}

const mutations = {
	[types.SET_TILES] (state, { tiles }) {
		state.tiles = tiles
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}