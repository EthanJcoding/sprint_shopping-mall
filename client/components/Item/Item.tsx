import Sidebar from "../@commons/Sidebar/Sidebar";
import Item_img from "./Item_img";
import Item_detail from "./Item_detail";

const Item = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Item_img />
      <Item_detail />
    </div>
  );
};

export default Item;
