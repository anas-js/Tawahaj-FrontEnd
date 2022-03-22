<template>
  <div>
    <p>{{ $route.params.id }}</p>
  </div>
</template>
<script>
// import axios from 'axios';
export default {
 async validate({ params, $axios, route }) {

    let mydata = [];
    //   let mydata = "";
     await $axios.get('/user.json').then(function (status) {
        mydata = status.data.username
        //  status.data.username.find(ele => {
        //   return true
        //  })
          // const found = status.data.username.find(element => element === route.params.id);
          // console.log(found)
    })

    //  if (ele === route.params.id) {

    //  } else {

    //  }
    return mydata.includes(params.id);
    // for (let i = 0; i < mydata.length; i++) {
    //   if (mydata[i] === params.id) {
    //     return true;
    //   }
    // }
  },
};
</script>
