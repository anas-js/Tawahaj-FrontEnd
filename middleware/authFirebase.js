export default function({app,redirect,route,store}) {
  // if(app.$fire.auth.currentUser === null) {
  //   redirect("/login")
  // }

  //  console.log(route)

  // eslint-disable-next-line prefer-regex-literals
  // const myRegExp = new RegExp(/(login|signup|username|[/])/g)
  // && myRegExp.test(route.path) === false

  app.$fire.auth.onAuthStateChanged(function()  {

    if(app.$fire.auth.currentUser === null) {
    redirect("/login")
  }
  store.commit("isLogin", !! app.$fire.auth.currentUser)
  })

  // console.log(app.$fire.auth.currentUser.getIdToken().then(function (id) {
  //   console.log(id)
  // }))
}





//  if(app.$fire.auth.currentUser === null) {
//   return redirect(`/profile`);
//  }
