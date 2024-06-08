<template>
    <div class="modal" v-if="isVisible">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div>
            <label for="username">Benutzername:</label>
            <input type="text" id="username" v-model="username" />
          </div>
          <div>
            <label for="password">Passwort:</label>
            <input type="password" id="password" v-model="password" />
          </div>
          <button type="submit">Einloggen</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['isVisible'],
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
      login() {
        // Login-Logik hier
        console.log('Logging in:', this.username, this.password);
        this.closeModal();
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    width: 300px;
    text-align: center;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 1.5rem;
  }
  
  button {
    background-color: #34396E;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #726FB2;
  }
  </style>
  