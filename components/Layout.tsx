import React from 'react'
import Head from 'next/head'
import Nav from './common/Nav'
import Footer from './common/Footer'
import Divder from './common/Divder'
import PhotoFrame from './profile/PhotoFrame'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <Nav />
    </header>
    <div className='container mx-auto px-6'>{children}</div>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Layout
