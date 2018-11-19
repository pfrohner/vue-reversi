<template>
  <div class="board">
    <template v-for="(rows, x) in board">
      <tile
        v-for="(tile, y) in rows"
        :key="`${x}_${y}`"
        :style="{ width: 100 / size + '%', height: 100 / size + '%' }"
        :state="getTileState({ x, y })"
        :hint="isTilePlayable({ x, y })"
        @click.native="play({ x,y })"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Tile from '@/components/Tile'

export default {
  components: {
    Tile
  },
  computed: {
    ...mapGetters([
      'board',
      'size',
      'getTileState',
      'isTilePlayable'
    ])
  },
  methods: {
    ...mapActions([
      'play'
    ])
  }
}
</script>

<style lang="scss">
.board {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  height: 400px;
  width: 400px;
  background: green;
  margin: auto;

  .tile {
    flex-grow: 1;
  }
}
</style>
