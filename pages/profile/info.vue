<template>
  <div>
    <div class="profile-settings">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="list-profile-settings">
              <ul>
                <li>
                  <nuxt-link to="/profile"
                    ><i class="icon-5px ri-user-6-line"></i>الملف
                    الشخصي</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/profile/info"
                    ><i class="icon-5px ri-information-line"></i>المعلومات
                    الشخصية</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/profile/security"
                    ><i class="icon-5px ri-shield-keyhole-line"></i>الأمان</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8">
            <form class="profile-settings-content" @submit.prevent="uploadData">
                            <p v-if="!! error.email" class="error-profile-settings">
               {{error.email}}
              </p>
                                          <p v-if="!! scuss" class="scuss-profile-settings">
               {{scuss}}
              </p>
              <div>
                <label
                  :class="{ 'active-input-value': data.email != '' }"
                  >البريد الإلكتروني</label
                >
                <input
                  v-model="data.email"
                  type="text"
                  :class="{ 'active-input-color': data.email != '' }"
                />
              </div>
                <!-- <p class="err">{{ error.email }}</p> -->
                    <button type="submit">
                <div v-if="loadingButton" class="loadingButton">
                  <span></span>
                </div>
                <span v-else>حفظ</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery/dist/jquery.min.js';
export default {
   middleware: ['authFirebase'],
  data() {
    return {
      data: {
        email: '',
      },
      error: {
        email: '',
      },
      status : true,
      loadingButton : false,
      scuss : ""
    };
  },
  mounted() {
    const myThis = this;
  this.$fire.auth.onAuthStateChanged(function()  {
     myThis.data.email = myThis.$fire.auth.currentUser.email;
  })



    $('input').on('input focus', function () {
      if ($(this).val() !== '') {
        $(this).siblings('label').addClass('active-input-value');
        $(this).addClass('active-input-color');
      } else {
        $(this).siblings('label').removeClass('active-input-value');
        $(this).removeClass('active-input-color');
      }
    });

  },
  methods: {
   async uploadData() {

const myThis = this;
    const errors = {
       email: false
    };
this.scuss = ""
    // eslint-disable-next-line prefer-regex-literals
    // const regSpace = new RegExp(/([-!$%^&*()_+|~=`{}:";'<>?,/])/g);
    // eslint-disable-next-line prefer-regex-literals
   const regs = new RegExp(/([-!$%^&*()_+|~=`{}:";'<>?,/ \u0621-\u064A])/g);

    // const file = document.querySelector('input[type=file]').files[0];
    // if (file && /\.(gif|jpg|jpeg|png)$/i.test(file.name) === false) {
    //   this.data.img = true;
    // } else {
    //   errors.img = true;
    //   this.data.img = false;
    // }


    // if (this.data.email.trim() === '') {
    //   this.error.email= 'يرجى كتابة البريد الإلكتروني';
    //   errors.email = false;
    // } else if (regSpace.test(this.data.email) === true) {
    //   this.error.email = 'يرجى التحقق من البريد الإلكتروني';
    //   errors.email = false;
    // } else {
    //   this.error.email = '';
    //   errors.email = true;
    // }


          if (this.data.email.includes('@') === false) {
       this.error.email = 'يجب ان يحتوي على @.';
         errors.email = false;
      } else if (this.data.email.split('@')[0].trim() === '') {
        this.error.email = 'الرجاء كتابة الجزء الذي يسبق علامة @.';
         errors.email = false;
      } else if (this.data.email.split('@')[1].trim() === '') {
        this.error.email = 'الرجاء كتابة الجزء الذي يلي علامة @.';
         errors.email = false;
      } else if (regs.test(this.data.email) === true) {
       this.error.email = 'يرجى التحقق من البريد الإلكتروني';
         errors.email = false;
      } else {
       this.error.email = '';
         errors.email = true;
      }

       if(this.status === true && errors.email === true) {
         this.status = false;
         this.loadingButton = true
        await this.$fire.auth.currentUser.updateEmail(myThis.data.email).then( res => {
                  myThis.status = true;
         myThis.loadingButton = false
           myThis.scuss = "تمت العملية بنجاح!!"
         }).catch(err => {
           if (err.code === "auth/requires-recent-login") {
             myThis.error.email = "هذه العملية حساسة وتتطلب مصادقة حديثة. قم بتسجيل الدخول مرة أخرى قبل إعادة محاولة هذا الطلب."
           } else {
              myThis.error.email = `مشكلة في الطلب, تحقق من البريد الإلكتروني ${err.message.split("Firebase:")}`
           }
         myThis.status = true;
         myThis.loadingButton = false
         })
       }


  }
  },
};
</script>
