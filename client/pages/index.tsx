import Head from "next/head";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>filll Shoping_mall</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Layout>
          <Main />
        </Layout>
      </div>
    </>
  );
}
