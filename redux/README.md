# Redux playground

Based on the Todo sample app from the Redux Basics documentation.

Actions follow the guidelines set by [Flux Standard Action](https://github.com/acdlite/flux-standard-action).

Jest and Enzyme are used for snapshots and unit tests.
A fake store based on Shane Brunson's [Unit Testing Redux Container Components](http://www.wsbrunson.com/react/redux/test/2016/05/08/testing-redux-containers.html) is used for testing.

Due to https://github.com/facebook/react/issues/7386, two separate test files had to be made for the AddTodo container component.
