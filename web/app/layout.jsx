import { Footer, Layout } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'

export const metadata = {
  title: 'InvenHost',
  description: 'Extend InvenTree for your use case.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },}
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#1c1b22', light: '#fefce8' }} />
      <body>
        <Layout>
          {children}
          <Footer>
              <time>{new Date().getFullYear()}</time> © InvenHost by <a href="https://mjmair.com">@matmair</a>.
              <a href="/feed.xml" style={{float: 'right'}}>RSS</a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}