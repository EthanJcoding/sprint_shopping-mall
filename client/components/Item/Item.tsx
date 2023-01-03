<<<<<<< HEAD
import Sidebar from "../@commons/Sidebar/Sidebar";
=======
import Sidebar from "../@commons/aside/Sidebar";
// import Header from "../@commons/Header/Header_bar";
>>>>>>> 152fec1ab758fa0c3556293d736bd5ac8f9f03d2
import Item_img from "./Item_img";
import Item_detail from "./Item_detail";

const Item = () => {
<<<<<<< HEAD
  return (
    <div className="flex w-full">
      <Sidebar />
      <Item_img />
      <Item_detail />
    </div>
  );
};

export default Item;
=======
    return (
        <div className="flex w-full">
            {/* <Header /> */}
            <Sidebar />
            <Item_img />
            <Item_detail />
        </div>
    )
}

export default Item
>>>>>>> 152fec1ab758fa0c3556293d736bd5ac8f9f03d2
