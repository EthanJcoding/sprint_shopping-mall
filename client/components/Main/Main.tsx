import Link from "next/link";
import { getProduct } from "../../firebase";
import { useState, useEffect, useCallback } from "react";
import Sidebar from "../@commons/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectedProduct } from "../../redux/Slice/ProductInfoSlice";

interface Product {
  price: number;
  productName: string;
  img?: string;
}

const Main = () => {
  const data = useSelector((state: RootState) => state.productInfo);
  const dispatch = useDispatch();
  const newData = (arr: any) => {
    dispatch(selectedProduct(arr)); // onClick value ?
  };

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
        <div className="">
          <Link
            as="/item_page"
            href={{
              pathname: "/item_page",
              query: { data: JSON.stringify(data) },
            }}
          >
            <button
              type="button"
              onClick={() => {
                newData(arr);
              }}
            >
              <img src={arr.img} />
            </button>
          </Link>
          <div className="text-center text-green-700">
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
      <div className="flex flex-wrap w-full ">
        {products.map((el: Product, idx: number) => {
          return <Detail key={idx} arr={el}></Detail>;
        })}
      </div>
    </div>
  );
};

export default Main;
