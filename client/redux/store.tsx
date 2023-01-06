// *** store.ts 파일
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./Slice/ProductInfoSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import orderReducer from "./Slice/OrderCartSlice";

const rootReducer = combineReducers({
  productInfo: productReducer,
  orderInfo: orderReducer,
});

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development", // 개발자도구 설정
  });

  return store;
};

// store 생성
export const store = makeStore();

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
