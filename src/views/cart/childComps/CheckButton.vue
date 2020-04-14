<template>
  <div>
    <div :class="isChecked ? 'icon-selected' : 'icon-noselected'" class="icon">
      <img src="~/assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name:'CheckButton',
  props: {
    isChecked: true
  }
}
</script>
<style scoped>
  .icon {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
  }
  .icon-selected {
    border: 2px solid var(--color-tint);
    background-color: var(--color-tint);
  }
  .icon-noselected {
    border: 2px solid #ccc;
  }
</style>