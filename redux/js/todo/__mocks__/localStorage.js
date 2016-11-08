const localStorageMock = (() => {
  var store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    }
  }
})();

export default localStorageMock;
