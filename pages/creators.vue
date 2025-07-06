<template>
  <div>
    <topSection :text="`صنّاع المحتوى`" />
    <div class="cret-main">
      <div class="container">
        <h2>ابحث</h2>
        <!-- <p v-if="search !== ''" @click="clearSercsh">
          <i class="ri-close-circle-line"></i>{{ search }}
        </p> -->
        <div class="row">
          <!-- <div class="col-lg-4">
            <div class="search">
              <ul v-if="content !== ''">
                <li v-for="(li, index) in content" :key="index">
                  <a
                    v-if="li.list === false"
                    :data-req="li.url"
                    @click="reqFilter"
                    ><i :class="li.icon"></i>{{ li.name }}</a
                  >

                  <p v-else class="list-down-cret" @click.prevent="listShow">
                    <a :data-req="li.url" @click="reqFilter"
                      ><i :class="li.icon"></i>{{ li.name }}</a
                    >

                    <span class="down"
                      ><i class="ri-arrow-down-s-line"></i
                    ></span>
                  </p>

                  <ul v-if="li.list != false">
                    <li
                      v-for="(chieldLi, indexChild) in li.list"
                      :key="indexChild"
                    >
                      <img src="/image/icon.svg" />
                      <a :data-req="chieldLi.url" @click="reqFilter">{{
                        chieldLi.name
                      }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul v-else>
                <li
                  v-for="(e, index) in 3"
                  :key="index"
                  class="loading-list-li"
                >
                  <a
                    ><i class="ri-home-2-line"></i
                    ><span
                      >تحميل تحميل تحميل تحميل تحميل تحميل تحميل تحميل</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div> -->
          <div class="col-lg-12">
            <div class="container cretor-elemnt">
              <div>
                <h3>الأعضاء</h3>
                <div v-if="member !== ''" class="row">
                  <userBox
                    v-for="(dataUser, index) in lengthMeber"
                    :key="index"
                    :data-user="member"
                    :length-user="index"
                    classitem="col-lg-12"
                  />

                  <orBtn
                    v-if="member !== '' && member.length !== lengthMeber"
                    text-btn="المزيد"
                    icon="ri-add-line"
                    to=""
                    @click.native="clickMoreMember"
                  />
                </div>
                <div v-if="member == ''" class="row">
                  <userLoading
                    v-for="(element, index) in 4"
                    :key="index"
                    classitem="col-lg-12"
                  />
                </div>
              </div>

              <div>
                <h3>جميع اليوزرات</h3>
                <div v-if="user !== ''" class="row">
                  <userBox
                    v-for="(dataUser, index) in lengthUser"
                    :key="index"
                    :data-user="user"
                    :length-user="index"
                    classitem="col-lg-12"
                  />

                  <orBtn
                    v-if="user !== '' && user.length !== lengthUser"
                    text-btn="المزيد"
                    icon="ri-add-line"
                    to=""
                    @click.native="clickMoreUser"
                  />
                </div>
                <div v-if="user == ''" class="row">
                  <userLoading
                    v-for="(element, index) in 8"
                    :key="index"
                    classitem="col-lg-12"
                  />
                </div>
              </div>
              <!--
                            <div v-if="filterData.length !== 0" class="row">

                <userBoxFilter
                  v-for="(dataUser, index) in lengthFilter"
                  :key="index"
                  :data-user="filterData"
                  :length-user="index"
                  classitem="col-lg-12"
                />
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery/dist/jquery.min.js';
import axios from 'axios';
export default {
  data() {
    return {
      user: '',
      member: '',
      content: '',
      lengthUser: 20,
      // filterData : [],
      // lengthFilter : 10,
      lengthMeber: 1,
      search: '',
    };
  },
  mounted() {
    //  this.$router.push("/404")
    // axios.get('/api/ckicl.json').then(function (status) {
    // });

    const myThis = this;
    // axios.get('/api/user.json').then(function (status) {
    //   if (status.data.length >= 8) {
    //     myThis.lengthUser = 8;
    //   } else {
    //     myThis.lengthUser = status.data.length;
    //   }
    //   myThis.user = status.data;
    // });

    // axios.get('/api/member.json').then(function (status) {
    //   if (status.data.length >= 8) {
    //     myThis.lengthMeber = 8;
    //   } else {
    //     myThis.lengthMeber = status.data.length;
    //   }
    //   myThis.member = status.data;
    // });

    // axios.get('/api/creator-content.json').then(function (status) {
    //   myThis.content = status.data;
    // });

    // let myinterval;
    // $('.list-down-cret').on('click', function () {
    //   const lengthList = $(this).parent().find('li');

    //   $('.search li').not($(this).parent()).removeClass('active-ul');
    //   $('.search li')
    //     .not($(this).parent().find('li'))
    //     .removeClass('list-li-active');

    //   clearInterval(myinterval);
    //   const el = this.parentElement.querySelector('ul');
    //   const height = el.scrollHeight;
    //   el.style.setProperty('--max-height', height + 50 + 'px');

    //   if ($(this).parent().hasClass('active-ul') === true) {
    //     //  let i = lengthList.length-1;

    //     $(this).parent().removeClass('active-ul');
    //     lengthList.removeClass('list-li-active');
    //     // const myinterval = setInterval(function () {
    //     //   lengthList.eq(i).removeClass('list-li-active');
    //     //   console.log("g")
    //     //   if (i === 0) {
    //     //     clearInterval(myinterval);
    //     //   } else {
    //     //     i--;
    //     //   }
    //     // }, 100);
    //   } else {
    //     let i = 0;
    //     $(this).parent().addClass('active-ul');
    //     // for(let i =0; i < lengthList.length; i++) {

    //     // }

    //     myinterval = setInterval(function () {
    //       console.log('g');
    //       lengthList.eq(i).addClass('list-li-active');

    //       if (i === lengthList.length - 1) {
    //         clearInterval(myinterval);
    //       } else {
    //         i++;
    //       }
    //     }, 100);
    //   }
    // });

    // $(".choes-select").on("click", function() {
    //  // myThis.data.user = ""
    //  myThis.filterData.length = 0
    //   myThis.$store.commit('clearNumber');

    // //  console.log(myThis.data.user)
    //   // myThis.data = "";
    //   // console.log(myThis.data.user[0].content[0].name)
    //   for (let i=0;i < myThis.data.user.length; i++) {
    //   // console.log(myThis.data.user[i].content)
    //      for (let ic=0;ic < myThis.data.user[i].content.length; ic++) {
    //         // console.log( === "العاب")
    //         if (myThis.data.user[i].content[ic].name === "العاب") {
    //           // myThis.data.user.push(myThis.data.user[i])
    //           myThis.filterData.push(myThis.data.user[i])

    //         }
    //      }
    //   }

    //    myThis.lengthFilter =  myThis.filterData.length
    //   //  console.log(myThis.filterData)
    //   //   console.log(myThis.data.user)
    //   //      if (myThis.filterData.length >= 8) {
    //   //   myThis.lengthUser = 8;
    //   // } else {
    //   //   myThis.lengthUser = status.data.user.length;
    //   // }
    // })

    window.onpopstate = function (event) {
      myThis.user = '';
      // console.log(window.history);

      if (window.history.state.user === '') {
        axios.get('/api/member.json').then(function (status) {
          if (status.data.length >= 8) {
            myThis.lengthUser = 8;
          } else {
            myThis.lengthUser = status.data.length;
          }
          myThis.user = status.data;
        });
      } else {
        myThis.user = window.history.state.user;
        myThis.member = window.history.state.member;
        myThis.search = window.history.state.search;
      }
    };
  },
  methods: {
    clickMoreUser() {
      if (this.user.length > this.lengthUser + 8) {
        this.lengthUser = this.lengthUser + 8;
      } else {
        this.lengthUser = this.user.length;
      }
    },
    clickMoreMember() {
      if (this.user.length > this.lengthUser + 8) {
        this.lengthUser = this.lengthUser + 8;
      } else {
        this.lengthUser = this.user.length;
      }
    },
    listShow(e) {
      if (e.target._prevClass === 'list-down-cret') {
        showMe(e.target);
      } else if (e.target._prevClass === 'ri-arrow-down-s-line') {
        showMe(e.target.parentElement.parentElement);
        //  console.log(e.target.parentElement.parentElement)
      }

      function showMe(e) {
        let myinterval;
        // $('.list-down-cret').on('click', function () {
        const lengthList = $(e).parent().find('li');

        $('.search li').not($(e).parent()).removeClass('active-ul');
        $('.search li')
          .not($(this).parent().find('li'))
          .removeClass('list-li-active');

        clearInterval(myinterval);
        const el = e.parentElement.querySelector('ul');
        const height = el.scrollHeight;
        el.style.setProperty('--max-height', height + 50 + 'px');

        if ($(e).parent().hasClass('active-ul') === true) {
          //  let i = lengthList.length-1;

          $(e).parent().removeClass('active-ul');
          lengthList.removeClass('list-li-active');
          // const myinterval = setInterval(function () {
          //   lengthList.eq(i).removeClass('list-li-active');
          //   console.log("g")
          //   if (i === 0) {
          //     clearInterval(myinterval);
          //   } else {
          //     i--;
          //   }
          // }, 100);
        } else {
          let i = 0;
          $(e).parent().addClass('active-ul');
          // for(let i =0; i < lengthList.length; i++) {

          // }

          myinterval = setInterval(function () {
            lengthList.eq(i).addClass('list-li-active');

            if (i === lengthList.length - 1) {
              clearInterval(myinterval);
            } else {
              i++;
            }
          }, 100);
        }
        // });
      }
    },
    reqFilter(e) {
      const myThis = this;

      if ($(e.target).attr('data-req') != null) {
        if (location.href.split('?')[1] !== undefined) {
          if (
            location.href
              .split('?')
              .find((el) => el === $(e.target).attr('data-req')) === undefined
          ) {
            saveUrl('?');
          }
        } else {
          saveUrl('?');
        }
      }

      //  if($(e.target).attr('data-reqplus') != null) {
      //       if(location.href.split("?")[1] !== undefined) {
      //      if(location.href.split("?")[1].split("&").find(el => el === $(e.target).attr('data-req')) === undefined) {
      //         saveUrl("&")
      //      }

      //    } else {
      //      saveUrl("&")
      //    }
      //  }

      function saveUrl(mark) {
        if (mark === '?') {
          window.history.pushState(
            { user: myThis.user, member: myThis.member, search: myThis.search },
            'null',
            window.location.href
          );

          myThis.user = '';

          axios.get('/api/member.json').then(function (status) {
            if (status.data.length >= 8) {
              myThis.lengthUser = 8;
            } else {
              myThis.lengthUser = status.data.length;
            }
            myThis.user = status.data;
            myThis.search = $(e.target).text();
            window.history.pushState(
              {
                user: myThis.user,
                member: myThis.member,
                search: myThis.search,
              },
              'null',
              window.location.href.split('?')[0] +
                `${mark}${$(e.target).attr('data-req')}`
            );
          });
        }
      }
    },
    clearSercsh() {
      const myThis = this;
      window.history.pushState(
        { user: myThis.user, member: myThis.member, search: myThis.search },
        'null',
        window.location.href
      );

          myThis.user = '';

          axios.get('/api/user.json').then(function (status) {
            if (status.data.length >= 8) {
              myThis.lengthUser = 8;
            } else {
              myThis.lengthUser = status.data.length;
            }
            myThis.user = status.data;
            myThis.search = "";
            window.history.pushState(
              {
                user: myThis.user,
                member: myThis.member,
                search: myThis.search,
              },
              'null',
              window.location.href.split('?')[0]
            );
          });

    },
  },
};
</script>
