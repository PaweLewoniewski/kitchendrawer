import { configureStore } from '@reduxjs/toolkit'
import multiReducers from './reducer'

export const store = configureStore({
  reducer: {multiReducers},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



// import { createStore  } from 'redux';
// import RootState from './reducer';
// // import thunk from 'redux-thunk';

// // const middlewares = [thunk];
// //const reduxTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// // const multiTools = [applyMiddleware(...middlewares),reduxTool ]


// const store = createStore(RootState);


// export default store;