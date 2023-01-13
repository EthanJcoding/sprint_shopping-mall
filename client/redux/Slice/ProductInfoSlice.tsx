import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";

// initalState 타입 정의
type StateType = {
  price: number;
  productName: string;
};

// initalState 생성
const initialState: StateType = { price: 0, productName: "" };

// 슬라이스생성
export const productInfoSlice = createSlice({
  name: "productInfo",
  initialState,
  reducers: {
    selectedProduct: (state: StateType, action: PayloadAction<StateType>) => {
      state = action.payload;
      return state;
    },
  },
});

// 액션을 export 해준다.
export const { selectedProduct } = productInfoSlice.actions;

// 슬라이스를 export 해준다.
const productReducer: Reducer<typeof initialState> = productInfoSlice.reducer;

export default productReducer;
