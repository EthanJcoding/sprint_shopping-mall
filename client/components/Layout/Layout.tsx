// import Header from "./Header";
import Header from "../@commons/Header/Header_bar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
