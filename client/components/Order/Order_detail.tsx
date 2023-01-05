import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";

const Order_detail = () => {
  const dummy = [{ price: 14000, productName: "그린 리프 케이스" }];

  const CartList = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="text-xl font-bold mb-12">Order/Payments</div>
        <table className="flex flex-col border rounded-sm">
          <thead className="flex items-center justify-between border-b font-bold p-4">
            <tr className="flex justify-between w-16 ml-8">
              <input type="checkbox" />
              선택
            </tr>
            <tr>상품명</tr>
            <tr>금액</tr>
            <tr className="mr-8">수량</tr>
          </thead>
          <tbody className="flex items-center p-4 justify-between">
            <tr className="ml-8">
              <input type="checkbox" />
            </tr>
            <tr className="flex items-center">
              <Image
                className="w-48"
                alt="product"
                src={require("../../Images/case.png")}
              />
              <span>그린 리프 케이스</span>
            </tr>
            <tr className="mr-20">14,000</tr>
            <tr className="mr-4">
              <button>
                <FaMinus></FaMinus>
              </button>
              <span className="mx-2 font-bold text-2xl">1</span>
              <button>
                <FaPlus></FaPlus>
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const Purchase = () => {
    return (
      <button className="border rounded-lg px-8 py-4 bg-green-700 text-white font-medium hover:bg-green-600 ">
        결제하기
      </button>
    );
  };

  return (
    <div className="flex flex-col w-full p-8">
      <CartList />
      <div className="w-full flex justify-end mt-20">
        <Purchase />
      </div>
    </div>
  );
};

export default Order_detail;
