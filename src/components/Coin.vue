<template>
  <div class="coin">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.coin {
  position: relative;
  width: 75%;
  height: 75%;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 1000ms ease;
  text-align: center;

  &.black,
  &.white {
    opacity: 1;

    &::after {
      content: '';
      position: absolute;
      width: 75%;
      height: 75%;
      border-radius: 50%;
      opacity: 0.10;
    }
  }

  &.black {
    color: white;
    background-color: black;
    border-bottom-color: white;
  }

  &.white {
    color: black;
    background-color: white;
    border-bottom-color: black;
  }

  &.hint {
    transition: opacity 100ms ease;
    opacity: 0.1;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
