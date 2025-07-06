<template>
  <div class="login">
    <div class="rigth-login">
      <div class="form">
        <div class="top">
          <nuxt-link to="/"
            ><img class="logo" src="/image/logo.svg"
          /></nuxt-link>
          <p>مرحباً بك.</p>
        </div>
        <form class="bottom" @submit.prevent="userLogin">
          <p v-if="!! errM" class="err-masseg">{{errM}}</p>
          <div>
            <label :class="{ 'active-input-value': login.email != '' }"
              >البريد الإلكتروني</label
            >
            <input
              v-model="login.email"
              type="text"
              name="email"
              autocomplete="on"
              :class="{ 'active-input-color': login.email != '' }"
            />
          </div>
          <p class="err">{{ err.email }}</p>

          <div>
            <label :class="{ 'active-input-value': login.password != '' }"
              >كلمة المرور</label
            >
            <input
              v-model="login.password"
              type="password"
              autocomplete="on"
              :class="{ 'active-input-color': login.password != '' }"
            />
          </div>
          <p class="err">{{ err.password }}</p>

          <div class="submit">
                                  <button  type="submit">

              <div v-if="loadingButton" class="loadingButton"><span></span></div>
               <span v-else>تسجيل الدخول</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="left-login">
      <img src="/image/icon-w.svg" />
      <div class="anmition">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- <form @submit.prevent="userLogin">
      <div>
        <label>email</label>
        <input v-model="login.email" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form> -->
  </div>
</template>

<script>
import $ from 'jquery/dist/jquery.min.js';
export default {
  layout: 'clear',
  middleware: ['logenin'],
  data() {
    return {
      login: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
      err: {
        email: '',
        password: '',
      },
      inputIsValue: '',
      loadingButton : false,
      status : true,
      errM : ""
    };
  },
  mounted() {
    // if ($("input").val() !== '') {
    //   $("input").siblings('label').addClass('active-input-value');
    //   $("input").addClass('active-input-color');
    // } else {
    //   $("input").siblings('label').removeClass('active-input-value');
    //   $("input").removeClass('active-input-color');
    // }

    // console.log(this.$fire.auth.currentUser)
    // console.log(getCookie())

    $('input').on('input focus', function () {
      if ($(this).val() !== '') {
        $(this).siblings('label').addClass('active-input-value');
        $(this).addClass('active-input-color');
      } else {
        $(this).siblings('label').removeClass('active-input-value');
        $(this).removeClass('active-input-color');
      }
    });

    // $('.aggre').on('click', function () {
    //   $(this).siblings('input').click();
    //   $(this).find('span').toggleClass('aggre-active');
    // });
  },
  methods: {
   async userLogin() {
      if (this.status === true) {
              // async
      const loginfo = {
        user: false,
        password: false,
      };
      //

      const myThis = this;

      //
      // eslint-disable-next-line prefer-regex-literals
      const regs = new RegExp(/([-!$%^&*()_+|~=`{}:";'<>?,/ \u0621-\u064A])/g);
      // if()
      // console.log(regs.test(this.login.email))
      if (this.login.email.includes('@') === false) {
        this.err.email = 'يجب ان يحتوي على @.';
        loginfo.user = false;
      } else if (this.login.email.split('@')[0].trim() === '') {
        this.err.email = 'الرجاء كتابة الجزء الذي يسبق علامة @.';
        loginfo.user = false;
      } else if (this.login.email.split('@')[1].trim() === '') {
        this.err.email = 'الرجاء كتابة الجزء الذي يلي علامة @.';
        loginfo.user = false;
      } else if (regs.test(this.login.email) === true) {
        this.err.email = 'يرجى التحقق من البريد الإلكتروني';
        loginfo.user = false;
      } else {
        this.err.email = '';
        loginfo.user = true;
      }

      if (this.login.password.trim() === '') {
        this.err.password = 'يرجى كتابة كلمة المرور';
        loginfo.password = false;
      } else {
        this.err.password = '';
        loginfo.password = true;
      }

      if (loginfo.user === true && loginfo.password === true) {
        this.err.email = '';
        this.errM = "";
        this.status = false;
        this.loadingButton = true;
       await this.$fire.auth
          .signInWithEmailAndPassword(myThis.login.email, myThis.login.password)
          .then(async(res) => {

         await myThis.$fire.firestore
              .collection('user')
              .doc(res.user.uid)
              .get().then(function(data) {

                 myThis.$store.commit("setUser", data.data())


              });

              myThis.$store.commit('isLogin', true);

          //  myThis.$fire.auth.onAuthStateChanged(function () {
          //     myThis.$store.commit('isLogin', !!myThis.$fire.auth.currentUser);
          //   });
          }).catch(() => {
            this.errM = "يرجى التحقق من بيانات تسجيل الدخول"
        this.status = true;
        this.loadingButton = false;
          });

        // try {
        //   // const response = await this.$auth.loginWith('local', {
        //   //   data: this.login,
        //   // });
        // //  this.$auth.user = true;
        // //  console.log(this.$auth)
        //   // this.$auth.user = {
        //   //   name : "ff",
        //   //   email : "gg"
        //   // }
        //  // console.log(this.$auth)
        //   // console.log(response);
        // } catch (err) {
        //   // this.err.email = err.response.data.error
        //   console.log(err)
        // }

        // console.log(this.$fire.auth.currentUser.getIdToken())
        // console.log(this.$fire.auth.createCustomToken())

        // this.$fire.auth.verifySessionCookie("eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhNGY4N2ZmNWQ5M2ZhNmVhMDNlNWM2ZTg4ZWVhMGFjZDJhMjMyYTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGF3YWhhamEiLCJhdWQiOiJ0YXdhaGFqYSIsImF1dGhfdGltZSI6MTY0OTYxNTYyNiwidXNlcl9pZCI6IlZ6cFFmcmQ4VGtQeUVLUkNSRWFmUjJscUd1SDIiLCJzdWIiOiJWenBRZnJkOFRrUHlFS1JDUkVhZlIybHFHdUgyIiwiaWF0IjoxNjQ5NjE1NjI2LCJleHAiOjE2NDk2MTkyMjYsImVtYWlsIjoiZXZlLmhvbHRAcmVxcmVzLmluIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImV2ZS5ob2x0QHJlcXJlcy5pbiJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.XYw1BMKJmdp1nLd1EzTrNKnHk-7uMYXOqjwRZT1TVfCKYLk8NMuzQhD2VbZa1GQs4pUmojSzoyDmlAqSjhs5Zv3j9k1MQgflYf3AD7t_blEJhDhkhEmP7KlqCS7FtF4xmNlCafvXUihfPIpXYN6OcEk_-VZ5us8YgjJkKmUM5-GyTAM1I8vAy_SI54T1WXMsP1omh_TecdMHbKQm_-R5IicK449JS8IJYdf_B3bUN0NRekGGExyHW7F4f9g9pM4pDmFoBJB0zBONDoiRdqht1aA0nrWo0WeyqmqXWgwaJBYjQBfUFmWFu6y2-qBGBe7SzkynfkCJQ7i8afw1wdUoMg").then(function () {
        //   console.log("g")
        // })

        // this.$fire.auth.getUser("VzpQfrd8TkPyEKRCREafR2lqGuH2").then(res => {
        //   console.log("g")
        // })
      }
      }
    },
  },
};
</script>
