import { ChangeEvent, FC, useEffect, useState } from "react";
// import { useRouter } from 'next/router';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectOrder } from "../../redux/Slice/OrderCartSlice";

interface Product {
  value?: string;
}

const Item_detail = ({ value }: Product) => {
  const priceData = useSelector((state: RootState) => state.productInfo);

  const productName: string = priceData.productName;
  const price: string = priceData.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [brand, setBrand] = useState(value);
  const [model, setModel] = useState(value);
  const [quantity] = useState(1);
  const [order, setOrder] = useState(priceData);

  const dispatch = useDispatch();

  const newData = (arr: any) => {
    dispatch(selectOrder(arr));
  };

  useEffect(() => {
    let order_cart = { ...order, brand, model, quantity };
    setOrder(order_cart);
  }, [model, brand]);

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBrand(event.target.value);
  };

  const onChoice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setModel(event.target.value);
  };

  return (
    <div className="bg-main_color2 md:bg-main_color2">
      <div className="text-sm md:text-2xl py-12 mx-20">
        <div className="md:mb-3 font-bold ">{productName}</div>
        <div className="md:mb-3">
          KRW {price}
          <br />
        </div>
        <div className="md:text-xl">
          <div className="md:mb-7">
            제품 유의 사항 : 모두가 사랑하는 케이스파이의 베스트 셀러 임팩트
            <br />
            케이스 - 혁신적인 EcoShock 기술로 한층 더 강력하게 업그레이드 된
            보호력으로 찾아왔습니다.
          </div>
          <div>
            자연에서 영감받아 만들어진 케이스 안쪽의 트위스터 패턴 디자인이 2.5m
            높이 충격에서도 스마트폰을 보호해 밀리터리 등급 기준 4배에 달하는
            보호력을 자랑합니다.
          </div>
        </div>
      </div>
      <div className="place-content-center md:px-12 mx-7">
        <div className="hidden md:flex mb-3">기기선택</div>
        <div className="">
          <div className="flex justify-center md:justify-start">
            <select className="mr-3" value={brand} onChange={onSelect}>
              <option value="0">기종 선택</option>
              <option value="Apple">Apple</option>
              <option value="Galaxy">Galaxy</option>
            </select>
            {brand === value ? (
              <select className="" value={brand} onChange={onSelect}>
                <option value="기종 선택">기기 선택</option>
              </select>
            ) : null}
            {brand === "Apple" ? (
              <select name="Apple" onChange={onChoice}>
                <option label="기기선택"></option>
                <option value="iphone11" label="Iphone 11"></option>
                <option value="iphone11 Pro" label="Iphone 11 Pro"></option>
                <option value="iphone12" label="Iphone 12 "></option>
                <option value="iphone12 Pro" label="Iphone 12 Pro"></option>
                <option value="iphone13" label="Iphone 13 "></option>
                <option value="iphone13 Pro" label="Iphone 13 Pro"></option>
                <option value="iphone14" label="Iphone 14 "></option>
                <option value="iphone14 Pro" label="Iphone 14 Pro"></option>
              </select>
            ) : null}
            {brand === "Galaxy" ? (
              <select name="Galaxy" onChange={onChoice}>
                <option label="기기선택"></option>
                <option value="GALAXY S21" label="GALAXY S21"></option>
                <option
                  value="GALAXY S21 PLUS"
                  label="GALAXY S21 PLUS"
                ></option>
                <option
                  value="GALAXY S21 ULTRA"
                  label="GALAXY S21 ULTRA"
                ></option>
                <option value="GALAXY S22 " label="GALAXY S22 "></option>
                <option
                  value="GALAXY S22 PLUS"
                  label="GALAXY S22 PLUS"
                ></option>
                <option
                  value="GALAXY S22 ULTRA"
                  label="GALAXY S22 ULTRA"
                ></option>
                <option value="GALAXY NOTE 20" label="GALAXY NOTE 20"></option>
                <option
                  value="GALAXY NOTE 20 ULTRA"
                  label="GALAXY NOTE 20 ULTRA"
                ></option>
                <option
                  value="GALAXY Z FLIP 3"
                  label="GALAXY Z FLIP 3"
                ></option>
                <option
                  value="GALAXY Z FLIP 4"
                  label="GALAXY Z FLIP 4"
                ></option>
                <option
                  value="GALAXY Z FOLD 4"
                  label="GALAXY Z FOLD 4"
                ></option>
                <option
                  value="GALAXY Z FOLD 4"
                  label="GALAXY Z FOLD 4"
                ></option>
              </select>
            ) : null}
          </div>
          <Link
            as="/order_page"
            href={{
              pathname: "/order_page",
            }}
          >
            <div className="flex justify-center md:justify-start">
              <button
                className="mt-5 py-5 bg-black w-52 text-white font-bold mb-5 "
                onClick={() => {
                  newData(order);
                }}
              >
                장바구니 담기
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item_detail;
