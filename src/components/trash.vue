<template>
  <div class="form-group custom-input">
    <label class="custom-input__text-title" for="userName">Имя</label>
    <input
      class="custom-input__text-field"
      id="userName"
      type="text"
      placeholder="Имя пользователя"
    />
    <div class="custom-input__helper-text">
      <p class="error-text">Введено не корректное значение</p>
    </div>
  </div>
  <div class="form-group custom-input">
    <label class="custom-input__text-title" for="userEmail">Email</label>
    <input
      class="custom-input__text-field"
      id="userEmail"
      type="text"
      placeholder="Введите ваш email"
    />
    <div class="form-group__helper-text error">
      <p class="error-text">Введено не корректное значение</p>
    </div>
  </div>
  <div class="form-group custom-input">
    <label class="custom-input__text-title" for="userPhoneNumber"
      >Номер телефона</label
    >
    <input
      class="custom-input__text-field"
      id="userPhoneNumber"
      type="text"
      placeholder="Введите номер телефона"
    />
    <div class="custom-input__helper-text">
      <p class="error-text">Введено не корректное значение</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
