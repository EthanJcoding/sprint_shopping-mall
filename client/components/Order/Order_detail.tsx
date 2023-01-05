import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCallback, useState, useEffect } from "react";

const Order_detail = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  // HTML 매칭 문제 해결
  useEffect(() => {
    setMounted(true);
  }, []);

  const [dummy, setDummy] = useState([
    { price: 14000, productName: "그린 리프 케이스" },
    { price: 16000, productName: "퍼플 리프 케이스" },
  ]);

  const MoneyConvert = useCallback((price: number) => {
    const num = price.toString();
    // 1,000,000 원 물품 판매시 slice 메서드에 3대신 변수를 넣어서 리펙토링
    return "₩ " + num.replace(num.slice(-3), "," + num.slice(-3));
  }, []);

  const HandleQuantity = ({ idx }: { idx: number }) => {
    const [quantity, setQuantity] = useState(1);

    if (quantity < 1) {
      setDummy(dummy.splice(idx, 1));
    }

    return (
      <td>
        <div role="button" onClick={() => setQuantity(quantity - 1)}>
          <FaMinus></FaMinus>
        </div>
        <div className="mx-2 font-bold text-2xl">{quantity}</div>
        <div role="button" onClick={() => setQuantity(quantity + 1)}>
          <FaPlus></FaPlus>
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
            <td>
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
        {dummy.map((el, idx) => {
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
                <td>{el.productName}</td>
              </tr>
              <tr className="mr-20">
                <td>{MoneyConvert(el.price)}</td>
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
      <button className="border rounded-lg px-8 py-4 bg-green-700 text-white font-medium hover:bg-green-600 ">
        결제하기
      </button>
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
