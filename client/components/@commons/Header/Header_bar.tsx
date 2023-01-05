import Image from "next/image";
import { useRouter } from "next/router";
import Image from "next/image";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  return (
    <div className="bg-white shadow rounded px-9 py-5 line-height: 100px">
      <div className="flex justify-between">
        <div className="py-5">ABOUT</div>
        <button
          type="button"
          onClick={() => {
            router.push({ pathname: "/" });
          }}
        >
          <Image
            src={require("../../../Images/fulll_logo.png")}
  const router = useRouter();
  return (
    <div className="bg-white shadow rounded px-9 py-5 line-height: 100px">
      <div className="flex justify-between">
        <div className="py-5">ABOUT</div>
        <button
          type="button"
          onClick={() => {
            router.push({ pathname: "/" });
          }}
        >
          <Image
            src={require("../../../Images/fulll_logo.png")}
            alt="logo"
            width={110}
            height={500}
          />
            height={500}
          />
        </button>

        <button>장바구니</button>
      </div>
    </div>
  );
}

export default Header;

export default Header;
