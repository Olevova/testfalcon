<template>
  <ContainerApp>
    <div class="form">
      <TitleApp
        :line="false"
        :titleText="formSubmitted ? titleTextWhenSubmitted : titleTextDefault"
        :size="'h2'"
        color="#FFFFFF"
      />
      <form
        class="form__element"
        @submit.prevent="handlerform"
        v-if="!formSubmitted"
      >
        <input
          placeholder="First Name"
          type="text"
          v-model="firstName"
          pattern="[a-zA-Zа-яА-Я]+"
          required
        />

        <input
          placeholder="Second Name"
          type="text"
          v-model="lastName"
          pattern="[a-zA-Zа-яА-Я]+"
          required
        />

        <input placeholder="Email" type="email" v-model="email" required />

        <input
          placeholder="Address"
          v-model="address"
          pattern="[a-zA-Zа-яА-Я]+"
          required
        />

        <ButtonApp type="submit" :text="'Submit'" />
      </form>
      <div class="answer" v-if="formSubmitted">
        <p><span>FirstName: </span>{{ firstName }}</p>
        <p><span>LastName: </span>{{ lastName }}</p>
        <p><span>Email: </span>{{ email }}</p>
        <p><span>Address: </span>{{ address }}</p>
        <ButtonApp type="button" :text="'back'" @click="clearform" />
      </div>
    </div>
  </ContainerApp>
</template>

<script>
import ButtonApp from "../components/Button/Button.vue";
import ContainerApp from "../components/Shared/Container.vue";
import TitleApp from "../components/Shared/TitleApp.vue";
export default {
  name: "FormPage",
  components: {
    ButtonApp,
    ContainerApp,
    TitleApp,
  },

  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      formSubmitted: false,
      titleTextDefault: "Send your data",
      titleTextWhenSubmitted: "Hello !!!",
    };
  },

  methods: {
    clearform() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.address = "";
      this.formSubmitted = false;
    },
    handlerform() {
      console.log("First Name:", this.firstName);
      console.log("Last Name:", this.lastName);
      console.log("Email:", this.email);
      console.log("Address:", this.address);
      this.formSubmitted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 160px;
  margin-bottom: 100px;
  width: 100%;
  height: 560px;
  border-radius: 14px;
  background-image: url("../../public/image/form/Subtract.jpg");
  background-position: center;
  object-fit: cover;
  background-repeat: no-repeat;

  .form__element {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 17px;
    padding-bottom: 60px;

    input {
      color: #888888;
      width: 392px;
      height: 58px;
      border-radius: 28px;
      border: 1px solid #c8c2c6;
      outline: none;
      padding: 15px 30px;
      margin-bottom: 16px;
      font-size: 18px;

      &:last-of-type {
        margin-bottom: 24px;
      }
    }
  }
  padding: 60px 0;
}
.title-center.color {
  padding-top: 60px;
  h2.title__size {
    color: #ffffff !important;
  }
}
.answer {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 17px;
  padding-bottom: 60px;

  > p {
    padding: 15px;
    color: #ffffff;
    font-size: 24px;
  }
}
</style>
