import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCallback, useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import ModalBtn from "../Modal/ModalBtn";
import { deleteOrder } from "../../redux/Slice/OrderCartSlice";

const Order_detail = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  // 모달창
  const [showModal, setShowModal] = useState(false);

  // HTML 매칭 문제 해결
  const dispatch = useDispatch();
  useEffect(() => {
    setMounted(true);
  }, []);

  const sliceData = useSelector((state: RootState) => state.orderInfo);
  const [data, setData] = useState(sliceData);

  // 2개 컴포넌트에서 사용중, 유틸로 뽑아도 될 듯
  const MoneyConvert = useCallback((price: number) => {
    const num = price.toString();
    return "₩ " + num.replace(num.slice(-3), "," + num.slice(-3));
  }, []);

  const handleDelete = (idx: number) => {
    setData(prevData => {
      const newData = [...prevData];
      dispatch(deleteOrder(idx));
      newData.splice(idx, 1);
      return newData;
    });
  };

  useEffect(() => {
    console.log(data);
    console.log(sliceData);
  }, [data]);

  const HandleQuantity = ({ idx }: { idx: number }) => {
    const [quantity, setQuantity] = useState(1);

    return (
      <td className="flex flex-col justify-center items-between">
        <div className="flex p-2">
          <button
            onClick={() => (quantity === 1 ? null : setQuantity(quantity - 1))}
          >
            <FaMinus></FaMinus>
          </button>
          <div className="mx-2 font-bold text-2xl">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <FaPlus></FaPlus>
          </button>
        </div>
        <div className="mt-2 p-2 text-2xl text-gray-400 border text-center">
          <button onClick={() => handleDelete(idx)}>X</button>
        </div>
      </td>
    );
  };

  const CartList = () => {
    //tbody에 map 걸고 진행해야함
    return (
      <table className="flex flex-col w-full border rounded-sm">
        <thead className="flex items-center justify-between border-b font-bold p-4">
          <tr className="flex justify-between w-16 ml-8">
            <td className="flex w-full justify-between">
              <input type="checkbox" />
              <span>선택</span>
            </td>
          </tr>
          <tr>
            <td>상품명</td>
          </tr>
          <tr>
            <td>금액</td>
          </tr>
          <tr className="mr-8">
            <td>수량</td>
          </tr>
        </thead>
        {data.map((el, idx) => {
          return (
            <tbody
              className="flex items-center p-4 justify-between border-b"
              key={idx}
            >
              <tr className="ml-8">
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr className="flex items-center">
                <td>
                  <Image
                    className="w-48"
                    alt="product"
                    src={require("../../Images/case.png")}
                  />
                </td>
                <td>
                  <div className="font-bold">{el.productName}</div>
                  <div className="text-sm text-gray-500">{el.model}</div>
                </td>
              </tr>
              <tr className="mr-20">
                {/* <td>{MoneyConvert(el.price)}</td> */}
              </tr>
              <tr className="mr-4">
                <HandleQuantity idx={idx} />
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  };

  const Purchase = () => {
    return (
      <>
        <button
          className="border rounded-lg px-8 py-4 bg-green-700 text-white font-medium hover:bg-green-600"
          onClick={() => setShowModal(true)}
        >
          주문하기
        </button>
        <ModalBtn isvisible={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  };

  return mounted ? (
    <div className="flex flex-col w-full p-8">
      <div className="text-xl font-bold mb-12">Order/Payments</div>
      <CartList />
      <div className="w-full flex justify-end mt-20">
        <Purchase />
      </div>
    </div>
  ) : null;
};

export default Order_detail;
