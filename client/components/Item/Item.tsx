import Sidebar from "../@commons/Sidebar/Sidebar";
import Item_img from "./Item_img";
import Item_detail from "./Item_detail";
import Footer from "../Layout/Footer";

const Item = () => {
  return (
    <div>
      <div className="flex w-full h-screen">
        <Sidebar />
        <Item_img />
        <Item_detail />
      </div>
        <Footer />
    </div>
  );
};

export default Item;
