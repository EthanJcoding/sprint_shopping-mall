import { getProduct } from "../../firebase";
import { useState, useEffect, useMemo, useCallback } from "react";
import Sidebar from "../@commons/aside/Sidebar";

interface Product {
  price: number;
  productName: string;
  img: string;
}
9;
const Main = () => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    getProduct().then(data => setProducts(data));
  }, []);

  const MoneyConvert = useCallback((price: number) => {
    const num = price.toString();
    // 1,000,000 원 물품 판매시 slice 메서드에 3대신 변수를 넣어서 리펙토링
    return "₩ " + num.replace(num.slice(-3), "," + num.slice(-3));
  }, []);

  const Detail = ({ arr }: { arr: Product }) => {
    return (
      <div className="w-1/3">
        <div className="flex-col">
          <img className="" src={arr.img} />
          <div className="flex-col text-center text-green-700">
            <div className="py-2">{MoneyConvert(arr.price)}</div>
            <div className="py-2">{arr.productName}</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex">
      <Sidebar />
      <section className="flex w-5/6">
        {products.map((el: Product, idx: number) => {
          return <Detail key={idx} arr={el}></Detail>;
        })}
      </section>
    </div>
  );
};

export default Main;
