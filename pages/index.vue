<template>
  <main class="Home">
    <!-- <div v-if="$auth.loggedIn">
      {{$auth.user.email}}
      <div @click="$auth.logout()">Logot</div>
    </div> -->
    <section class="section-main">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center">
            <div class="main-text">
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <span>توهج</span> و أبرز محتواك
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                برفقة مجتمع غني بصنّاع المحتوى العربي من شتى بقاع الأرض، ملتمين
                سوياً في مكان واحد و كروح واحدة يتشارك بعضهم البعض الخبرات و
                النجاحات 🏆
              </p>

              <div
                class="main-btn"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-once="true"
              >
                <orBtn
                  v-if="$store.state.isLoggin"
                  text-btn="الملف الشخصي"
                  to="/"
                  icon="ri-user-6-line"
                />
                <orBtn
                  v-else
                  text-btn="أضف حسابك"
                  to="/"
                  icon="ri-user-6-line"
                />

                <nuxt-link to="/" class="blue-btn or-border">
                  <i class="icon-5px ri-vip-crown-2-line"></i> صنّاع المحتوى
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-sm-center justify-content-me-center"
          >
            <div class="main-img">
              <img class="main" src="/image/icon.svg" />
              <img class="main-shadow" src="/image/icon.svg" />
              <img class="per per1 main-anmition" src="/image/per1.svg" />
              <img class="per per2 main-anmition" src="/image/per2.svg" />
              <img class="per per3 main-anmition" src="/image/per3.svg" />
              <img class="per per4 main-anmition" src="/image/per4.svg" />
              <img class="per per5 main-anmition" src="/image/per5.svg" />
              <img class="per per6 main-anmition" src="/image/per6.svg" />
              <img class="per per7 main-anmition" src="/image/per7.svg" />
              <img class="per per8 main-anmition" src="/image/per8.svg" />
              <img class="path-main" src="/image/path-main.svg" />

              <div class="creat-number">
                <span class="text">صانع محتوى</span>
                <span class="num">+{{ numCrator }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="about-us"
      data-aos="fade-down"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-lg-12 d-flex justify-content-lg-start justify-content-sm-center"
          >
            <div class="how-are-you">
              <h2>من نحن؟</h2>
              <p>
                هل مملت من عدم وجود المتابعين؟ هل مملت من عدم وجود المتابعين؟ هل
                مملت من عدم وجود المتابعين؟ هل مملت من عدم وجود المتابعين؟
              </p>

              <img class="logo-center" src="/image/o-icon.svg" />
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-12 d-flex align-items-center justify-content-lg-end justify-content-sm-center"
          >
            <div class="search-creator">
              <h2>هل تبحث عن محتوى معين؟</h2>
              <p>
                هل مملت من عدم وجود المتابعين؟ هل مملت من عدم وجود المتابعين؟ هل
                مملت من عدم وجود المتابعين؟ هل مملت من عدم وجود المتابعين؟
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="creator-content section-space"
      data-aos="fade-down"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      <div class="container">
        <h2>صناع المحتوى</h2>
        <div v-if="allUser !== ''" class="row">
          <userBox
            v-for="(dataUser, index) in lengthUser"
            :key="index"
            :data-user="allUser"
            :length-user="index"
            classitem="col-lg-6"
          />
        </div>

        <div v-if="allUser == ''" class="row">
          <userLoading
            v-for="(element, index) in 8"
            :key="index"
            classitem="col-lg-6"
          />
        </div>
        <orBtn
          v-if="allUser !== ''"
          text-btn="المزيد"
          to="/"
          icon="ri-add-line"
        />
      </div>
    </section>

    <section
      class="join-us section-space"
      data-aos="fade-down"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      <div class="container">
        <div>
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center">
              <div class="text">
                <h2>انضم الينا الآن</h2>
                <p>
                  وشاركنا الرحلة في تعزيز و دعم صناع المحتوى العربي بشتى
                  مجالاتهم و آفاقهم؛ نحو عالم يسوده الإبداع و البهاء 💡.
                </p>
                <orBtn
                  v-if="$store.state.isLoggin"
                  text-btn="الملف الشخصي"
                  to="/"
                  icon="ri-user-6-line"
                />
                <orBtn
                  v-else
                  text-btn="أضف حسابك"
                  to="/"
                  icon="ri-user-6-line"
                />
              </div>
            </div>
            <div
              class="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-sm-center"
            >
              <img src="/image/icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <p v-for="(te,index) in data.user" :key="index">G</p> -->
    <!-- <p v-html="data"></p> -->
    <!-- <nuxt-link to="/">GG</nuxt-link> -->
  </main>
</template>

<script>
// import mydata from "@/static/user.json";
// import axios from 'axios';
import $ from 'jquery/dist/jquery.min.js';
export default {
  //   asyncData({$axios}) {
  //     $axios.$get('/user.json').then(function (status) {
  //   })
  // },
  // asyncData() {

  // },
  data() {
    return {
      allUser: '',
      lengthUser: 20,
      numCrator: 0,
      myinterval: '',
      anmiteon: '',
      myusers : 0
    };
  },
  // },
  // async fetch() {
  //   this.data = await this.$axios.$get('user.json');
  //   console.log(this.data)
  // // await console.log(this.$axios.$get)

  // },
  // fetchOnServer: false,
  // fetchKey: 'site-sidebar',

  // async fetch() {
  //   this.data = await fetch('https://nons.me/json/json.json').then((res) =>
  //     res.json()
  //   );
  // this.data = await axios.get("https://nons.me/json/json.json");
  // .then(response => {})
  // },
  // fetchOnServer: false,

  // async mounted() {
  //       await axios.get("https://nons.me/json/json.json")
  //     .then(response => { console.log("g")})

  //   },
  // mounted() {
  // console.log(this.$fetchState)
  // console.log(this.data.template)
  //   axios.get('/user.json').then(function (status) {
  //    console.log(status)
  // })
  //   axios.get('/user.json').then(function (status) {
  //   console.log(status)
  // })

  // axios.get('/user.json').then(function (status) {
  //   $(".creator-content .row").append(`
  //             <div class="col-lg-6">
  //         <div class="user-box">
  //           <div class="image-user">
  //             <img src="image/background-user.svg" loading="lazy" />
  //           </div>
  //           <div class="user-text">
  //             <nuxt-link to="/"><h4>محمد سالم</h4></nuxt-link>
  //             <nuxt-link to="/" class="name-class">مصمم شعارات</nuxt-link>

  //             <p class="username">@desr</p>
  //             <div class="content">
  //               <nuxt-link to="/"
  //                 ><img src="image/icon.svg" /><span
  //                   >تصميم</span
  //                 ></nuxt-link
  //               >
  //             </div>
  //           </div>
  //           <orBtn textBtn="follow" to="/" icon="ri-user-add-line" />
  //         </div>
  //       </div>
  //   `);
  //     $(".creator-content .loading").addClass("d-none");
  // });
  // }

 async mounted() {
const myThis = this;
          await this.$fire.firestore
              .collection('username')
              .doc("collection").get().then(res => {
             myThis.myusers = res.data().data.length
              })


    // axios.get('/api/all.json').then(function (status) {
    //   if (status.data.length >= 8) {
    //     myThis.lengthUser = 8;
    //   } else {
    //     myThis.lengthUser = status.data.length;
    //   }
    //   myThis.allUser = status.data;
    // });

             myThis.$fire.firestore
              .collection('user')
              .get().then(function(data) {


                       if (data.docs.length >= 8) {
        myThis.lengthUser = 8;
      } else {
        myThis.lengthUser = data.docs.length;
      }
      myThis.allUser = data.docs;


              });

    // $(".creator-content .row").append(`
    // <nuxt-link to="/">GG</nuxt-link>
    // `)

    // console.log(this.$auth)

    this.myinterval = setInterval(function () {

      if (myThis.numCrator >= myThis.myusers) {
        clearInterval(myThis.myinterval);
      } else {
         myThis.numCrator = myThis.numCrator + 1;
      }

    }, 10);

    const myper = $('.per');
    let lengthAnmaion = 0;
    this.anmiteon = setInterval(function () {
      myper.eq(lengthAnmaion).removeClass('main-anmition');
      if (lengthAnmaion === myper.length - 1) {
        clearInterval(myThis.anmiteon);
      }
      lengthAnmaion++;
    }, 200);
  },
 // auth: 'guest',
  beforeDestroy() {
    // clearInterval(this.myinterval);
    clearInterval(this.anmiteon);
  },
};
</script>
