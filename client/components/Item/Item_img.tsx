import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


const Item_img = () => {
    const priceData = useSelector((state: RootState) => state.productInfo);
    return (
        <div className="h-screen w-1/2 mt-14">
            <div>
                <img src={priceData.img}
                alt="case_img"
                width={1200}
                />
            </div>
        </div>
    )
}

export default Item_img