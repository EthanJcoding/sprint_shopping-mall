import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Order from "../components/Order/Order";

export default function order_page() {
  return (
    <>
      <Head>
        <title>filll Shoping_mall</title>
        <meta name="description" content="Nextjs 뿌시기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Order />
      </Layout>
    </>
  );
}
