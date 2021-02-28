import Document, { Head, Html, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../Modules/GoogleAnalytics";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', {page_path: window.location.pathname});
                  `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === "production" && (
            <script
              src="https://consent.cookiefirst.com/banner.js"
              data-cookiefirst-key="fbe27f4d-71e3-41b4-b721-2707ccb4aead"
            ></script>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
