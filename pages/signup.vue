<template>
  <div class="login">
    <div class="rigth-login">
      <div class="form">
        <div class="top">
          <nuxt-link to="/"
            ><img class="logo" src="/image/logo.svg"
          /></nuxt-link>
          <p>هيا لنبدأ بصنع حسابك.</p>
        </div>
        <form class="bottom" @submit.prevent="userSingup">
          <div>
            <label :class="{ 'active-input-value': singup.name != '' }"
              >الأسم</label
            >
            <input
              v-model="singup.name"
              type="text"
              :class="{ 'active-input-color': singup.name != '' }"
            />
          </div>
          <p class="err">{{ err.name }}</p>

          <div>
            <label :class="{ 'active-input-value': singup.username != '' }"
              >اسم المستخدم</label
            >
            <input
              v-model="singup.username"
              type="text"
              :class="{ 'active-input-color': singup.username != '' }"
            />
          </div>
          <p class="err">{{ err.username }}</p>

          <div>
            <label :class="{ 'active-input-value': singup.email != '' }"
              >البريد الإلكتروني</label
            >
            <input
              v-model="singup.email"
              type="text"
              :class="{ 'active-input-color': singup.email != '' }"
            />
          </div>
          <p class="err">{{ err.email }}</p>

          <div>
            <label :class="{ 'active-input-value': singup.password != '' }"
              >كلمة المرور</label
            >
            <input
              v-model="singup.password"
              type="password"
              :class="{ 'active-input-color': singup.password != '' }"
            />
          </div>
          <p class="err">{{ err.password }}</p>

          <div>
            <label
              :class="{ 'active-input-value': singup.confirm_password != '' }"
              >تأكيد كلمة المرور</label
            >
            <input
              v-model="singup.confirm_password"
              type="password"
              :class="{ 'active-input-color': singup.confirm_password != '' }"
            />
          </div>
          <p class="err">{{ err.confirm_password }}</p>

          <div class="submit">
            <div>
              <input v-model="singup.aggre" type="checkbox" />
              <div class="aggre">
                <span :class="{ 'aggre-active': singup.aggre === true }"
                  ><i class="ri-check-line"></i
                ></span>
              </div>
              <p>
                الموافقة على <a href="/" class="link-o">سياسة الخصوصية</a> و
                <a href="/" class="link-o">الشروط و الأحكام</a>.
              </p>
            </div>
            <p class="err">{{ err.aggre }}</p>
            <button type="submit">

              <div v-if="loadingButton" class="loadingButton"><span></span></div>
               <span v-else>انشاء الحساب!</span>
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
   middleware : ["logenin"],
  data() {
    return {
      singup: {
        name: 'محمد',
        username: 'rakan',
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
        confirm_password: 'cityslicka',
        aggre: false,
      },
      err: {
        name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        aggre: '',
      },
      status : true,
      loadingButton : false
    }
  },
  mounted() {
        // console.log(this.$fire.auth.currentUser)
    // console.log(this.$fire.auth.currentUser.getIdToken().then(function (id) {
    //   console.log(id)
    // }))








    $('input').on('input focus', function () {
      if ($(this).val() !== '') {
        $(this).siblings('label').addClass('active-input-value');
        $(this).addClass('active-input-color');
      } else {
        $(this).siblings('label').removeClass('active-input-value');
        $(this).removeClass('active-input-color');
      }
    });

    $('.aggre').on('click', function () {
      $(this).siblings('input').click();
      $(this).find('span').toggleClass('aggre-active');
    });
  },
  methods: {
    async userSingup() {
       if(this.status === true) {

               const myThis = this;
      const loginfo = {
        name: false,
        username: false,
        email: false,
        password: false,
        confirm_password: false,
        aggre: false,
      };
      // async

      //
      // eslint-disable-next-line prefer-regex-literals
      const regs = new RegExp(/([-!$%^&*()_+|~=`{}:";'<>?,/ \u0621-\u064A])/g);
      // eslint-disable-next-line prefer-regex-literals
      const regSpace = new RegExp(/([-!$%^&*()_+|~=`{}:";'<>?,/])/g);
      // if()
      // console.log(regs.test(this.login.email))
      if (this.singup.name.trim() === '') {
        this.err.name = 'يرجى كتابة الاسم.';
        loginfo.name = false;
      } else if (regSpace.test(this.singup.name) === true) {
        this.err.name = 'يرجى التحقق من الاسم';
        loginfo.name = false;
      } else {
        this.err.name = '';
        loginfo.name = true;
      }

      if (this.singup.username.trim() === '') {
        this.err.username = 'يرجى كتابة اسم المستخدم';
        loginfo.username = false;
      } else if (regs.test(this.singup.username) === true) {
        this.err.username = 'يرجى التحقق من اسم المستخدم';
        loginfo.username = false;
      } else {
        this.err.username = '';
        loginfo.username = true;
      }

      if (this.singup.email.includes('@') === false) {
        this.err.email = 'يجب ان يحتوي على @.';
        loginfo.email = false;
      } else if (this.singup.email.split('@')[0].trim() === '') {
        this.err.email = 'الرجاء كتابة الجزء الذي يسبق علامة @.';
        loginfo.email = false;
      } else if (this.singup.email.split('@')[1].trim() === '') {
        this.err.email = 'الرجاء كتابة الجزء الذي يلي علامة @.';
        loginfo.email = false;
      } else if (regs.test(this.singup.email) === true) {
        this.err.email = 'يرجى التحقق من البريد الإلكتروني';
        loginfo.email = false;
      } else {
        this.err.email = '';
        loginfo.email = true;
      }

      if (this.singup.password.trim() === '') {
        this.err.password = 'يرجى كتابة كلمة المرور';
        loginfo.password = false;
      } else {
        this.err.password = '';
        loginfo.password = true;
      }

      if (this.singup.confirm_password.trim() === '') {
        this.err.confirm_password = 'التحقق من كلمة المرور مطلوب';
        loginfo.confirm_password = false;
      } else if (this.singup.confirm_password !== this.singup.password) {
        this.err.confirm_password =
          'تأكيد كلمة المرور غير متطابق مع كلمة المرور';
        loginfo.confirm_password = false;
      } else {
        this.err.confirm_password = '';
        loginfo.confirm_password = true;
      }

      // console.log();
      if (this.singup.aggre === false) {
        this.err.aggre = 'يجب الموافقة على الشروط';
        loginfo.aggre = false;
      } else {
        this.err.aggre = '';
        loginfo.aggre = true;
      }

      if (
        loginfo.name === true &&
        loginfo.username === true &&
        loginfo.email === true &&
        loginfo.password === true &&
        loginfo.confirm_password === true &&
        loginfo.aggre === true
      ) {
        this.err = {
          name: '',
          username: '',
          email: '',
          password: '',
          confirm_password: '',
          aggre: '',
        }
         this.status = false
         this.loadingButton = true;
       // this.$fire.auth.setPersistence("none")


         await this.$fire.firestore
              .collection('username')
              .doc("collection").get().then(async res => {
             const mydata = res.data().data

             if(!! mydata.filter(user => user === myThis.singup.username).length === true) {
               myThis.err.username = "اسم المستخدم موجود من قبل"
               myThis.status = true
        myThis.loadingButton = false;
             } else {
              await  myThis.$store.commit("setUser", {
                name: myThis.singup.name,
                username: myThis.singup.username,
                class : "",
                content : [],
                des: "",
                show : false,
                isMember : false,
                isContributor: false,
                photoUrl : null,
                photo : false

              })


     await  myThis.$fire.auth
          .createUserWithEmailAndPassword(
            myThis.singup.email,
            myThis.singup.password
          )
          .then(async function () {

            let usersnames = null;

         await  myThis.$fire.firestore
              .collection('username')
              .doc("collection").get().then(res => {
                usersnames = res.data().data;
               usersnames.push(myThis.singup.username)
             myThis.$fire.firestore
              .collection('username')
              .doc("collection").set({
                data : usersnames
              })
              })



          await myThis.$fire.firestore
              .collection('user')
              .doc(myThis.$fire.auth.currentUser.uid)
              .set({
                name: myThis.singup.name,
                username: myThis.singup.username,
                class : "",
                content : [],
                des: "",
                show : false,
                isMember : false,
                isContributor: false,
                photoUrl : null,
                photo : false
              })



               myThis.$store.commit('isLogin', true);

          })
          .catch((err) => {
           myThis.status = true;
            myThis.loadingButton = false;
            if (
              err.code === 'auth/missing-email' ||
              err.code === 'auth/invalid-email'
            ) {
              myThis.err.email = 'يرجى التحقق من البريد الإلكتروني';
            } else if (err.code === 'auth/internal-error') {
              myThis.err.email = 'يرجى التحقق من البريد الإلكتروني';
              myThis.err.password = 'يرجى التحقق من كلمة السر';
            } else if (err.code === 'auth/email-already-in-use') {
              myThis.err.email = 'هذا البريد مستخدم من قبل, الرجاء تسجيل الدخول';
            } else {
              myThis.err.aggre = "يوجد خطأ, الرجاء التحقق من البيانات"
            }
          });
             }
              });



        // try {
        //   // const response = await this.$auth.loginWith('local', {
        //   //   data: this.login,
        //   // });
        //    // this.$fire.auth.signOut()

        //   this.$fire.auth.createUserWithEmailAndPassword(this.username,this.password).then(function() {
        //     console.log("SingUp");
        //   })
        //   // console.log(response);
        // } catch (err) {
        //   console.log(err.massage)
        //   // this.err.email = err.response.data.error;
        // }
      }

      // const response = await this.$auth.loginWith('local', {
      //   data: this.login,
      // });
      // this.$fire.auth.signOut()
       }
    },
  },
  // auth: 'guest',
};
</script>
