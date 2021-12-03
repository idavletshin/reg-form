<template>
  <form class="modal-content__form form" action="#">
    <slot></slot>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
}
.form-group {
  @include adaptiv-value("margin-bottom", 32, 24, 1);
}

.form-group.checkbox {
  display: inline-flex;
}
</style>
