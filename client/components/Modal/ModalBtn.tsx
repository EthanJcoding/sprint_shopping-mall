import React from "react";
import Link from "next/link";

const ModalBtn = ({ isvisible, onClose }:any) => {
    if( !isvisible ) return null;

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
            <div className="bg-white rounded w-10/12 md:w-1/3">
                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <h3 className="font-extrabold">주문완료</h3>
                    <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
                </div>
                <div className="text-gray-500 text-sm px-4 py-8">
                    주문해주셔서 감사합니다.
                </div>
                <div className="flex justify-center items-center w-100 border-t p-3 text-gray-50">
                    <Link as="/" href={{pathname: "/"}}>
                        <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mr-10">
                        홈
                        </button>
                    </Link>
                    <button className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white" onClick={() => onClose()}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalBtn
