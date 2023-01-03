// *** store.ts 파일
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";

// import logger from "redux-logger";

// 리덕스 store 생성함수
const makeStore = () => {
  // 미들웨어 추가(필요 없을 경우 생략)
  const middleware = getDefaultMiddleware();
  //   if (process.env.NODE_ENV === "development") {
  //     middleware.push(logger);
  //   }

  // 슬라이스 통합 store 생성
  const store = configureStore({
    reducer: {
      cartInput: cartSlice.reducer,
      // [counterSlice.name]: counterSlice.reducer, // 위와 동일한 코드다.
      // [numberSlice.name]: numberSlice.reducer
    },
    middleware, // 미들웨어 불필요시 생략
    // middleware: [...getDefaultMiddleware(), logger]
    devTools: process.env.NODE_ENV === "development", // 개발자도구 설정
  });

  return store;
};

// store 생성
const store = makeStore();

// store 엑스포트
export default store;

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;

// 아래와 같이 간단하게 store를 생성해도 된다.
/*
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
  middleware: [...getDefaultMiddleware(), logger]
  devTools: process.env.NODE_ENV === 'development'
});
*/
