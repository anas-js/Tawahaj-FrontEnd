<template>
  <div class="profile-user">
    <div v-if="!! myData" class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="profile-img">

              <img v-if="myData.photo" :src="myData.photoUrl" />
                 <img v-else src="/image/background-user.svg" />
            <nuxt-link to="/" class="name-class">{{myData.class}}</nuxt-link>
          </div>

          <nuxt-link
            v-if="$store.state.isLoggin && myData.username == $store.state.user.username"
            to="/profile"
            class="edith-profile-btn"
            >تعديل الملف الشخصي</nuxt-link
          >
        </div>
        <div class="col-lg-9">
          <div class="profile-text">
            <div class="top">
              <div>
                <h1>{{myData.name}}</h1>
                <a :href="`https://instagram.com/${myData.username}`" class="orange-btn">
                  <div class="contentText">
                    <i class="icon-5px ri-instagram-line"></i>
                    <span>متابعة على instagram </span>
                  </div>
                  <span class="shadow"></span>
                </a>
              </div>
              <div class="userAndDes">
                <p>@{{myData.username}}</p>
                <p>
                  {{myData.des}}
                </p>
              </div>
            </div>
            <div class="bottom">
              <div class="content">
                <h2>
                  <i class="ri-tv-line icon-5px"></i><span> المحتوى :</span>
                </h2>
                <div>
                  <nuxt-link v-for="(content, index) in myData.content" :key="index" to="/creators"
                    ><img src="/image/icon.svg" /><span>{{content}}</span></nuxt-link
                  >
                </div>
              </div>



              <a :href="`https://instagram.com/${myData.username}`" class="orange-btn">
                <div class="contentText">
                  <i class="icon-5px ri-instagram-line"></i>
                  <span>متابعة على instagram </span>
                </div>
                <span class="shadow"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="loading-p">جاري التحميل...</p>
    </div>
  </div>
</template>
<script>
// import axios from 'axios';
export default {
  // auth: false
  async validate({ params, $axios, route,app }) {
    let mydata = [];
    //   let mydata = "";
     await app.$fire.firestore
              .collection('username')
              .doc("collection").get().then(res => {
               mydata = res.data().data
              });





    // //  if (ele === route.params.id) {

    // //  } else {

    // //  }
    // return mydata.includes(params.id);
    // // for (let i = 0; i < mydata.length; i++) {
    // //   if (mydata[i] === params.id) {
    // //     return true;
    // //   }
    // // }


    return !! mydata.filter(user => user === params.username).length;
  },
  data() {
    return {
      myData: ''
    };
  },
 async mounted() {
                  await this.$fire.firestore
              .collection('user').get().then(res => {
                const myDoc = res.docs;

                for(let i=0;i < myDoc.length;i++) {

                  if(myDoc[i].data().username === this.$route.params.username) {
                     this.myData = myDoc[i].data();
                  }
                }
              });
  }
  // auth: 'guest',
};
</script>


<style scoped>

.loading-p {
  text-align: center;
}
</style>
