<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.task_name" name="task_name" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.due_date" name="due_date" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  data() {
    return {
      login: {
        task_name: 'dd',
        due_date: '2023',
      },
    };
  },
  methods: {
    userLogin() {
      //  const form = new FormData();
      //  form.append("gg","gg");
      //   axios.post("http://localhost/PhP/app/add.php", {responseType: 'text'}, {
      //     free : "Gs"
      //   });
      // const goldData = new FormData();
      // goldData.append("gg","gg");
      // axios({
      //   url: 'http://localhost/PhP/app/add.php',
      //   method: 'post',
      //   data: goldData
      // });
    },
  },
};
</script>

