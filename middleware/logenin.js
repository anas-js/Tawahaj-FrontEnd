export default function({app,redirect,route}) {
  // if(app.$fire.auth.currentUser !== null) {
  //   redirect("/")
  // }
//  if(app.$fire.auth.currentUser === null) {
  // return redirect(`/profile`);
 // }
 app.$fire.auth.onAuthStateChanged(function()  {
  if(app.$fire.auth.currentUser !== null) {
  redirect("/")
}
})




//  console.log(app.$fire.auth.currentUser.getIdToken().then(function (id) {
//   console.log(id)
// }))

// Whenever a user is accessing restricted content that requires authentication.

}
