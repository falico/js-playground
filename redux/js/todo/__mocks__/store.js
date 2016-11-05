const Store = jest.fn((state) => {
  return {
    subscribe: () => {},
    dispatch: jest.fn(() => {}),
    getState: () => {
      return { ...state };
    }
  }
});

export default Store;
