import { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";
export default function Document() {
  return (
    <Html>
      <Head>
        {/* <script
          async
          src={`https://googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />
        <script
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
  gtag("set", "ads_data_redaction", true);
  gtag("set", "url_passthrough", true);
  `,
          }}
        />

        <script
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
                page_path: window.location.pathname,
            });
            `,
          }}
        />
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="e5aaf93d-bac8-47e1-ba92-025aa75b7489"
          data-blockingmode="auto"
          type="text/javascript"
        /> */}
      </Head>
      <body>
      <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
