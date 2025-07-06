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
                    ><i class="icon-5px ri-shield-keyhole-line"></i
                    >الأمان</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8">
            <form class="profile-settings-content" @submit.prevent="uploadData">
              <p v-if="img" class="error-profile-settings">
               يجب ان لا تتعدى الصورة مساحة 500 كيلو بايت,  لم يتم اختيار صورة او ان ملف الصورة غير مدعوم.
              </p>
                                                        <p v-if="!! scuss" class="scuss-profile-settings">
               {{scuss}}
              </p>
              <div class="img-upload">
                <img v-if="$store.state.user.photo" :src="$store.state.user.photoUrl" />
                 <img v-else src="/image/background-user.svg" />
                <span
                  ><i class="icon-5px ri-upload-2-line"></i>تعديل الصورة</span
                >
                <input
                  type="file"
                  name="img-profile"
                  class="d-none"
                  accept="image/png, image/gif, image/jpeg"
                  @change="fileShow"
                />
              </div>
              <div>
                <label
                  :class="{
                    'active-input-value': $store.state.user.username != '',
                  }"
                  >الأسم</label
                >
                <input
                  v-model="data.name"
                  type="text"
                  :class="{
                    'active-input-color': $store.state.user.username != '',
                  }"
                />
              </div>
              <p class="err">{{ error.name }}</p>
              <div>
                <label
                  :class="{
                    'active-input-value': $store.state.user.username != '',
                  }"
                  >اسم المستخدم</label
                >
                <input
                  v-model="data.username"
                  type="text"
                  :class="{
                    'active-input-color': $store.state.user.username != '',
                  }"
                />
              </div>
              <p class="err">{{ error.username }}</p>

              <div>
                <label
                  :class="{ 'active-input-value': $store.state.user.des != '' }"
                  >الوصف</label
                >
                <textarea
                  v-model="data.des"
                  type="text"
                  :class="{ 'active-input-color': $store.state.user.des != '' }"
                ></textarea>
              </div>
              <p class="err">{{ error.des }}</p>

              <div>
                <label
                  class="active-input-value"
                  >الفئة</label
                >

                <!-- <input
                  v-model="data.class"
                  type="text"
                  :class="{ 'active-input-color': $store.state.user.class != '' }"
                /> -->

                <select
                  v-model="data.class"
                  class="contentSelect"
                  name="content"
                >
                  <option disabled selected value="">-- إختر --</option>
                  <optgroup label="برمجة">
                    <option value="volvo">مبرمج مواقع</option>
                    <option value="saab">مبرمج</option>
                  </optgroup>
                  <optgroup label="تصميم">
                    <option value="mercedes">تصميم جرافيكي</option>
                    <option value="audi">تصميم خرافي</option>
                  </optgroup>
                </select>
              </div>
              <p class="err">{{ error.class }}</p>

              <div>
                <label class="active-input-value">المحتوى</label>
                <!-- <input
                  v-model="data.content"
                  type="text"
                  :class="{ 'active-input-color': $auth.user.content != '' }"
                /> -->
                <div class="container">
                  <div class="row selectorContent">
                    <div v-for="(el, index) in 4" :key="index" class="col-lg-3">
                      <contentSelect />
                    </div>
                    <!-- <div class="col-lg-3"><contentSelect /></div>
                    <div class="col-lg-3"><contentSelect /></div>
                    <div class="col-lg-3"><contentSelect /></div> -->
                  </div>
                </div>
              </div>
              <p class="err">{{ error.content }}</p>
              <!-- <button type="submit">حفظ</button> -->
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
      img: false,
      data: {
        name: '',
        username: '',
        class: '',
        des: '',
        content: [],
      },
      error: {
        name: '',
        username: '',
        class: '',
        des: '',
        content: '',
      },
      status: true,
      loadingButton: false,
      scuss : ""
    };
  },
 async mounted() {
    const myThis = this;
    this.scuss = ""
    await this.$fire.auth.onAuthStateChanged(function () {
      myThis.$fire.firestore
        .collection('user')
        .doc(myThis.$fire.auth.currentUser.uid)
        .get()
        .then(function (datas) {
          myThis.$store.commit('setUser', datas.data());
 setData();
        });
    });



    function setData() {
      myThis.data.name = myThis.$store.state.user.name;
      myThis.data.username = myThis.$store.state.user.username;
      myThis.data.des = myThis.$store.state.user.des;
      myThis.data.class = myThis.$store.state.user.class;
      myThis.data.content = myThis.$store.state.user.content;

      $('input,textarea').on('input focus', function () {
        if ($(this).val() !== '') {
          $(this).siblings('label').addClass('active-input-value');
          $(this).addClass('active-input-color');
        } else {
          $(this).siblings('label').removeClass('active-input-value');
          $(this).removeClass('active-input-color');
        }
      });

      $('.profile-settings-content .img-upload span').on('click', function () {
        $(this).siblings('input').click();
      });

      $('.selectorContent select').on('change', function () {
        const element = $('.selectorContent select');
        //  let  lenNumber = 0;
        //   let repreat = 0;

        const myArray = [];
        for (let i = 0; i < element.length; i++) {
          // console.log(element.eq(i))

          // if(element.eq(0).val() === ) {
          //   // repreat++
          //   console.log("g")
          // }

          if (element.eq(i).val() != null) {
            myArray.push(element.eq(i).val());
          }

          // if(i === element.length-1) {
          //   // lenNumber++
          //   // console.log("finsh Loop")
          //   // if (lenNumber === 4) {
          //   //   console.log("fihis")
          //   //   console.log(repreat)
          //   // } else {
          //   //   myLoop();
          //   // }
          // }

          // console.log(element.eq(lenNumber).val)
        }

        const mySet = new Set(myArray);

        if ([...mySet].length !== myArray.length) {
          myThis.error.content = 'لا يمكنك تكرار اكثر من خيار';
        } else {
          myThis.error.content = '';
          myThis.data.content = [...mySet];
        }

        // console.log(myArray)
        //  console.log([...mySet])
        // console.log()
        //  console.log(myAraay.length)

        // for(let a=0;a <myAraay.length;a++) {

        // }

        // if(lenNumber >= 2) {
        //   myThis.error.content = "لا يمكنك تكرار اكثر من خيار"
        // } else {
        //   myThis.error.content = ""
        // }
      });

      for (let i = 0; i < $('.selectorContent select').length; i++) {
        if (!! myThis.data.content[i] !== false) {
          $('.selectorContent select').eq(i).val(myThis.data.content[i]);
        }
      }
    }


  },
  methods: {
    fileShow() {
      const myClassShow = new FileReader();
      const file = document.querySelector('input[type=file]').files[0];
      const input = document.querySelector('input[type=file]');
      const preview = document.querySelector(
        '.profile-settings-content .img-upload img'
      );
      console.log(file.size)
      myClassShow.onloadend = function () {
        preview.src = myClassShow.result;
      };

      if (file && /\.(gif|jpg|jpeg|png)$/i.test(file.name) === true && file.size < 500000) {
        // eslint-disable-next-line no-unused-vars

        myClassShow.readAsDataURL(file);
        this.img = false;
      } else {
        if (this.$store.state.user.photo === true) {
          preview.src = this.$store.state.user.photoUrl
        } else {
           preview.src = '/image/background-user.svg';
        }

        this.img = true;
        input.value = '';
      }
      // console.log(myClassShow.result)
      // myClassShow.onloadend = function() {

      // }
    },
    async uploadData() {
      console.log(this.$store.state.user)
      if (this.status === true) {

        const errors = {
          name: false,
          username: false,
          des: false,
          class: false,
          content: false,
        };

        // eslint-disable-next-line prefer-regex-literals
        const regSpace = new RegExp(/([-!$%^&*()_+|~=`{}:";'<>?,/])/g);
        // eslint-disable-next-line prefer-regex-literals
        const regs = new RegExp(
          /([-!$%^&*()_+|~=`{}:";'<>?,/ \u0621-\u064A])/g
        );

        // const file = document.querySelector('input[type=file]').files[0];
        // if (file && /\.(gif|jpg|jpeg|png)$/i.test(file.name) === false) {
        //   this.img = true;
        // } else {
        //   errors.img = true;
        //   this.img = false;
        // }

        this.img = false;

        if (this.data.name.trim() === '') {
          this.error.name = 'يرجى كتابة الاسم.';
          errors.name = false;
        } else if (regSpace.test(this.data.name) === true) {
          this.error.name = 'يرجى التحقق من الاسم';
          errors.name = false;
        } else {
          this.error.name = '';
          errors.name = true;
        }

        if (this.data.username.trim() === '') {
          this.error.username = 'يرجى كتابة اسم المستخدم';
          errors.username = false;
        } else if (regs.test(this.data.username) === true) {
          this.error.username = 'يرجى التحقق من اسم المستخدم';
          errors.username = false;
        } else {
          this.error.username = '';
          errors.username = true;
        }

        if (this.data.des.trim() === '') {
          this.error.des = 'يرجى كتابة وصف';
          errors.des = false;
        } else if (regSpace.test(this.data.des) === true) {
          this.error.des = 'يرجى التحقق من الوصف';
          errors.des = false;
        } else {
          this.error.des = '';
          errors.des = true;
        }

        if (this.data.class.trim() === '') {
          this.error.class = 'يرجى اختيار فئة';
          errors.class = false;
        } else if (regSpace.test(this.data.class) === true) {
          this.error.class = 'يرجى التحقق من الفئة';
          errors.class = false;
        } else {
          this.error.class = '';
          errors.class = true;
        }
        const element = $('.selectorContent select');
        //  let  lenNumber = 0;
        //   let repreat = 0;

        const myArray = [];
        for (let i = 0; i < element.length; i++) {
          // console.log(element.eq(i))

          // if(element.eq(0).val() === ) {
          //   // repreat++
          //   console.log("g")
          // }

          if (element.eq(i).val() != null) {
            myArray.push(element.eq(i).val());
          }

          // if(i === element.length-1) {
          //   // lenNumber++
          //   // console.log("finsh Loop")
          //   // if (lenNumber === 4) {
          //   //   console.log("fihis")
          //   //   console.log(repreat)
          //   // } else {
          //   //   myLoop();
          //   // }
          // }

          // console.log(element.eq(lenNumber).val)
        }

        const mySet = new Set(myArray);

        if (this.data.content.length === 0) {
          this.error.content = 'يرجى اختيار محتوى واحد على الأقل';
          errors.content = false;
        } else if ([...mySet].length !== myArray.length) {
          this.error.content = 'لا يمكنك تكرار اكثر من خيار';
          errors.content = false;
          console.log("G")
        } else {
          this.error.content = '';
          errors.content = true;
        }


        if (
          errors.name === true &&
          errors.username === true &&
          errors.class === true &&
          errors.content === true &&
          errors.des === true
        ) {
          const myThis = this;
         this.status = false;
        this.loadingButton = true;

          if (this.data.username !== this.$store.state.user.username) {
            await myThis.$fire.firestore
              .collection('username')
              .doc('collection')
              .get()
              .then(async (res) => {
                const usersnames = res.data().data;
                const removeEle = usersnames.filter(
                  (el) => el !== myThis.$store.state.user.username
                );
                // delete usersnames[usersnames.findIndex( x => x === myThis.$store.state.user.username)]

                if (
                  !!usersnames.filter((user) => user === myThis.data.username)
                    .length === true
                ) {
                  myThis.error.username = 'اسم المستخدم هذا موجود بالفعل';
                  myThis.status = true;
                  myThis.loadingButton = false;
                } else {
                  removeEle.push(myThis.data.username);
                  await myThis.$fire.firestore
                    .collection('username')
                    .doc('collection')
                    .set({
                      data: removeEle,
                    });

                  myThis.$store.commit('setUsername', myThis.data.username);

                  sendData();
                }
              });
          } else {
            sendData();
          }

          async function sendData() {
            await myThis.$fire.firestore
              .collection('user')
              .doc(myThis.$fire.auth.currentUser.uid)
              .update({
                name: myThis.data.name,
                username: myThis.data.username,
                class: myThis.data.class,
                content: myThis.data.content,
                des: myThis.data.des,
              });

              if(!! document.querySelector('input[type=file]').files[0] === true) {
 await myThis.$fire.storage.ref(myThis.$fire.auth.currentUser.uid).put(document.querySelector('input[type=file]').files[0]).then(async res => {
                  await myThis.$fire.storage.ref(myThis.$fire.auth.currentUser.uid).getDownloadURL().then(async function(url) {

                                await myThis.$fire.firestore
              .collection('user')
              .doc(myThis.$fire.auth.currentUser.uid)
              .update({
               photoUrl : url,
                photo : true
              });
        myThis.$store.commit("setPhoto", url)
     });
 })
              }

    //          await myThis.$fire.storage.ref(myThis.$fire.auth.currentUser.uid).getDownloadURL().then(function(url) {
    // // Insert url into an <img> tag to "download"
    //     console.log(url)
    // });

            await myThis.$store.commit('setUser', {
              name: myThis.data.name,
              username: myThis.data.username,
              class: myThis.data.class,
              content: myThis.data.content,
              des: myThis.data.des,
              show: myThis.$store.state.user.show,
              isMember: myThis.$store.state.user.isMember,
              isContributor: myThis.$store.state.user.isContributor,
               photoUrl : myThis.$store.state.user.photoUrl,
                photo : myThis.$store.state.user.photo
            });

            myThis.status = true;
            myThis.loadingButton = false;
            myThis.scuss = "تمت العملية بنجاح!!"
          }
        }
      }
    },
  },
};
</script>
