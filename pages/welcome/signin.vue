<template>
  <div class="page">
    <div class="left">
      <div class="form">
        <h1 class='title'>
          <span>Добро пожаловать!</span>
          <br />
          <span>Авторизуйтесь</span>
        </h1>
        <div class="submit-form">
          <input type="text" v-model="formValues.username" placeholder="Логин" class="input-field" />
          <input type="password" v-model="formValues.password" placeholder="Пароль" class="input-field" />
          <button :disabled="!isFormValid" @click="submitForm" class="btn-submit">
            Войти
          </button>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="rigth-container">
        <h3 class="title">Приветствуем!</h3>
        <p class="sub-title">Введите свои персональные данные и начните свой поиск вместе с нами</p>
        <nuxt-link to="/welcome/signup" class="btn">Регистрация</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formValues: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      isFormValid() {
        return this.formValues.username !== '' && this.formValues.password !== '';
      }
    },
    methods: {
      submitForm() {
        this.$router.push('/store');
      }
    }
  }

</script>

<style scoped>
  .form {
    width: 540px;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
    width: 66.66666%;
    background-color: #ffffff;
    background-image: url(@/public/images/content-img/main-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .left .title {
    line-height: 130%;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 127px;
    max-width: 540px;
    font-family: 'Manrope Bold';
  }

  .left span:first-child {
    background: -webkit-linear-gradient(3.76deg, #df3749 20.71%, #580000 108.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .left span:last-child {
    color: #1A1A1A;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left .btn {
    background: linear-gradient(53.76deg, #00C581 -6.71%, #0AC2B7 108.34%);
    border-radius: 12px;
    padding: 18px 89px;
    font-family: 'Manrope Medium';
    font-size: 21px;
    line-height: 130%;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  .left .forget-pass {
    font-size: 16px;
    font-weight: 400;
    color: #858DA4;
    text-decoration: none;
    order: 3;
    cursor: pointer;
  }

  .left .forget-pass:hover {
    text-decoration: underline;
  }

  .right {
    min-width: 640px;
    width: 33.3333%;
    background: -webkit-linear-gradient(3.76deg, #f16371 20.71%, #580000 108.34%);
    position: relative;
  }

  .rigth-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 46px 24px;
    color: #ffffff;
    position: relative;
    z-index: 51;
  }

  .right::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(@/public/images/content-img/wrong-ellipse-bg-1.svg);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 50;
    filter: opacity(30%);
  }

  .rigth-container img {
    width: 224px;
    height: 102px;
    margin-bottom: 100px;
    position: relative;
    z-index: 51;
  }

  .right .title {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
    font-family: 'Manrope Medium';
    line-height: 130%;
  }

  .right .sub-title {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 32px;
    line-height: 130%;
  }

  .right .btn {
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    border-radius: 12px;
    padding: 17px 35px;
    font-family: 'Manrope Medium';
    line-height: 140%;
    font-size: 21px;
    min-width: 219px;
    text-align: center;
  }

  .toggable-lable {
    position: relative;
    margin-bottom: 20px;
  }

  .actions-adaptive {
    display: none;
  }

  .actions-adaptive-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    padding: 0 4px;
  }

  .guest-container {
    display: flex;
    margin-top: 12px;
    padding: 0 4px;
    font-size: 16px;
    font-weight: 400;
    color: #858DA4;
    text-decoration: none;
  }

  .guest-container span {
    background: linear-gradient(53.76deg, #00E394 -6.71%, #0AC2B7 108.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
    margin-left: 5px;
  }

  .btn-adaptive {
    background: linear-gradient(53.76deg, #00E394 -6.71%, #0AC2B7 108.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .btn-submit {
    width: 240px;
  }

  a {
    color: white;
  }

  .submit-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .input-field {
    border: 1px solid #D8DDE6;
    backdrop-filter: blur(4px);
    background-color: transparent;
    border-radius: 12px;
    font-size: 18px;
    padding: 20px 30px 20px 24px;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    position: relative;
    overflow: hidden;
    transition: all .3s ease;
    box-shadow: none;
  }

  .input-field:hover {
    border-color: #df495862;
  }

  .input-field:focus {
    border-color: #df3749;
  }

  .btn-submit {
    padding: 12px;
    font-size: 18px;
    background-color: #df3749;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-submit:disabled {
    background-color: #df495862;
    cursor: not-allowed;
  }

  .btn-submit:not(:disabled):hover {
    background-color: #c42e3f;
  }

  @media (max-width: 1250px) {
    .right {
      min-width: auto;
      width: 550px;
    }

    .left .forget-pass {
      order: initial;
    }

    .actions {
      flex-wrap: wrap;
      gap: 16px;
    }
  }

  @media (max-width: 1050px) {
    .right {
      display: none;
    }

    .left {
      width: 100%;
      height: 100%;
    }

    .actions {
      display: none;
    }

    .actions-adaptive {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 560px) {
    .left .title {
      margin-bottom: 61px;
      max-width: none;
      width: 100%;
      font-size: 27px;
    }

    .form {
      width: 100%;
    }
  }

</style>
