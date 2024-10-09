<template>
    <div class="main">
      <div class="main-container">
        <Header />
        <Navigation />
        <div class="info">
          <div class="title" data-aos="fade-up" data-aos-delay="100">Профиль</div>
          <div class="profile-info">
            <div class="profile-field" v-for="(field, key) in fields" :key="key" data-aos="fade-up" data-aos-delay="200">
              <label :for="key">{{ field.label }}</label>
              <input
                type="text"
                :id="key"
                v-model="field.value"
                class="profile-input"
              />
            </div>
            <button class="save-button" @click="saveProfile" data-aos="fade-up" data-aos-delay="200">
                Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navigation from '@/components/UI/Navigation.vue';
  import Header from '@/components/UI/Header.vue';
  
  export default {
    name: 'BlockPage',
    components: {
      Navigation,
      Header,
    },
    data() {
      return {
        fields: {
          firstName: { label: 'Имя', value: '' },
          lastName: { label: 'Фамилия', value: '' },
          email: { label: 'Почта', value: '' },
          phone: { label: 'Телефон', value: '' },
        },
      };
    },
    methods: {
        saveProfile() {
            console.log("Profile saved", this.fields);
        },
    },
  };
  </script>
  
  <style scoped>
  .title {
    font-size: 24px;
    font-family: 'Manrope Bold';
    margin-bottom: 48px;
  }
  
  .profile-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .profile-field {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  label {
    width: 150px;
    font-size: 21px;
    color: gray;
    font-family: 'Manrope Light';
  }

  .profile-input {
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
    max-width: 600px;
  }

  .profile-input:hover {
    border-color: #df495862;
  }

  .profile-input:focus {
    border-color: #df3749;
  }

  .save-button {
    width: 100%;
    padding: 20px 30px 20px 24px;
    background-color: #df3749;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-family: 'Manrope Bold';
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-align: center;
    max-width: 600px;
    margin-left: 166px;
  }
  
  .save-button:hover {
    background-color: #b82d3b;
  }
  </style>
  