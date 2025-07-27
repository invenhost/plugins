import nextra from 'nextra'

const withNextra = nextra({
  latex: true,

})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
})