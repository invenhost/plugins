import { Footer, Layout } from "nextra-theme-blog";
import { Head } from "nextra/components";
import "nextra-theme-blog/style.css";
import "../styles/main.css";
import { Anchor } from "nextra/components";
export const metadata = {
  title: "InvenHost",
  description: "Extend InvenTree for your use case.",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#1c1b22', light: '#fefce8' }} />
      <body>

        <Layout>
          <Header />
          {children}
          <Footer>
            <time>{new Date().getFullYear()}</time> © InvenHost by <a href="https://mjmair.com">@matmair</a>.
            <a href="/feed.xml" style={{ float: 'right' }}>RSS</a>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}

const Header = () => {
  return <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <h1></h1>
    <span style={{ marginBottom: '2rem' }}
    >
      <Anchor href={'/'} style={{ textDecoration: 'none', paddingRight: '1rem' }}>
        About
      </Anchor>
      <Anchor href={'/posts'} style={{ textDecoration: 'none' }}>
        Blog
      </Anchor>
    </span>
  </div>
};
