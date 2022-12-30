import { Link } from "react-router-dom";
import Image from 'next/image'
function Header() {
    return (
      <div className="bg-white shadow rounded px-9 py-5 line-height: 100px">
        <div className="flex justify-between">
        <div className="py-5">
          ABOUT
        </div>
        <button>
            <Image src={require('../../../Images/fulll_logo.png')}
            alt="logo"
            width={110}
            height={500} 
            />
        </button>
        
        <button>
            장바구니
        </button>
        </div>
        </div>
    );
  }

  export default Header;