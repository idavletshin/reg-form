<template>
  <div class="custom-input">
    <label class="custom-input__text-title" :for="fieldId">{{ title }}</label>
    <input
      class="custom-input__text-field"
      v-model="field.fieldContent"
      :id="fieldId"
      type="text"
      :placeholder="placeholder"
    />
    <div class="custom-input__helper-text">
      <p class="error-text">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "custom-input",
  data() {
    return {
      field: {
        fieldContent: "",
        type: "string",
        requred: true,
      },
    };
  },
  props: ["fieldContent", "title", "fieldId", "name", "placeholder", "message"],
};
</script>

<style lang="scss">
.custom-input {
  position: relative;
  display: flex;
  flex-direction: column;

  &__text-title {
    @include adaptiv-value("margin-bottom", 8, 6, 1);
    color: $dark-gray;
    @include adaptiv-value("font-size", 16, 14, 1);
    font-weight: 500;
    line-height: 1.2;
  }

  &__text-field {
    @include adaptiv-value("padding", 16, 14, 1);
    color: $black;
    @include adaptiv-value("font-size", 16, 14, 1);
    line-height: 1.4;
    border: 1px solid $light-gray;
    border-radius: 0.375rem;
    outline-color: $blue;

    &::placeholder {
      color: $light-blue;
    }

    &::-webkit-input-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    &::-moz-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    &:-moz-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    &:-ms-input-placeholder {
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    &:focus::-webkit-input-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:focus::-moz-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:focus:-moz-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:focus:-ms-input-placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  &__helper-text {
    position: absolute;
    left: 0;
    // display: none;
    @include adaptiv-value("bottom", -24, -18, 1);
    @include adaptiv-value("font-size", 14, 12, 1);
    line-height: 1.2;

    &.error {
      display: block;
    }
  }
}
</style>
