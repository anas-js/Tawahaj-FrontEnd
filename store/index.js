export default {
  state: () => ({
    lastRandom : [],
    user : "",
    isLoggin : false,
    loading : true,
    isLoadPage : false
  }),
  mutations : {
    rundomNum(state,data) {
      state.lastRandom.push(data)
    },
    clearNumber(state) {
      state.lastRandom = []
    },
    setDataUser(state,dataUser) {
      state.user = dataUser;
    },
    isLogin(state,status) {
      state.isLoggin = status;
    },
    setUser(state,user) {
      state.user = user
    },
    load(state,load) {
      state.loading = load;
    },
    setUsername(state,username) {
      state.user.username = username;
    },
    setPhoto(state, url) {
      state.user.photoUrl = url
      state.user.photo = true
    },
    lodedPage(state,load) {
      state.isLoadPage = load
    }
  }
}
