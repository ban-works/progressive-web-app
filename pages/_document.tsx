import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const GTM_ID = 'GTM-PFCM7MZ'

  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <noscript
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
    }}
  />
      </body>
    </Html>
  )
}
