import Image from "next/image";
import { getProduct } from "../../firebase";
import { useState, useEffect, useCallback } from "react";
import Sidebar from "../@commons/Sidebar/Sidebar";
import { useRouter } from "next/router";

interface Product {
  price: number;
  productName: string;
  img: string;
}

const Main = () => {
  const router = useRouter();
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
          <button
            type="button"
            onClick={() => {
              router.push({ pathname: "/order" });
            }}
          >
            <Image
              alt="product"
              width={550}
              height={500}
              src={require("../../Images/case.png")}
            />
          </button>
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
      <div className="flex flex-wrap w-full">
        {products.map((el: Product, idx: number) => {
          return <Detail key={idx} arr={el}></Detail>;
        })}
      </div>
    </div>
  );
};

export default Main;
