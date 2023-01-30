// import Header from "./Header";
import Header from "../@commons/Header/Header_bar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
