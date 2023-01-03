import Sidebar from "../@commons/Sidebar/Sidebar";
import Order_img from "./Order_img";
import Order_detail from "./Order_detail";

const Order = () => {
  return (
    <div className="flex w-full">
      {/* <Header /> */}
      <Sidebar />
      <Order_img />
      <Order_detail />
    </div>
  );
};

export default Order;
