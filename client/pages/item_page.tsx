import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Item from "../components/Item/Item";

export default function item_page() {
  return (
    <>
      <Head>
        <title>filll Shoping_mall</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Item />
      </Layout>
    </>
  );
}
