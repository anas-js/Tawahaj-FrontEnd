<template>
  <header class="Header">
    <p style="text-align: center; margin: 0 auto; background-color: red; color: #fff; margin-bottom: 10px;">هذا الموقع تجريبي يرجى عدم إضافة اي بيانات او حسابات!</p>
    <div class="container">
      <span class="list-mobile-btn" @click="showListMobile"
        ><i class="ri-menu-4-line"></i
      ></span>

      <nuxt-link to="/"><img class="logo" src="/image/logo.svg" /></nuxt-link>
      <ul class="links">
        <li>
          <nuxt-link to="/">الرئيسية<span></span></nuxt-link>
        </li>
        <!-- <li>
          <nuxt-link to="/">من نحن<span></span></nuxt-link>
        </li> -->
        <li>
          <nuxt-link to="/creators">صناع المحتوى<span></span></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/members">الأعضاء<span></span></nuxt-link>
        </li>
      </ul>

      <div v-if="$store.state.isLoggin === false" class="left-btn">
        <orBtn text-btn="أضف حسابك" to="/signup" icon="ri-user-6-line" />

        <nuxt-link to="/login" class="blue-btn">
          <i class="icon-5px ri-login-circle-line"></i> تسجيل الدخول
        </nuxt-link>
      </div>
      <div v-if="$store.state.isLoggin" class="username">
                <img v-if="$store.state.user.photo" :src="$store.state.user.photoUrl" />
                 <img v-else src="/image/background-user.svg" />
        <div class="user-info">
          <p>{{$store.state.user.name}}</p>
          <i class="ri-arrow-down-s-line"></i>
        </div>

        <div class="list-user-header">
          <ul>
            <li>
              <nuxt-link :to="`/${$store.state.user.username}`"
                ><i class="ri-user-6-line"></i> الملف الشخصي</nuxt-link
              >
            </li>
            <li @click="logout">
              <nuxt-link to="/"
                ><i class="ri-logout-circle-line"></i> تسجيل الخروج</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>

      <span class="list-user-btn" @click="showListMobile"
        ><i class="ri-user-3-line"></i
      ></span>
    </div>
    <div class="list-mobile">
      <span class="close-mobile-btn" @click="closeListMobile"
        ><i class="ri-close-line"></i
      ></span>
      <div>
        <ul class="links-mobile">
          <li>
            <nuxt-link to="/">الرئيسية<span></span></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">من نحن<span></span></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">صناع المحتوى<span></span></nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">الأعضاء<span></span></nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="list-user">
      <span class="close-mobile-btn" @click="closeListMobile"
        ><i class="ri-close-line"></i
      ></span>
      <div>
        <ul v-if="$store.state.isLoggin === false" class="links-mobile">
          <li>
            <nuxt-link to="/signup"
              ><i class="ri-user-6-line"></i> أضف حسابك</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/login"
              ><i class="ri-login-circle-line"></i> تسجيل الدخول</nuxt-link
            >
          </li>
        </ul>

        <ul v-if="$store.state.isLoggin " class="links-mobile login-link-mobile">
          <li>
            <nuxt-link to="/"
              ><i class="ri-user-6-line"></i> الملف الشخصي</nuxt-link
            >
          </li>
          <li @click="logout">
            <nuxt-link to="/"
              ><i class="ri-login-circle-line"></i> تسجيل الخروج</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import $ from 'jquery/dist/jquery.min.js';
export default {
  mounted() {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= 100) {
        $('.Header').addClass('scroll-header');
      } else {
        $('.Header').removeClass('scroll-header');
      }
    });
  },
  methods: {
    showListMobile(e) {
      // e.target.classList.add('list-mobile-active');
      // .classList.add('list-mobile-active');

      // document.getElementsByClassName("list-mobile")[0].classList.add('list-mobile-active');
      // if (e.target.classList)
      // $(".list-mobile").addClass("list-mobile-active")
      if ($(e.target.parentElement).hasClass('list-mobile-btn') === true) {
        $('.list-mobile').addClass('list-mobile-active');
        $('.list-user').removeClass('list-user-active');
      } else if ($(e.target.parentElement).hasClass('list-user-btn') === true) {
        $('.list-user').addClass('list-user-active');
        $('.list-mobile').removeClass('list-mobile-active');
      }
    },
    closeListMobile(e) {
      $('.list-mobile').removeClass('list-mobile-active');
      $('.list-user').removeClass('list-user-active');
    },
    logout() {
      this.$store.commit('isLogin', false);
      this.$store.commit('setUser', "");
      this.$fire.auth.signOut();
    },
  },
};
</script>
