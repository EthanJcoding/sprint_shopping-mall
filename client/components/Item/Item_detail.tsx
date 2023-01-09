import { useEffect, useState } from "react";
// import { useRouter } from 'next/router';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectOrder } from "../../redux/Slice/OrderCartSlice";

const Item_detail = () => {
  const priceData = useSelector((state: RootState) => state.productInfo);

  const productName: string = priceData.productName;
  const price: number = priceData.price;
  const [brand, setBrand] = useState("0");
  const [model, setModel] = useState("0");

  const [order, setOrder] = useState(priceData);
  // setBrand, setModel, productName, price 묶어야함
  // setOrder ...ordr + 필요한 데이터

  const dispatch = useDispatch();
  const newData: any = (arr: any) => {
    console.log(arr);
    dispatch(selectOrder(arr));
  };

  useEffect(() => {
    let order_cart = { ...order, brand, model };
    setOrder(order_cart);
  }, [model, brand]);

  const onSelect = (event: any) => {
    setBrand(event.target.value);
  };

  const onChoice = (event: any) => {
    setModel(event.target.value);
  };

  return (
    <div className="bg-green-200 h-screen w-1/2">
      <div className="py-12 mx-20 text-2xl">
        <div className="mb-3 text-3xl font-bold">{productName}</div>
        <div className="mb-3">
          KRW {price}
          <br />
        </div>
        <div className="text-xl">
          <div className="mb-7">
            {/* 이쪽부분은 내가 어떻게 만들면 좋게 만들어질까? */}
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
      <div className="px-12 mx-7">
        <div className="text-lg">기기선택</div>
        {/* <form action="order_page" method="post"> */}
        <div>
          <div className="ml-10">
            <select className="mx-3" value={brand} onChange={onSelect}>
              <option value="0">기종 선택</option>
              <option value="Apple">Apple</option>
              <option value="Galaxy">Galaxy</option>
            </select>
            {brand === "0" ? (
              <select value={brand} onChange={onSelect}>
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
            <button
              className="my-7 mx-20 ml-[100px] py-5 px-14 bg-green-300 items-center"
              onClick={() => {
                newData(order);
              }}
            >
              담기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Item_detail;
