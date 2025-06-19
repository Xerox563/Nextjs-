import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";
import Script from "next/script";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Demo Page (New One)</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("FB Script is Loaded !!");
        }}
      />
      {/* strategy :: controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time 
          onLoad ::It is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly  */}
      <h1>
        Hi demo page <Link href={"/demo/in"}>Go Inside</Link>{" "}
      </h1>
    </Layout>
  );
};

export default index;

// Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.
//Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.
/* 
Code splitting and prefetching
Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.
This ensures that the homepage loads quickly even if you have hundreds of pages.
Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.
Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

In Short ::
Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).

*/
