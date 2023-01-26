import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


const Item_img = () => {
    const priceData = useSelector((state: RootState) => state.productInfo);
    return (
        <div className=" mt-14 md:h-screen mt-1">
            <div className="flex justify-center">
                <img className="w-80 md:w-max" src={priceData.img}
                alt="case_img"
                width={1200}
                />
            </div>
        </div>
    )
}

export default Item_img
