export default {
  state: {
    tasklist: []
  },
  actions: {},
  mutations: {
    changeTasklist (state, data) {
      state.tasklist = data
    }
  }
}