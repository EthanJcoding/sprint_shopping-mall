import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Item_detail = (): any => {
  const priceData = useSelector((state: RootState) => state.cartInput.price);
  console.log(priceData);
  //기종
  const [index, setIndex] = useState("0");
  //기기
  const [model, setModel] = useState("0");

  const onSelect = (event: any) => {
    setIndex(event.target.value);
  };

  const onChoice = (event: any) => {
    setModel(event.target.value);
  };
  // const navigate = useNavigate();
  const router = useRouter();
  const consoleAA = (index: any) => {
    console.log(`전달해줄 index = ${index}`);
    console.log(`전달해줄 model = ${model}`);
    // console.log(`브랜드는 ${index}이고, 모델은 ${model}이다`)
    router.push({
      // pathname: '/order_page',
      query: {
        brand: index,
        model: model,
      },
    });
  };
  return (
    <div className="bg-green-200 h-screen w-1/2">
      <div className="py-12 mx-20 text-2xl">
        <div className="mb-3 text-3xl font-bold">
          {/*제목 받아오기 */}산뜻한 그린리프 케이스
        </div>
        <div className="mb-3">
          {/*가격 받아오기 */}KRW 14,000
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
            <select className="mx-3" value={index} onChange={onSelect}>
              <option value="0">기종 선택</option>
              <option value="Apple">Apple</option>
              <option value="Galaxy">Galaxy</option>
            </select>
            {index === "0" ? (
              <select value={index} onChange={onSelect}>
                <option value="기종 선택">기기 선택</option>
              </select>
            ) : null}
            {index === "Apple" ? (
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
            {index === "Galaxy" ? (
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
          <button
            className="my-7 mx-20 ml-[100px] py-5 px-14 bg-green-300 items-center"
            onClick={consoleAA}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item_detail;
