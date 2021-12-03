<template>
  <div class="checkbox">
    <input
      class="custom-checkbox"
      type="checkbox"
      id="terms"
      name="terms"
      value="Confidentiality terms"
    />
    <label class="custom-checkbox-text" for="terms"
      >Принимаю
      <a class="custom-checkbox-text__link" href="#">условия</a>
      использования</label
    >
  </div>
</template>

<script>
export default {
  name: "custom-checkbox",
};
</script>

<style lang="scss">
/* checkbox */

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;

  &-text {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 1.875rem;
    color: $dark-gray;
    @include adaptiv-value("font-size", 16, 14, 1);
    font-weight: 500;
    user-select: none;
    cursor: pointer;

    &::before {
      content: "";
      display: inline-block;
      @include adaptiv-value("width", 28, 24, 1);
      @include adaptiv-value("height", 28, 24, 1);
      flex-shrink: 0;
      flex-grow: 0;
      margin-left: -1.875rem;
      border: 0.0625rem solid $light-gray;
      border-radius: 0.25em;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
  }

  &-text__link {
    margin: 0 0.25rem;
    color: $blue;
  }

  /* стили при наведении курсора на checkbox */
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: $blue;
  }

  /* стили для активного чекбокса (при нажатии на него) */
  &:not(:disabled):active + label::before {
    border-color: $blue;
    border-width: 0.125rem;
  }

  /* стили для чекбокса, находящегося в фокусе */
  &:focus + label::before {
    box-shadow: 0 0 0 0.2rem rgba(8, 128, 174, 0.25);
  }

  /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
  &:focus:not(:checked) + label::before {
    border-color: $blue;
    border-width: 0.125rem;
  }

  /* стили для чекбокса, находящегося в состоянии checked */
  &:checked + label::before {
    background-image: url("~@/assets/images/checkbox-icon.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
    border-color: $blue;
    border-width: 0.125rem;
    // background-image: url(./assets/images/checkbox-icon.svg);
  }

  /* стили для чекбокса, находящегося в состоянии disabled */
  &:disabled + label::before {
    background-color: #light-gray;
  }
}
</style>
