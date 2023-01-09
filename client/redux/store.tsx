// *** store.ts 파일
// 슬라이스들을 통합한 store를 만들고, RootState를 정의해준다.

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./Slice/ProductInfoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import orderReducer from "./Slice/OrderCartSlice";

const rootReducer = combineReducers({
  productInfo: productReducer,
  orderInfo: orderReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV === "development", // 개발자도구 설정
  });

  return store;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// store 생성
export const store = makeStore();
export const persistor = persistStore(store);

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;