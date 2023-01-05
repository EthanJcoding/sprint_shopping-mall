import Image from 'next/image'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Item_img = () => {
    const priceData = useSelector((state: RootState) => state.productInfo);
    console.log('priceData',priceData.img);
    return (
        <div className="h-screen w-1/2">
            <div>
                <img src={priceData.img}
                alt="case_img"
                width={1200}
                // height={500} 
                />
            </div>
        </div>
    )
}

export default Item_img