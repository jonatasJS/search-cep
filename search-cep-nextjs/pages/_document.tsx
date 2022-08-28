/* eslint-disable @next/next/no-title-in-document-head */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /> */}
          <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,300italic,regular,italic,500,500italic,700,700italic" rel="stylesheet" />
          <meta
            name="og:title"
            property="og:title"
            content="Search for a zip code"
          />
          <meta
            name="description"
            content="Search for a zip code, zipcode or CEP"
          />
          <meta name="robots" content="index, follow" />

          <meta property="og:url" content="https://cep.jonatas.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Search for a zip cod" />
          <meta
            property="og:description"
            content="Search for a zip code, zipcode or CEP"
          />
          <meta
            property="og:image"
            content="https://www.site-shot.com/cached_image/_zTbXIzhEey1MgJCrBEAAg"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="720" />
          <meta property="og:image:height" content="480" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="cep.jonatas.app" />
          <meta property="twitter:url" content="https://cep.jonatas.app/" />
          <meta name="twitter:title" content="Search for a zip code" />
          <meta
            name="twitter:description"
            content="Search for a zip code, zipcode or CEP"
          />
          <meta
            name="twitter:image"
            content="https://www.site-shot.com/cached_image/_zTbXIzhEey1MgJCrBEAAg"
          />

          <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
