import Vue from 'vue'
import store from './store'

import * as ActionTypes from './constants/ActionTypes'
import * as CoinStates from './constants/CoinStates'
import * as GameStates from './constants/GameStates'

function setTile(state, tile, color) {
  Vue.set(state.board[tile.x], tile.y, color)
}

export const initialState = {
  gameState: null,
  currentTurn: CoinStates.EMPTY,
  size: 4,
  board: []
}

export default {
  [ActionTypes.END_TURN](state) {
    state.currentTurn = store.getters.nextTurn
  },

  [ActionTypes.START_GAME](state) {
    // empty board
    state.board = Array(...Array(state.size)).map(() => Array(state.size).fill(CoinStates.EMPTY))

    // default coins
    setTile(state, {x: state.size / 2 - 1, y: state.size / 2 - 1}, CoinStates.WHITE)
    setTile(state, {x: state.size / 2, y: state.size / 2 - 1}, CoinStates.BLACK)
    setTile(state, {x: state.size / 2 - 1, y: state.size / 2}, CoinStates.BLACK)
    setTile(state, {x: state.size / 2, y: state.size / 2}, CoinStates.WHITE)

    state.currentTurn = CoinStates.WHITE
    state.gameState = GameStates.STARTED
  },

  [ActionTypes.END_GAME](state) {
    state.gameState = GameStates.FINISHED
  },

  [ActionTypes.SWITCH_COINS](state, tiles) {
    tiles.forEach(tile => setTile(state, tile, state.currentTurn))
  }
}
