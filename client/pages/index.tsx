import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>명환님 우리 취업 화이팅..!</title>
          <meta name="description" content="Nextjs 뿌시기" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Main />
      </Layout>
    </>
  );
}
