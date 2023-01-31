import { createSlice, PayloadAction, Reducer, current } from "@reduxjs/toolkit";

type StateType = Array<{
  img?: string;
  productName: string;
  price: number;
  brand: string;
  model: string;
  quantity: number;
}>;

const initialState: StateType = [];

let a: any = [];

export const orderCartSlice = createSlice({
  name: "orderInfo",
  initialState,
  reducers: {
    handleOrder: (state: StateType, action) => {
      console.log(action.payload);
    },
    selectOrder: (
      state: StateType,
      action: PayloadAction<{
        img?: string;
        productName: string;
        price: number;
        brand: string;
        model: string;
      }>,
    ) => {
      a = [...a, action.payload];
      state = a;
      return state;
    },
    deleteOrder: (state: StateType, action) => {
      state = [...a];
      state.splice(action.payload, 1);
      return state;
    },
  },
});

// 액션을 export 해준다.
export const { selectOrder } = orderCartSlice.actions;
export const { deleteOrder } = orderCartSlice.actions;
export const { handleOrder } = orderCartSlice.actions;
// 슬라이스를 export 해준다.
const orderReducer: Reducer<typeof initialState> = orderCartSlice.reducer;
export default orderReducer;