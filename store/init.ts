export const useInitStore = defineStore("initStore", {
  state: () => ({
    test: 1,
  }),
  getters: {
    getTest: (state) => {
      return state.test + 1
    },
  },
  actions: {
    increment() {
      this.test += 1
    },
  },
})
