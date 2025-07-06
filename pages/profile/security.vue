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
                                          <p v-if="!! sendErr" class="error-profile-settings">
               {{sendErr}}
              </p>
                                          <p v-if="!! scuss" class="scuss-profile-settings">
               {{scuss}}
              </p>
              <!-- <div>
                <label>كلمة المرور الحالية</label>
                <input v-model="data.passwordNow" type="text" />
              </div> -->
              <!-- <p class="err">{{ error.passwordNow }}</p> -->
              <div>
                <label>كلمة المرور الجديدة</label>
                <input v-model="data.passwordNew" type="password" />
              </div>
              <p class="err">{{ error.passwordNew }}</p>

              <div>
                <label>تأكيد كلمة المرور الجديدة </label>
                <input v-model="data.passwordNewConfig" type="password" />
              </div>
              <p class="err">{{ error.passwordNewConfig }}</p>
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
        passwordNow: '',
        passwordNew: '',
        passwordNewConfig: '',
      },
      error: {
        passwordNow: '',
        passwordNew: '',
        passwordNewConfig: '',
      },
      sendErr : "",
      scuss : "",
      status : true,
      loadingButton : false
    };
  },
  mounted() {
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
      const errorSend = {
        passwordNow: true,
        passwordNew: false,
        passwordNewConfig: false,
      };

     const myThis = this;
     this.sendErr = ""
     this.scuss = ""
      // eslint-disable-next-line prefer-regex-literals
      // const regSpace = new RegExp(/([-!$%^&*()_+|~=`{}:";'<>?,/])/g);
      // eslint-disable-next-line prefer-regex-literals
      // const regs = new RegExp(/([-!$%^&*()_+|~=`{}:";'<>?,/ \u0621-\u064A])/g);

      // const file = document.querySelector('input[type=file]').files[0];
      // if (file && /\.(gif|jpg|jpeg|png)$/i.test(file.name) === false) {
      //   this.data.img = true;
      // } else {
      //   errors.img = true;
      //   this.data.img = false;
      // }

      // if (this.data.passwordNow.trim() === '') {
      //   this.error.passwordNow = 'يرجى كتابة كلمة المرور';
      //   errorSend.passwordNow = false;
      // } else {
      //   this.error.passwordNow = '';
      //   errorSend.passwordNow = true;
      // }

      if (this.data.passwordNew.trim() === '') {
        this.error.passwordNew = 'يرجى كتابة كلمة المرور الجديدة';
        errorSend.passwordNew = false;
      } else {
        this.error.passwordNew = '';
        errorSend.passwordNew = true;
      }

      if (this.data.passwordNewConfig.trim() === '') {
        this.error.passwordNewConfig = 'التحقق من كلمة المرور مطلوب';
         errorSend.passwordNewConfig = false;
      } else if (this.data.passwordNewConfig !== this.data.passwordNew) {
         this.error.passwordNewConfig =
          'تأكيد كلمة المرور غير متطابق مع كلمة المرور الجديدة';
        errorSend.passwordNewConfig = false;
      } else {
         this.error.passwordNewConfig = '';
        errorSend.passwordNewConfig = true;
      }

       if(this.status === true &&  errorSend.passwordNew === true  &&  errorSend.passwordNewConfig=== true) {
         this.status = false;
         this.loadingButton = true
        await this.$fire.auth.currentUser.updatePassword(myThis.data.passwordNew).then( res => {
                  myThis.status = true;
         myThis.loadingButton = false
           myThis.scuss = "تمت العملية بنجاح!!"
         }).catch(err => {
           if (err.code === "auth/requires-recent-login") {
             myThis.sendErr = "هذه العملية حساسة وتتطلب مصادقة حديثة. قم بتسجيل الدخول مرة أخرى قبل إعادة محاولة هذا الطلب."
           } else {
              myThis.sendErr = `مشكلة في الطلب, تحقق من البريد الإلكتروني ${err.message.split("Firebase:")}`
           }
         myThis.status = true;
         myThis.loadingButton = false
         })
       }

    },
  },
};
</script>
