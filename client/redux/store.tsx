// *** store.ts 파일
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import { configureStore, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartSlice from "./Slice/ProductInfoSlice";

// import logger from "redux-logger";

// 리덕스 store 생성함수
const makeStore = () => {
  const store = configureStore({
    reducer: {
      productInfo: cartSlice.reducer,
    },
    devTools: process.env.NODE_ENV === "development", // 개발자도구 설정
  });

  return store;
};

// store 생성
export const store = makeStore();

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;
