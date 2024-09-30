<template>
  <div class="page">
    <div class="left">
      <div class="left-container">
        <!-- <img src="@/images/icons/logo-white.svg" alt=""> -->
        <h3 class="title">Есть аккаунт?</h3>
        <p class="sub-title">Введите свои персональные данные и начните свой поиск вместе с нами</p>
        <nuxt-link to="signin" class="btn">Вход</nuxt-link>
      </div>
    </div>
    <div class="right">
      <div action="submit" class="form">
        <h1 class='title'>
          <span>Добро пожаловать!</span>
          <br />
          <span>Зарегистрируйтесь</span>
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
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 46px 24px;
    width: 66.66666%;
    background-color: #ffffff;
    background-image: url(@/public/images/content-img/main-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .right .title {
    line-height: 130%;
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 65px;
    max-width: 540px;
    font-family: 'Manrope Bold';
  }

  .right span:first-child {
    background: -webkit-linear-gradient(3.76deg, #f16371 20.71%, #580000 108.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .right span:last-child {
    color: #1A1A1A;
  }

  .form {
    width: 540px;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .right .btn {
    background: linear-gradient(53.76deg, #00E394 -6.71%, #0AC2B7 108.34%);
    border-radius: 12px;
    padding: 18px 89px;
    font-family: 'Manrope Medium';
    font-size: 21px;
    line-height: 130%;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }

  .left {
    min-width: 640px;
    width: 33.3333%;
    background: -webkit-linear-gradient(3.76deg, #f16371 20.71%, #580000 108.34%);
    position: relative;
  }

  .left-container {
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

  .left::before {
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

  .left-container img {
    width: 224px;
    height: 102px;
    margin-bottom: 100px;
    position: relative;
    z-index: 51;
  }

  .left .title {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
    font-family: 'Manrope Medium';
    line-height: 130%;
  }

  .left .sub-title {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 32px;
    line-height: 130%;
  }

  .left .btn {
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

  .beta {
    color: #858DA4;
    letter-spacing: normal;
    font-family: 'Manrope Medium';
    font-size: 18px;
  }

  .beta:hover {
    text-decoration: underline;
  }

  .actions-adaptive {
    display: none;
  }

  .actions-adaptive-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn-adaptive {
    font-size: 14px;
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


  .custom-checkbox {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: transparent;
    border-radius: 3px;
    margin-right: 8px;
    position: relative;
    top: -1px;
    vertical-align: middle;
    border: 1px solid #00e394b8;
    cursor: pointer;
  }

  .checkbox {
    position: absolute;
    opacity: 0;
  }

  .checkbox:checked+.custom-checkbox {
    background-color: #00e394b8;
    border: none;
  }

  .checkbox:checked+.custom-checkbox::before {
    content: '\2713';
    font-size: 12px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  label {
    width: 100%;
    font-size: 16px;
  }

  label a {
    color: #00e394b8;
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
    .left {
      min-width: auto;
      width: 550px;
    }

    .actions {
      flex-wrap: wrap;
      gap: 16px;
    }
  }

  @media (max-width: 1050px) {
    .left {
      display: none;
    }

    .right {
      width: 100%;
      height: 100vh;
    }

    .actions {
      display: none;
    }

    .actions-adaptive {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .beta {
      font-size: 14px;
    }
  }

  @media (max-width: 560px) {
    .right .title {
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
