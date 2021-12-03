<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal__content modal-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss">
/* modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  @include adaptiv-value("padding", 40, 15, 1);
  background-color: rgba(15, 15, 16, 0.3);
  overflow-y: auto;
  z-index: 10;
}

.modal-content {
  margin: auto;
  @include adaptiv-value("margin-top", 80, 0, 1);
  @include adaptiv-value("padding-left", 30, 20, 1);
  @include adaptiv-value("padding-right", 30, 20, 1);
  @include adaptiv-value("padding-top", 40, 20, 1);
  @include adaptiv-value("padding-bottom", 40, 20, 1);
  background: $white;
  border-radius: 1.5rem;
  user-select: none;

  &__title {
    @include adaptiv-value("margin-bottom", 8, 6, 1);
    @include adaptiv-value("font-size", 34, 24, 1);
    color: $black;
    font-weight: 700;
    line-height: 1.3;
  }

  &__form {
    @include adaptiv-value("margin-top", 52, 40, 1);
  }
}
</style>
