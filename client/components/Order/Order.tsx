import Sidebar from "../@commons/aside/Sidebar";
import Order_detail from "./Order_detail";

const Order = () => {
    return (
        <div className="flex w-full">
            <Sidebar />
            <Order_detail />
        </div>
    )
}

export default Order