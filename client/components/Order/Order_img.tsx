import Image from 'next/image'

const Order_img = () => {
    return (
        <div className="h-screen w-1/2">
            <div>
                <Image src={require('../../Images/case.png')}
                alt="case"
                width={1200}
                // height={500} 
                />
            </div>
        </div>
    )
}

export default Order_img