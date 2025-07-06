export default async function({app,redirect,route,store}) {

await app.$fire.auth.onAuthStateChanged(async function()  {
    if(app.$fire.auth.currentUser !== null && store.state.isLoadPage === false) {
     await app.$fire.firestore
      .collection('user')
      .doc(app.$fire.auth.currentUser.uid)
      .get().then(async function(data) {

       store.commit("setUser", data.data())

       if(data.data().photo === true) {
        await app.$fire.storage.ref(app.$fire.auth.currentUser.uid).getDownloadURL().then(function(url) {
        store.commit("setPhoto", url)
     });
       }

       setTimeout(() => {
        store.commit("load", false)
       },600);
      });


  } else {
    setTimeout(() => {
      store.commit("load", false)
     }, 600);
  }

  store.commit("lodedPage", true)

})


}
