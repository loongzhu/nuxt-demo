// main is the name of the store. It is unique across your application
// and will appear in devtools
export const usePersistedStore = defineStore("persisted", {
  // a function that returns a fresh state
  state: () => ({
    counter: 123,
    name: "Eduardo",
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    doubleCounter: (state) => state.counter * 2,
    // use getters in other getters
    doubleCounterPlusOne(): number {
      return this.doubleCounter + 1;
    },
  },
  // optional actions
  actions: {
    reset() {
      // `this` is the store instance
      this.counter = 0;
    },
    add() {
      this.counter++;
    },

    reduce() {
      this.counter--;
    },
  },

  persist: true,

  // persist: {
  //   storage: persistedState.localStorage,
  // },

  // persist: {
  //   storage: persistedState.sessionStorage,
  // },
});
