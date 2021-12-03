<template>
  <div class="custom-select">
    <div class="custom-select__text-title">{{ title }}</div>
    <div
      class="custom-select__text-field"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ selected }}
    </div>
    <ul class="custom-select__list" v-if="areOptionsVisible">
      <li
        class="custom-select__item"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "custom-select",
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    selected: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeUnmount() {
    document.addEventListener("click", this.hideSelect);
  },
};
</script>

<style lang="scss">
/* select */
.custom-select {
  position: relative;

  &__text-title {
    @include adaptiv-value("margin-bottom", 8, 6, 1);
    color: $dark-gray;
    @include adaptiv-value("font-size", 16, 14, 1);
    font-weight: 500;
    line-height: 1.2;
  }

  &__text-field {
    position: relative;
    @include adaptiv-value("padding", 16, 14, 1);
    color: $black;
    @include adaptiv-value("font-size", 16, 14, 1);
    line-height: 1.4;
    border: 1px solid $light-gray;
    border-radius: 0.375rem;
    outline-color: $blue;
    cursor: pointer;
    transition: all 0.3s ease 0s;

    &::after {
      position: absolute;
      content: "";
      top: 50%;
      right: 0.75rem;
      width: 1rem;
      height: 1rem;
      background-image: url("~@/assets/images/select-icon.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transform: translateY(-50%);
    }

    &.active::after {
      transform: translateY(-50%) rotate(180deg);
    }
  }

  .custom-select__list {
    position: absolute;
    top: 105%;
    width: 100%;
    @include adaptiv-value("padding-top", 12, 8, 1);
    @include adaptiv-value("padding-bottom", 12, 8, 1);
    background: $white;
    border: 0.0625rem solid $light-gray;
    border-radius: 0.375rem;
    z-index: 2;
    &.hide {
      display: none;
    }
  }

  &__item {
    @include adaptiv-value("padding-top", 12, 8, 1);
    @include adaptiv-value("padding-bottom", 12, 8, 1);
    @include adaptiv-value("padding-left", 16, 14, 1);
    @include adaptiv-value("padding-right", 16, 14, 1);
    color: $dark-gray;
    @include adaptiv-value("font-size", 16, 14, 1);
    line-height: 1.4;
    cursor: pointer;

    &:hover {
      background: $gray-blue;
    }
  }
}
</style>
