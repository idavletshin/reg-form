<template>
  <div class="container">
    <base-button class="btn--md --blue" @click="showModal"
      >Регистрация</base-button
    >
    <the-modal class="modal-registration" v-model:show="modalVisible">
      <h2 class="modal-content__title">{{ modalRegistration.title }}</h2>
      <div class="modal-content__login modal-login">
        <span class="modal-login__text"> Уже есть аккаунт? </span>
        <a class="modal-login__link login-link" href="#">Войти</a>
      </div>
      <the-form @submit="checkForm">
        <custom-input
          v-for="field in regFields"
          class="form-group"
          :key="field.fieldId"
          :title="field.title"
          :name="field.name"
          :placeholder="field.placeholder"
          :message="field.message"
          :fieldId="field.fieldId"
        />
        <custom-select
          class="form-group"
          :title="langOptions.title"
          :selected="langOptions.selected"
          :options="langOptions.options"
          @select="optionSelect"
        />

        <custom-checkbox class="form-group" />

        <base-button class="--blue">Зарегистрироваться</base-button>
      </the-form>
    </the-modal>
  </div>
</template>

<script>
import TheForm from "@/components/TheForm/TheForm";

export default {
  components: {
    TheForm,
  },
  data() {
    return {
      modalRegistration: {
        title: "Регистрация",
      },
      modalVisible: false,
      regFields: [
        {
          title: "Имя",
          fieldId: "userName",
          name: "userName",
          placeholder: "Имя пользователя",
          message: "Введено не корректное значение",
        },
        {
          title: "Email",
          fieldId: "userEmail",
          name: "userEmail",
          placeholder: "Введите ваш email",
          message: "Введено не корректное значение",
        },
        {
          title: "Номер телефона",
          fieldId: "userPhoneNumber",
          name: "userPhoneNumber",
          placeholder: "Введите номер телефона",
          message: "Введено не корректное значение",
        },
      ],
      langOptions: {
        title: "Язык",
        selected: "Выберите язык",
        options: [
          { name: "Русский", value: "Ru" },
          { name: "Английский", value: "En" },
          { name: "Китайский", value: "Chn" },
          { name: "Испанский", value: "Esp" },
        ],
      },
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    optionSelect(option) {
      this.langOptions.selected = option.name;
    },
    checkForm(e) {
      // if (this.userName && this.userEmail && this.userPhoneNumber) {
      if (this.userName) {
        this.message = "sdfsdfsd";
        return true;
      } else {
        this.message = "23423";
      }
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss">
#app {
  min-height: inherit;
}

.modal-registration .modal-content {
  max-width: 28.75rem;

  &__login {
    color: $black;
    @include adaptiv-value("font-size", 16, 14, 1);
    line-height: 1.4;
  }
}

.login-link {
  color: $blue;
  text-decoration: none;
}
</style>
