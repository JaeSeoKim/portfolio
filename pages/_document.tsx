import * as React from 'react'
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { site } from '../setting/constants'

export default class extends Document {
  static async getInitialProps (ctx: DocumentContext) {
    const documentProps = await Document.getInitialProps(ctx)
    const { renderPage } = ctx
    const page = renderPage()

    return { ...documentProps, ...page }
  }

  render () {
    return (
      <html lang='ko'>
        <Head>
          <title>{site.SITE_TITLE}</title>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes'
          />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content={site.SITE_NAME} />
          <meta property='og:title' content={site.SITE_TITLE} />
          <meta property='og:description' content={site.SITE_DESCRIPTION} />
          <meta property='og:image' content={site.SITE_IMAGE} />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content={site.SITE_NAME} />
          <meta name='twitter:title' content={site.SITE_TITLE} />
          <meta name='twitter:description' content={site.SITE_DESCRIPTION} />
          <meta property='twitter:image' content={site.SITE_IMAGE} />
          <meta
            name='format-detection'
            content='telephone=no, address=no, email=no'
          />
          <link rel='shortcut icon' href='/static/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
