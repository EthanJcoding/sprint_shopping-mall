import Sidebar from "../@commons/aside/Sidebar";
// import Header from "../@commons/Header/Header_bar";
import Item_img from "./Item_img";
import Item_detail from "./Item_detail";

const Item = () => {
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