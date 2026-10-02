# Route landing page Move With Your Cycle

Landing page baru tersedia di `/planner-siklushaid-muslimah`.

- Semua tombol pemesanan menuju `https://lynk.id/azmayra/1pqqd8j4wx8z`.
- Atur `META_PIXEL_ID_DIGITAL` di environment hosting untuk mengaktifkan Pixel khusus produk digital. Jika variabel kosong, Pixel digital tidak dimuat.
- Pixel digital mencatat `PageView` dan `InitiateCheckout` saat pengunjung menekan tombol ke Lynk. Event `Purchase` tidak dikirim dari LP karena pembayaran selesai di Lynk.
- Endpoint CAPI yang sudah ada (`/api/capi`) tetap menggunakan konfigurasi Pixel fisik yang lama. Jangan masukkan token CAPI ke variabel Pixel digital atau ke browser.
- Setelah menambahkan variabel environment di hosting, build/deploy ulang aplikasi.

Jalankan lokal dengan `npm install`, lalu `npm run dev`. Buka `http://localhost:3000/planner-siklushaid-muslimah`.
