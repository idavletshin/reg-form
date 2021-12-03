<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "base-button",
};
</script>

<style lang="scss">
/* color */
.--blue {
  background: $blue;
}

/* button */
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @include adaptiv-value("padding-top", 16, 14, 1);
  @include adaptiv-value("padding-bottom", 16, 14, 1);
  color: $white;
  @include adaptiv-value("font-size", 16, 14, 1);
  @include adaptiv-value("line-height", 24, 20, 1);
  font-weight: 500;
  border: 0;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
}
.btn--md {
  max-width: 25rem;
}
.btn.--blue:hover {
  background: darken($blue, 5%);
}
.btn.--blue:active {
  background: $blue;
}
.btn.--blue:disabled {
  color: $gray;
  background: $light-gray;
}
</style>
