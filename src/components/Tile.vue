<template>
  <div class="tile">
    <coin :class="hint ? 'hint ' + currentColor : coinColor" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { COLORS } from '@/constants/CoinStates'
import Coin from '@/components/Coin'

export default {
  components: {
    Coin
  },
  props: {
    hint: Boolean,
    state: {
      type: Number,
      required: true,
      default: 0,
      validator: (value) => [0, 1, 2].includes(value)
    }
  },
  computed: {
    ...mapGetters([
      'currentColor'
    ]),
    coinColor: function () {
      return COLORS[this.state]
    }
  }
}
</script>

<style lang="scss" scoped>
.tile {
  border: 2px solid rgba(0,0,0,0.5);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
