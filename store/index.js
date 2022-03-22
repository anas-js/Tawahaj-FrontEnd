export default {
  state: () => ({
    lastRandom : []
  }),
  mutations : {
    rundomNum(state,data) {
      state.lastRandom.push(data)
    },
    clearNumber(state) {
      state.lastRandom = []
    }
  }
}
