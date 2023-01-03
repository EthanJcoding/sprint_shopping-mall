import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initalState 타입 정의
type StateType = {
  price: number;
  productName: string;
};

// initalState 생성
const initialState: StateType = { price: 0, productName: "" };

// 슬라이스생성
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selctedPrice: (state: StateType, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

// 액션을 export 해준다.
export const { selctedPrice } = cartSlice.actions;

// 슬라이스를 export 해준다.
export default cartSlice;
