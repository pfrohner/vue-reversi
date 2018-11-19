<template>
  <div class="game">
    <div class="board-wrapper">
      <board />
    </div>
    <div class="info">
      <div v-if="!playerCanPlay && !gameIsOver">
        <p>No available moves</p>
        <button
          class="button"
          @click="endTurn"
        >
          Pass
        </button>
      </div>
      <div v-if="gameIsOver">
        <p v-if="isTie">It's a tie!</p>
        <p v-else>Game over, winner is: {{ winner === 1 ? 'white' : 'black' }}</p>
        <button
          class="button"
          @click="startGame"
        >
          Restart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import store from '@/store'
import Board from '@/components/Board'

export default {
  components: {
    Board
  },
  computed: {
    ...mapGetters([
      'currentColor',
      'playerCanPlay',
      'gameIsOver',
      'winner',
      'isTie'
    ])
  },
  created () {
    store.dispatch('startGame')
  },
  methods: {
    ...mapActions([
      'endTurn',
      'startGame'
    ])
  }
}
</script>

<style lang="scss" scoped>
.game {
  display: block;
  margin: 0 auto;
}
</style>
