import { createSlice, PayloadAction, Reducer } from "@reduxjs/toolkit";

// initalState 타입 정의
type StateType = {
  img?: string;
  productName: string;
  price: number;
  brand: string;
  model: string;
};

const initialState: StateType = {
  img: "",
  productName: "",
  price: 0,
  brand: "",
  model: "",
};

// 슬라이스생성
export const orderCartSlice = createSlice({
  name: "orderInfo",
  initialState,
  reducers: {
    selectOrder: (state: StateType, action: PayloadAction<StateType>) => {
      state = action.payload;
      return state;
    },
  },
});

// 액션을 export 해준다.
export const { selectOrder } = orderCartSlice.actions;

// 슬라이스를 export 해준다.
const orderReducer: Reducer<typeof initialState> = orderCartSlice.reducer;
export default orderReducer;
