import nextra from 'nextra'

const withNextra = nextra({
  latex: true,

})
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

export default withNextra({
  reactStrictMode: true
})