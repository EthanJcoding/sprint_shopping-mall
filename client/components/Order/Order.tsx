import Sidebar from "../@commons/aside/Sidebar";
// import Header from "../@commons/Header/Header_bar";
import Order_img from "./Order_img";
import Order_detail from "./Order_detail";

const Order = () => {
    return (
        <div className="flex">
            {/* <Header /> */}
            <Sidebar />
            <div>
                <Order_img />
            </div>
            <div>
                <Order_detail />
            </div>
        </div>
    )
}

export default Order