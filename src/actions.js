import * as types from './constants/ActionTypes'

export const startGame = ({ commit }) => {
  commit(types.START_GAME)
}

export const endTurn = ({ commit }) => {
  commit(types.END_TURN)
}

export const play = ({ commit, getters }, position) => {
  if (getters.isTilePlayable(position)) {
    // switch all the coins related to position
    commit(types.SWITCH_COINS, [position, ...getters.availableMoves[position.x][position.y]])
    // and end the turn
    commit(types.END_TURN)
  }
}
