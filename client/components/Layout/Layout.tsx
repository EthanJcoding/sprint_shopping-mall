// import Header from "./Header";
import Header from "../@commons/Header/Header_bar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
