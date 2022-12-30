const Order_detail = () => {
    return (
        <div className="bg-green-200 h-screen w-1/2">
            <div className="py-12 mx-20 text-2xl">
                <div className="mb-3 text-3xl font-bold">{/*제목 받아오기 */}산뜻한 그린리프 케이스</div>
                <div className="mb-3">{/*가격 받아오기 */}KRW 14,000<br /></div>
                <div className="text-xl">
                    <div className="mb-7">
                        {/* 이쪽부분은 내가 어떻게 만들면 좋게 만들어질까? */}
                        제품 유의 사항 : 모두가 사랑하는 케이스파이의 베스트 셀러 임팩트<br />케이스 - 혁신적인 EcoShock 기술로 한층 더 강력하게 업그레이드 된 보호력으로 찾아왔습니다.
                        </div>
                        <div>
                        자연에서 영감받아 만들어진 케이스 안쪽의 트위스터 패턴 디자인이 2.5m 높이 충격에서도 스마트폰을 보호해 밀리터리 등급 기준 4배에 달하는 보호력을 자랑합니다.
                        </div>
                    </div>
            </div>
            <div className="px-12 mx-7">
                <div className="text-lg">기기선택</div>
                <div className="ml-10">
                    <div className="flex mx-12 my-5">
                        <button className="relative flex justify-center items-center bg-white border focus:outline-none shadow
                        text-gray-600 rounded focus:ring ring-gray-200 group mx-5">
                            <p className="px-4">Apple</p>
                            <span className="border-1 p-2 hover:bg-gray-100">▼</span>
                            <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1
                            rounded">
                                <ul className="text-left-border rounded">
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b">Apple</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b">Galaxy</li>
                                </ul>
                            </div>
                        </button>
                        
                        <button className="relative flex justify-center items-center bg-white border focus:outline-none shadow
                        text-gray-600 rounded focus:ring ring-gray-200 group">
                            <p className="px-4">Iphone 11</p>
                            <span className="border-1 p-2 hover:bg-gray-100">▼</span>
                            <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1
                            rounded">
                                <ul className="text-left-border rounded ">
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b text-left" >Iphone 11</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b text-left">Iphone 11 Pro</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b text-left">Iphone 12</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b text-left">Iphone 12 Pro</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b text-left">Iphone 13</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b text-left">Iphone 13 Pro</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b text-left">Iphone 14</li>
                                    <li className="px-4 py-1 hover:bg-gray-100 border-b text-left">Iphone 14 Pro</li>
                                </ul>
                            </div>
                        </button>
                    </div>
                    <button className="my-7 mx-20 ml-[100px] py-5 px-14 bg-green-300 items-center">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Order_detail