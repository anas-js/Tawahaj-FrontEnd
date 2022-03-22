<template>
  <div>

    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.username" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
        
     // this.$auth.setUser({id:1,email:"george.bluth@reqres.in",first_name:"George",last_name:"Bluth",avatar:"https://reqres.in/img/faces/1-image.jpg"})
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
