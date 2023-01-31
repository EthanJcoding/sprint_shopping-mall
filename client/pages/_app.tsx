import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "올취생_Sprint_shopping_mall",
  description: "Sprint_shopping_mall",
  canonical: "https://sprint-shopping-mall-gqgv.vercel.app/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://sprint-shopping-mall-gqgv.vercel.app/",
    title: "Sprint_shopping_mall",
    site_name: "filll_shopping_mall",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/sprint-shopping-mall.appspot.com/o/leaf_6_gold.png?alt=media&token=7c2ae51d-e862-4f98-8897-8bf52688ed7e",
        width: 285,
        height: 167,
        alt: "이미지"
      }
    ]
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DefaultSeo {...DEFAULT_SEO} />
      <PersistGate persistor={persistor} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
