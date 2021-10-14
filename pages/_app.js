import "../styles/globals.scss";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        titleTemplate={`%s | Handyman Contractor`}
        defaultTitle="Handyman Contractor"
        openGraph={{
          locale: "en_US",
          site_name: "Handyman Contractor",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
