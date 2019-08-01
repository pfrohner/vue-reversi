<template>
  <div class="game">
    <div class="board-wrapper">
      <board />
    </div>
    <div
      v-if="!playerCanPlay && !gameIsOver || gameIsOver"
      class="info"
    >
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
        <p v-else>Game over, <strong>{{ winner === 1 ? 'white' : 'black' }} won!</strong></p>
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
  position: absolute;
  display: block;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.info {
  position: absolute;
  min-width: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 6px 10px #000;
}
</style>
