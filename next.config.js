/** @type {import('next').NextConfig} */
const nextConfig = {
  // Subdomain khusus LP Big Size: tampilkan halaman /sakeena-bigsize di alamat utama subdomain.
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', has: [{ type: 'host', value: 'sakeena-bigsize.azmayra.tech' }], destination: '/sakeena-bigsize' },
      ],
    }
  },
}
module.exports = nextConfig
