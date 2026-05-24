import { getCurrentDate, getCurrentDateTime } from "./DateTime"

export const DataMandatory = () => {
    const EMPTY = "\u200B\u200B"
    
    
const Mandatory = [{ 
id: 1 ,
case : "Internet Lambat/Tidak bisa internet",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case :  Internet 
Solusi :  Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Maaf banget nih untuk kendala internetnya boleh infoin data ini ya biar bisa aku cek : 
1. Nomor by.U : 
2. Email akun by.U : 
3. Lokasi detail kendala (kelurahan, kecamatan, kabupaten/kota) saat berkendala :
4. Tanggal dan waktu kejadian sejak kapan :
5. Nomor by.U yang berkendala sama : 

Sekedar info kak, karena kita pake jaringan Telkomsel, jadi kualitas jaringan by.U mengikuti kualitas jaringan Telkomsel di lokasi kakak ya. Makasih :)

========Setelah refresh HLR=====

Hi Kak, makasih banyak ya udah nunggu, aku cek nomor xxxxxx aktif dan di lokasi Kakak lagi ga ada gangguan. Untuk nomornya udah aku bantu refresh jaringan via sistem, bisa coba lakukan langkah berikut untuk 5 menit kedepan:
1. Restart HP 5 menit kedepan
2. Pastikan kolom APN di settingan HP terisi “byu”, kolom username dan password dikosongkan.
3. Pindahkan SIM Card ke hp lain sebagai pembanding.
Segera hubungi kita lagi kalo internetnya masih kendala ya :)

============Kalau masih berkendala===============
Kak maaf, kalau masih berkendala, boleh lengkapin data ini ya :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala 
` :

`Makasih udah nunggu. Kak maaf, untuk kendala internetnya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku cek : 
1. Email akun by.U : 
2. Lokasi detail kendala (kelurahan, kecamatan, kabupaten/kota) saat berkendala :
3. Tanggal dan waktu kejadian sejak kapan :
4. Nomor by.U yang berkendala sama : 

Sekedar info kak, karena kita pake jaringan Telkomsel, jadi kualitas jaringan by.U mengikuti kualitas jaringan Telkomsel di lokasi kakak ya. Makasih :)

========Setelah refresh HLR=====

Hi Kak, makasih banyak ya udah nunggu, aku cek nomor xxxxxx aktif dan di lokasi Kakak lagi ga ada gangguan. Untuk nomornya udah aku bantu refresh jaringan via sistem, bisa coba lakukan langkah berikut untuk 5 menit kedepan:
1. Restart HP 5 menit kedepan
2. Pastikan kolom APN di settingan HP terisi “byu”, kolom username dan password dikosongkan.
3. Pindahkan SIM Card ke hp lain sebagai pembanding.
Segera hubungi kita lagi kalo internetnya masih kendala ya :)

============Kalau masih berkendala===============
Kak maaf, kalau masih berkendala, boleh lengkapin data ini ya :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : Internet lambat
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    -
    Remarks
    -
    Suggestion
    -
16. Solusi Yang telah di berikan : Update Location (REQID)
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404


` 
},

{
id: 2,
case : "Tidak bisa aktivasi Error Lain",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case :  gabisa aktivasi Error Lain
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hai Kak saat ini terhubung dengan Nindy. Kak maaf banget untuk aktivasinya, boleh infoin data ini ya biar bis aku cek:

1. Nomor by.U :
2. Email akun by.U :
3. Nomor Identitas KTP valid :
4. NOKK :
5. Serial Number di cangkang SIM Card :
6. Capture gagal aktivasi yang menggunakan 1 SIM card di HP dan pastiin ga pakai wifi :

Sekali lagi mohon maaf, jika sudah ketemu solusinya akan segera dikabari ya Kak. Makasih banyak masih mau tetap bersabar dan setia support by.U!`
:
`Makasih udah nunggu. Kak maaf, kalau aku cek di nomor xxxxxx, ada  masalah di nomor atau SIM Card by.U Kakak. Untuk pengecekan lebih lanjut, boleh infoin data ini ya :

1. Email akun by.U :
2. Nomor Identitas KTP valid :
3. NOKK :
4. Serial Number di cangkang SIM Card :
5. Capture gagal aktivasi yang menggunakan 1 SIM card di HP dan pastiin ga pakai wifi :

Sekali lagi mohon maaf, jika sudah ketemu solusinya akan segera dikabari ya Kak. Makasih banyak masih mau tetap bersabar dan setia support by.U! `,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak bisa aktivasi Error Lain 

1. Nomor by.U : xxxxxx
2. Akun by.U : 
3. Nomor Identitas  valid : 
4. NOKK : 
5. Serial Number di cangkang SIM Card : 
6. Capture gagal aktivasi  : 
7. Order ID CXT/CXO (Pengecekan OperatorX) : 



1x24 jam`
},

{
id: 3,
case : "Bugs Lain",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case :  bugs aplikasi
Solusi :  Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy.Kak maaf banget untuk kendala aplikasinya ,boleh coba dulu untuk ON-kan airplane mode beberapa saat, kemudian OFF-kan kembali. Kalau masih gak bisa, boleh coba install ulang aplikasi by.U kakak dan pastikan koneksi internet ada. Kalau di aplikasi masih berkendala, Kakak bisa coba akses di website by.U ya. Kalau udah tapi masih berkendala, boleh infoin data ini ya :
1. Nomor by.U : 
2. Email akun by.U : 
3. Tipe/merek Gadget : 
4. Versi OS Gadget : 
5. Versi aplikasi by.U : 
6. Apakah bisa akses website byu.id di device yang sama menggunakan jaringan by.U atau jaringan lain :  
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul notifikasi error : 
8. Waktu dan Lama Kejadian : 
9. Lokasi Kejadian :  

Aku tunggu datanya ya :)

============
Hi, Kak . Saat ini udah terhubung dengan Nindy. Maaf mengenai kendala aplikasi Error bisa dicoba dulu cara berikut ya :
1. Periksa juga pengaturan tanggal dan waktu gadget sudah sesuai
2. Pastikan OS HP sudah merupakan versi paling update
3. ON-kan airplane mode beberapa saat, kemudian OFF-kan kembali, dan pastikan koneksi internet (termasuk kuota internet) ada
4. Kalau masih nggak bisa, coba install ulang aplikasi by.U kakak

Kalo masih kendala boleh lengkapi data berikut agar dibantu cek dulu :

1. Nomor by.U : 
2. Email akun by.U : 
3. Tipe/merek Gadget : 
4. Versi OS Gadget : 
5. Versi aplikasi by.U : 
6. Apakah bisa akses website byu.id di device yang sama menggunakan jaringan by.U atau jaringan lain :  
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul notifikasi error : 
8. Waktu dan Lama Kejadian : 
9. Lokasi Kejadian :  

Silakan dicoba dulu ya Kak :)
` :

`Makasih udah nunggu. Kak maaf, untuk kendala aplikasinya di nomor xxxxxx, aku cek ga ada info gangguan. Boleh coba dulu untuk ON-kan airplane mode beberapa saat, kemudian OFF-kan kembali. Kalau masih gak bisa, boleh coba install ulang aplikasi by.U kakak dan pastikan koneksi internet ada. Kalau di aplikasi masih berkendala, Kakak bisa coba akses di website by.U ya. Kalau udah tapi masih berkendala, boleh infoin data ini ya :
1. Email akun by.U : 
2. Tipe/merek Gadget : 
3. Versi OS Gadget : 
4. Versi aplikasi by.U : 
5. Apakah bisa akses website byu.id di device yang sama menggunakan jaringan by.U atau jaringan lain :  
6. Screen recorder dari awal masuk aplikasi by.U hingga muncul notifikasi error : 
7. Waktu dan Lama Kejadian : 
8. Lokasi Kejadian :  
Kalau gabisa kirim Screen recorder, bisa kirim ke email nindy@byu.id, nanti kalau udah infoin email yang dipakai waktu ngirimnya ya :)
`,

Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Bugs Lain 

1. Email by.U : 
2. Nomor by.U : xxxxxx
3. Tipe/merek Gadget : 
4. Versi OS Gadget : 
5. Versi aplikasi by.U : 
6. Apakah bisa akses website byu.id di device yang sama menggunakan jaringan by.U atau jaringan lain? YA 
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul notifikasi error : 
8. Waktu dan Lama Kejadian : 
9. Lokasi Kejadian : 

Digital Life Style | K26-Layanan aplikasi tidak bisa digunakan
`   
},


{
id: 4,
case : "Bugs Ganti Sim Card",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : bugs ganti sim card
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Maaf banget nih, untuk kendala ganti SIM card nya di apps by.U, Coba di clear cache dulu apps nya dan pastiin pakai apps versi terbaru ya. Kalau udah tapi masih berkendala boleh diinfoin data ini :
1. Nomor by.U :
2. Email akun by.U : 
3. Tipe/merek Gadget :
4. Versi OS Gadget :
5. Versi aplikasi by.U :
6. Apakah bisa akses menggunakan wifi/jaringan lain :
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul kendalanya seperti apa :
8. Waktu dan Lama Kejadian :

Aku Tunggu datanya ya :)
`
:
`Makasih udah nunggu :) Oke Kak maaf. Ini SIM card Kakak di nomor xxxxxx harusnya bisa lanjut dengan Kakak pilih menu ganti SIM card di apps, nantinya bakal muncul halaman pengambilan/pengantaran. Coba di clear cache dulu apps nya dan pastiin pakai apps versi terbaru ya. Kalau udah tapi masih ga muncul halaman pengambilan/pengantarannya boleh diinfoin data ini :
1. Email akun by.U : 
2. Tipe/merek Gadget :
3. Versi OS Gadget :
4. Versi aplikasi by.U :
5. Apakah bisa akses menggunakan wifi/jaringan lain :
6. Screen recorder dari awal masuk aplikasi by.U hingga muncul kendalanya seperti apa :
7. Waktu dan Lama Kejadian :
Kalau gabisa kirim Screen recorder, bisa kirim ke email nindy@byu.id, nanti kalau udah infoin email yang dipakai waktu ngirimnya ya :)
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Bugs Ganti Sim Card 

1. Email by.U : 
2. Nomor by.U : xxxxxx
3. Tipe/merek Gadget : 
4. Versi OS Gadget : 
5. Versi aplikasi by.U : 
6. Detail keluhan yang disampaikan customer apakah bisa akses menggunakan wifi/jaringan lain : YA 
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul kendalanya seperti apa :  
8. Waktu dan Lama Kejadian : 

Ganti Kartu | K51-Gagal ganti kartu
`   
},

{
id: 5,
case : "Tidak bisa Kirim/Terima SMS",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa kirim/terima SMS
Solusi :  Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`
Hi, Kak Yuuta. Saat ini udah terhubung dengan Nindy. Maaf banget nih untuk kendala SMS nya, boleh dicoba dulu saran berikut ya :

• Refresh Jaringan dengan cara Restart Handphone
• Coba untuk mengubah mode jaringan ke 2G Only terlebih dahulu, kemudian menunggu maksimal 1 x 24 jam untuk memastikan SMS Kode OTP dapat diterima
• Periksa juga folder Spam & diblokir jika pesan tidak muncul.
• Jika OTP untuk aplikasi Meta Product (WA,dll) & Telegram, silakan konfirmasi ke penyedia aplikasi dulu agar dibantu lebih lanjut. 

Jika sudah menghubungi pihak aplikasi boleh lengkapi data berikut ya :

1. Nomor by.U :
2. Nomor pengirim SMS (semua nomor, hanya khusus nomor tertentu saja atau SMS Premium) :
3. Waktu Kejadian (tgl/bulan/tahun dan jam kejadian) :
4. Lokasi detail kendala (indoor/outdoor dan alamat lengkap seperti nama jalan, kelurahan, kecamatan, kota/kabupaten)  :
5. Notifikasi gagal terima SMS :
6. Jumlah bar sinyal dan keterangan sinyal  ( 2G, 3G, 4G, atau 5G) ?
7. Tipe HP :

Silakan dicoba dulu ya Kak :)


Hi, Kak . Saat ini udah terhubung dengan Nindy. Maaf banget nih untuk kendala SMS nya, boleh infoin dulu data ini ya :
1. Nomor by.U :
2. Nomor tujuan SMS (semua nomor, hanya khusus nomor tertentu saja atau SMS Premium) :
3. Waktu Kejadian (tgl/bulan/tahun dan jam kejadian) :
4. Lokasi detail kendala (indoor/outdoor dan alamat lengkap seperti nama jalan, kelurahan, kecamatan, kota/kabupaten)  :
5. Notifikasi gagal kirim/terima SMS : 
6. Jumlah bar sinyal dan keterangan sinyal  ( 2G, 3G, 4G, atau 5G) ?
7. Tipe HP : 

Aku tunggu datanya ya :)


4.1 Keterangan SMS gagal terkirim
Kak aku cek nomor xxxxxx aktif. Boleh coba dulu panduan ini ya : 
• Pastikan nomor pusat pesan sudah +6281100000 (hanya untuk device Android)
• Refresh Jaringan dengan cara Restart Handphone kemudian mengirim SMS ke nomor sendiri 
• Coba gunakan SIM card pada HP lain sebagai perbandingan.

4.2 Keterangan SMS Pending
Kak aku cek nomor xxxxxx aktif. Boleh coba dulu panduan ini ya : 
• Refresh Jaringan dengan cara Restart Handphone dan menunggu proses Pengiriman SMS 1x24 Jam

• Jika kendala di satu nomor aja dan setelah 1x24 jam masih berkendala, coba nomor tujuan dikirim dari nomor lain sebagai perbandingan. Pastiin nomor tujuan aktif dan HP nya ga berkendala

terima OTP
Kak aku cek nomor xxxxxx aktif. Boleh coba dulu panduan ini ya : 
• Refresh Jaringan dengan cara Restart Handphone
• Coba untuk ubah mode jaringan ke 2G Only terlebih dahulu, kemudian tunggu maksimal 1x24 jam untuk memastikan SMS Kode OTP dapat diterima
• Periksa juga folder Spam & diblokir jika pesan tidak muncul.
• Kalau masih berkendala, boleh coba hubungi pihak aplikasi dulu ya :)


` :

`Makasih udah nunggu. Kak maaf banget nih untuk kendala SMS nya di nomor xxxxxx. Boleh infoin data ini ya biar bisa aku cek :
1. Nomor tujuan SMS (semua nomor, hanya khusus nomor tertentu saja atau SMS Premium) :
2. Waktu Kejadian (tgl/bulan/tahun dan jam kejadian) :
3. Lokasi detail kendala (indoor/outdoor dan alamat lengkap seperti nama jalan, kelurahan, kecamatan, kota/kabupaten)  :
4. Notifikasi gagal kirim/terima SMS : 
5. Jumlah bar sinyal dan keterangan sinyal  ( 2G, 3G, 4G, atau 5G) ?
6. Tipe HP : 

4.1 Keterangan SMS gagal terkirim
Kak aku cek nomor xxxxxx aktif. Boleh coba dulu panduan ini ya : 
• Pastikan nomor pusat pesan sudah +6281100000 (hanya untuk device Android)
• Refresh Jaringan dengan cara Restart Handphone kemudian mengirim SMS ke nomor sendiri 
• Coba gunakan SIM card pada HP lain sebagai perbandingan.

4.2 Keterangan SMS Pending
Kak aku cek nomor xxxxxx aktif. Boleh coba dulu panduan ini ya : 
• Refresh Jaringan dengan cara Restart Handphone dan menunggu proses Pengiriman SMS 1x24 Jam
• Jika kendala di satu nomor aja dan setelah 1x24 jam masih berkendala, coba nomor tujuan dikirim dari nomor lain sebagai perbandingan. Pastiin nomor tujuan aktif dan HP nya ga berkendala

terima OTP
Kak aku cek nomor xxxxxx aktif. Boleh coba dulu panduan ini ya : 
• Refresh Jaringan dengan cara Restart Handphone
• Coba untuk ubah mode jaringan ke 2G Only terlebih dahulu, kemudian tunggu maksimal 1x24 jam untuk memastikan SMS Kode OTP dapat diterima
• Periksa juga folder Spam & diblokir jika pesan tidak muncul.
• Kalau masih berkendala, boleh coba hubungi pihak aplikasi dulu ya :)



`,
Mandatory : 
`#Pelangganbyu
ID Omnix :
Nama Pelanggan : pelanggan
Tanggal lapor : ${getCurrentDate()} 


1. Nomor by.U : xxxxxx
2. Nomor tujuan SMS (semua nomor, hanya khusus nomor tertentu saja atau SMS Premium) : 
3. Waktu Kejadian (tgl/bulan/tahun dan jam kejadian) : 
4. Lokasi detail kendala (indoor/outdoor dan alamat lengkap seperti nama jalan, kelurahan, kecamatan, kota/kabupaten)  : 
5. Notifikasi gagal kirim SMS (capture/text) : 
6. Jumlah bar sinyal dan keterangan sinyal  ( 2G, 3G, 4G, atau 5G) ? 
7. Tipe HP : 
8. Detail permasalahan : gabisa kirim SMS
9. Solusi : Sesuai Pansol

HLR Status Active
TS22 Active


1x24 jam
K31-SMS - Tidak bisa terima 
K31-SMS - Tidak bisa kirim
 `   
},

{
id: 6,
case : "Panggilan Telepon Masuk / Telepon Keluar",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa telepon masuk/keluar
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Maaf banget untuk kendala teleponnya, boleh infoin data ini ya biar bisa aku cek:
1. Nomor by.U dan  Akun SignUp :
2. Waktu Kejadian (tgl/bulan/tahun dan jam kejadian) :
3. Lokasi detail kendala (indoor/outdoor dan alamat lengkap seperti nama jalan, kelurahan, kecamatan, kota/kabupaten)  :
4. Notifikasi gagal saat telepon/Notifikasi gagal terima telepon : 
5. Kendala terjadi hanya ke nomor tertentu atau semua nomor?
6. Jumlah bar sinyal dan keterangan sinyal  ( 2G, 3G, 4G, atau 5G) ?

Aku tunggu datanya ya :)

Lakukan panggilan : 
4.1. Keterangan Busy (jaringan sibuk)   
a. Jika kendala ke satu nomor indikasi kendala di nomor tujuan, bisa dikarenakan: 
Kak aku cek nomor xxxxxx aktif, Kalau keterangannya jaringan sibuk, bisa dikarenakan :  
-    No tujuan sedang lakukan panggilan dan nomor tersebut tidak mengaktifkan call waiting.
-    Nomor tujuan sedang melakukan pengalihan panggilan dan nomor pengalihannya sedang lakukan panggilan.   
-    Nomor Kakak sedang di blok olah nomor tujuan.    
-    nomor tujuan digunakan pada perangkat yang tidak memiliki fitur voice (iPad atau modem).    
b. Jika kesemua nomor, 
Kak aku cek nomor xxxxxx aktif, boleh coba dulu refresh Jaringan dengan cara Restart Handphone dan Kakak bisa pindahin SIM card ke HP lain sebagai perbandingan.
c. Jika masih berkendala, create tiket.

4.2. Keterangan Call not allowed (panggilan ditolak)        
Lakukan pengecekan nomor pelanggan di OperatorX untuk mengetahui nomor aktif, dan lakukan pengecekan history panggilan di CDR.  

Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya :
- refresh Jaringan dengan cara Restart Handphone
- pindahin SIM card ke HP lain sebagai perbandingan
- pastikan fitur FDN (Fix Dialling Number)/Pembatasan panggilan dalam keadaan OFF pada pengaturan HP

4.3. Keterangan pulsa tidak cukup melakukan panggilan .

Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya :
- refresh Jaringan dengan cara Restart Handphone
- pindahin SIM card ke HP lain sebagai perbandingan


4.4. Keterangan The number you are calling is not active or out of coverage area    
a. Jika kendala ke satu nomor indikasi kendala di nomor tujuan, bisa dikarenakan No tujuan sedang tidak aktif atau berada di jangkauan area.    

b. Jika kesemua nomor, 
Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya :
- refresh Jaringan dengan cara Restart Handphone
- pindahin SIM card ke HP lain sebagai perbandingan



4.5. Keterangan Nomor yg anda hubungi kurang lengkap kemudian langsung terputus     
a. Jika ke satu nomor   
- Pastikan nomor tujuan benar   
(Jika nomor tujuan adalah nomor by.U cek status nomor tujuannya di aplikasi OperatorX / Nomor Telkomsel cek status nomor di DSC apakah masih aktif atau tidak). 
Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya : 
- Coba Kakak menghubungi ke no tersebut minimal 3 kali dalam jeda waktu 5 menit per panggilan.    
- Coba kakak lakukan panggilan juga dari nomor by.U yang lain ke No tersebut sebagai pembanding.   
- Jika dari semua nomor tetap sama, indikasi kendala di nomor tujuan yang berkendala ya Kak. 
b. Jika kesemua nomor   
Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya :
- refresh Jaringan dengan cara Restart Handphone
- pindahin SIM card ke HP lain sebagai perbandingan


4.6. Cross connect/tersambung ke nomor lain (lihat pansol da jarang)

4.7. Keterangan lain    
a. Jika hanya ke 1 nomor
Kak aku cek nomor xxxxxx aktif. Coba panduan ini ya : 
- Pastikan nomor tujuan benar dan masih aktif.     
- Sarankan Refresh Jaringan dengan cara Restart Handphone
- Pindahkan SIM card ke hp lain sebagai perbandingan.    
b. Jika Kesemua nomor   
Kak aku cek nomor xxxxxx aktif. Coba panduan ini ya : 
- Sarankan Refresh Jaringan dengan cara Restart Handphone
- Pindahkan SIM card ke hp lain sebagai perbandingan.    
 

Terima Telepon : 
5.1. Keterangan nomor dialihkan:
Kak aku cek nomor xxxxxx aktif. Coba pastiin dulu ini ya :
- layanan voice mail pada HP ga aktif ya
- Off kan layanan call forward, Caranya : Dial ##002# > ok/yes
- Refresh Jaringan dengan cara Restart Handphone
- coba pindahkan SIM card ke HP lain
- Kalau masih gabisa, Kakak bisa tunggu 1x24jam untuk mengantisipasi gangguan jaringan sementara
Semoga membantu :)


5.2. Keterangan lainnya lanjut ke tahap selanjutnya
Tanyakan ke pelanggan kendalanya jika terima Panggilan dari satu nomor atau dari banyak nomor.

Jika dari banyak nomor: 
Kak aku cek nomor xxxxxx aktif. Coba pandan ini ya :
- Refresh Jaringan dengan cara Restart Handphone
- Coba gunakan SIM card di HP lain sebagai perbandingan

Jika masih tidak dapat menerima panggilan, lanjut ke Step berikutnya (langkah 6)

Jika hanya dari satu nomor: 
Kak aku cek nomor xxxxxx aktif. Coba pandan ini ya :
- Pastikan nomor pemanggil tidak ada di list blokir di settingan Handphone Kakak.
- Jika masih berkendala sarankan nomor pemanggil untuk coba di HP yang lain
- Kalau semua udah di coba tapi masih berkendala, ada indikasi nomor yang melakukan panggilannya yang berkendala dan disarankan hubungi kami untuk bisa dibantu :)
` :

`Makasih udah nunggu. Kak maaf, untuk kendala teleponnya di nomor xxxxxx , boleh infoin data ini ya biar bisa aku cek :
1. Email akun by.U :
2. Waktu Kejadian (tgl/bulan/tahun dan jam kejadian) :
3. Lokasi detail kendala (indoor/outdoor dan alamat lengkap seperti nama jalan, kelurahan, kecamatan, kota/kabupaten)  :
4. Notifikasi gagal saat telepon/Notifikasi gagal terima telepon : 
5. Kendala terjadi hanya ke nomor tertentu atau semua nomor?
6. Jumlah bar sinyal dan keterangan sinyal  ( 2G, 3G, 4G, atau 5G) ?


4.1. Keterangan Busy (jaringan sibuk)   
a. Jika kendala ke satu nomor indikasi kendala di nomor tujuan, bisa dikarenakan: 
Kak aku cek nomor xxxxxx aktif, Kalau keterangannya jaringan sibuk, bisa dikarenakan :  
-    No tujuan sedang lakukan panggilan dan nomor tersebut tidak mengaktifkan call waiting.
-    Nomor tujuan sedang melakukan pengalihan panggilan dan nomor pengalihannya sedang lakukan panggilan.   
-    Nomor Kakak sedang di blok olah nomor tujuan.    
-    nomor tujuan digunakan pada perangkat yang tidak memiliki fitur voice (iPad atau modem).    
b. Jika kesemua nomor, 
Kak aku cek nomor xxxxxx aktif, boleh coba dulu refresh Jaringan dengan cara Restart Handphone dan Kakak bisa pindahin SIM card ke HP lain sebagai perbandingan.
c. Jika masih berkendala, create tiket.

4.2. Keterangan Call not allowed (panggilan ditolak)        
Lakukan pengecekan nomor pelanggan di OperatorX untuk mengetahui nomor aktif, dan lakukan pengecekan history panggilan di CDR.  

Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya :
- refresh Jaringan dengan cara Restart Handphone
- pindahin SIM card ke HP lain sebagai perbandingan
- pastikan fitur FDN (Fix Dialling Number)/Pembatasan panggilan dalam keadaan OFF pada pengaturan HP

4.3. Keterangan pulsa tidak cukup melakukan panggilan .

Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya :
- refresh Jaringan dengan cara Restart Handphone
- pindahin SIM card ke HP lain sebagai perbandingan


4.4. Keterangan The number you are calling is not active or out of coverage area    
a. Jika kendala ke satu nomor indikasi kendala di nomor tujuan, bisa dikarenakan No tujuan sedang tidak aktif atau berada di jangkauan area.    

b. Jika kesemua nomor, 
Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya :
- refresh Jaringan dengan cara Restart Handphone
- pindahin SIM card ke HP lain sebagai perbandingan



4.5. Keterangan Nomor yg anda hubungi kurang lengkap kemudian langsung terputus     
a. Jika ke satu nomor   
- Pastikan nomor tujuan benar   
(Jika nomor tujuan adalah nomor by.U cek status nomor tujuannya di aplikasi OperatorX / Nomor Telkomsel cek status nomor di DSC apakah masih aktif atau tidak). 
Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya : 
- Coba Kakak menghubungi ke no tersebut minimal 3 kali dalam jeda waktu 5 menit per panggilan.    
- Coba kakak lakukan panggilan juga dari nomor by.U yang lain ke No tersebut sebagai pembanding.   
- Jika dari semua nomor tetap sama, indikasi kendala di nomor tujuan yang berkendala ya Kak. 
b. Jika kesemua nomor   
Kak aku cek nomor xxxxxx aktif. Boleh coba panduan ini ya :
- refresh Jaringan dengan cara Restart Handphone
- pindahin SIM card ke HP lain sebagai perbandingan


4.6. Cross connect/tersambung ke nomor lain (lihat pansol da jarang)

4.7. Keterangan lain    
a. Jika hanya ke 1 nomor
Kak aku cek nomor xxxxxx aktif. Coba panduan ini ya : 
- Pastikan nomor tujuan benar dan masih aktif.     
- Sarankan Refresh Jaringan dengan cara Restart Handphone
- Pindahkan SIM card ke hp lain sebagai perbandingan.    
b. Jika Kesemua nomor   
Kak aku cek nomor xxxxxx aktif. Coba panduan ini ya : 
- Sarankan Refresh Jaringan dengan cara Restart Handphone
- Pindahkan SIM card ke hp lain sebagai perbandingan.    
 

Terima Telepon : 
5.1. Keterangan nomor dialihkan:
Kak aku cek nomor xxxxxx aktif. Coba pastiin dulu ini ya :
- layanan voice mail pada HP ga aktif ya
- oof kan layanan call forward, Caranya : Dial ##002# > ok/yes
- Refresh Jaringan dengan cara Restart Handphone
- coba pindahkan SIM card ke HP lain
- Kalau masih gabisa, Kakak bisa tunggu 1x24jam untuk mengantisipasi gangguan jaringan sementara
Semoga membantu :)


5.2. Keterangan lainnya lanjut ke tahap selanjutnya
Tanyakan ke pelanggan kendalanya jika terima Panggilan dari satu nomor atau dari banyak nomor.

Jika dari banyak nomor: 
Kak aku cek nomor xxxxxx aktif. Coba pandan ini ya :
- Refresh Jaringan dengan cara Restart Handphone
- Coba gunakan SIM card di HP lain sebagai perbandingan

Jika masih tidak dapat menerima panggilan, lanjut ke Step berikutnya (langkah 6)

Jika hanya dari satu nomor: 
- Pastikan nomor pemanggil tidak ada di list blokir di settingan Handphone Kakak.
- Jika masih berkendala sarankan nomor pemanggil untuk coba di HP yang lain
- Kalau semua udah di coba tapi masih berkendala, ada indikasi nomor yang melakukan panggilannya yang berkendala dan disarankan hubungi kami untuk bisa dibantu :)
`,
Mandatory : 
`#Pelangganbyu
ID Omnix :
Nama Pelanggan : Pelanggan
Tanggal lapor : ${getCurrentDate()}

1. Nomor by.U : xxxxxx
2. Email akun by.U : ${EMPTY}
3. Waktu Kejadian (tgl/bulan/tahun dan jam kejadian) :
4. Lokasi detail kendala (indoor/outdoor dan alamat lengkap seperti nama jalan, kelurahan, kecamatan, kota/kabupaten)  :
5. Notifikasi gagal saat telepon :
6. Kendala terjadi hanya saat menerima panggilan, melakukan panggilan, atau keduanya?  
7. Kendala terjadi hanya ke nomor tertentu atau semua nomor?
8. Jumlah bar sinyal dan keterangan sinyal  ( 2G, 3G, 4G, atau 5G) ?
9. Detail Permasalahan : Gabisa lakukan panggilan
10. Solusi : Udah disarankan sesuai pansol

HLR STATUS Active
TS11/TS12 Aktif
IC | FALSE
OC | FALSE

1x24 jam
Network > Voice > K33-Tidak bisa melakukan panggilan
LAYANAN JARINGAN > Use Service > K31-Call - Tidak bisa terima call
`   
},

{
id: 7,
case : "Tarif/harga layanan Google",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Informasi biaya layanan Google
Solusi : Informasi perhitungan biaya
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Kak untuk tarif pembelian item bayar pake pulsa, pastiin pulsanya mencukupi ya. Berikut cara perhitungannya :
Pajak Pemerintah 11% : 0.11*harga item+ harga item = 1.11 harga item
Pajak layanan Google Play 18% (11% + 7%) dari pajak pertama : 0.18(1.11 harga item) = 0.198 harga item
Total : 1.11 harga item + 0.198 harga item = 1.3098 harga item

Jadi, kalau harganya Rpxxxxx, Kakak harus punya pulsa sekitar (harga x 1.3098)
` :
`Kak untuk tarif pembelian item bayar pake pulsa, pastiin pulsanya mencukupi ya. Berikut cara perhitungannya :
Pajak Pemerintah 11% : 0.11*harga item+ harga item = 1.11 harga item
Pajak layanan Google Play 18% (11% + 7%) dari pajak pertama : 0.18(1.11 harga item) = 0.198 harga item
Total : 1.11 harga item + 0.198 harga item = 1.3098 harga item

Jadi, kalau harganya Rpxxxxx, Kakak harus punya pulsa sekitar (harga x 1.3098)

`,
Mandatory : ( ) =>
``   
},

{
id: 8,
case : "Unreg hapus NIK",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : unreg
Solusi :  Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy.Untuk permintaan Unreg nya, bisa melalui aplikasi ya dengan cara berikut : 
1. Masukan SIM Card by.U yang mau di unreg ke gadget kamu
2. Matikan WiFi dan pastikan gadget kamu udah nyambung ke jaringan seluler by.U
3. Buka halaman profil
4. Pilih menu bantuan
5. Pilih topik Isu SIM 
6. Lalu Kakak pilih faq Gimana sih cara unreg SIM Card by.U? atau masukkan kata kuncinya "unreg"
7. Klik link URL yang ada di halaman "Gimana sih cara unreg SIM Card by.U?"
8. Selanjutnya akan muncul halaman data unreg SIM Card. Pada halaman ini Kakak perlu meng-input NIK yang sama ketika nomor diaktivasi dan alasan unreg SIM Card, lalu klik button Kirim
9. Kemudian akan muncul halaman disclaimer yang berisi syarat dan ketentuan terkait unreg SIM Card, Kakak perlu menandai tanda checklist dibagian bawah sebagai tanda bahwa Kakak sudah membaca dan menyetujui syarat & ketentuan unreg SIM Card. Lalu klik Unreg SIM Card
10. Unreg SIM Card akan diproses jika data sesuai dan keterangan berhasil unreg akan muncul di aplikasi by.U


DISCLAIMER 

Makasih udah nunggu. Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu UNREG SIM Card di akun berikut:
1. Nomor by.U : xxxxxx
2. Email: ${EMPTY}

Nomor yang sudah berhasil di unregistrasi ga akan bisa diaktifkan kembali dalam kondisi apapun ya kak, lalu NIK yang terdaftar di nomor ini juga akan ikut terhapus. Kalo data diatas udah sesuai dan Kakak setuju boleh tolong konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :)
` :
`Makasih udah nunggu. Kak untuk unreg/deaktivasi SIM card by.U, bisa melalui aplikasi ya dengan cara berikut : 
1. Masukan SIM Card by.U yang mau di unreg ke gadget kamu
2. Matikan WiFi dan pastikan gadget kamu udah nyambung ke jaringan seluler by.U
3. Buka halaman profil
4. Pilih menu bantuan
5. Pilih topik Isu SIM 
6. Lalu Kakak pilih faq Gimana sih cara unreg SIM Card by.U? atau masukkan kata kuncinya "unreg"
7. Klik link URL yang ada di halaman "Gimana sih cara unreg SIM Card by.U?"
8. Selanjutnya akan muncul halaman data unreg SIM Card. Pada halaman ini Kakak perlu meng-input NIK yang sama ketika nomor diaktivasi dan alasan unreg SIM Card, lalu klik button Kirim
9. Kemudian akan muncul halaman disclaimer yang berisi syarat dan ketentuan terkait unreg SIM Card, Kakak perlu menandai tanda checklist dibagian bawah sebagai tanda bahwa Kakak sudah membaca dan menyetujui syarat & ketentuan unreg SIM Card. Lalu klik Unreg SIM Card
10. Unreg SIM Card akan diproses jika data sesuai dan keterangan berhasil unreg akan muncul di aplikasi by.U


DISCLAIMER 

Makasih udah nunggu. Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu UNREG SIM Card di akun berikut:
1. Nomor by.U : xxxxxx
2. Nomor Identitas KTP sesuai yang tercantum di sistem : 

Nomor yang sudah berhasil di unregistrasi ga akan bisa diaktifkan kembali dalam kondisi apapun ya kak, kuota/sisa pulsa akan hangus, lalu NIK yang terdaftar di nomor ini juga akan ikut terhapus. Kalo data diatas udah sesuai dan Kakak "SETUJU" boleh tolong konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :)

Kak aku cek NIK yang Kakak infoin ga ada yang sesuai nih untuk nomor xxxxxx. Boleh infoin salah satu dari data ini ya biar bisa aku proses :
1. Tanggal dan jenis paket terakhir yang dibeli.
2. Jumlah kuota data yang dimiliki sekarang.
3. Nominal harga paket yang dibeli terakhir.
4. Akun Email yang terdaftar
5. Tipe dan merk HP terakhir digunakan.

Kak, buat nomor yang hangus bakal otomatis terhapus kok Kak dari NIK yg terdaftar. Kakak juga bisa cek di *444# pake nomor Telkomsel/by.U yang terdaftar NIK Kakak dan kalo nomor yang udah hangus masih terdaftar, bisa aku bantu unreg dengan infoin data ini ya :
1. Nomor by.U yang ingin di unreg : 
2. Nomor Identitas KTP : 
3. Foto Selfie (tidak dengan KTP) :
4. Scan/Foto KTP asli/KTP Digital :
5. Email yang bisa dihubungi :

`,
Mandatory : () =>
`#Pelangganbyu
ID Omnix : #
Nama Pelanggan : Pelanggan
Tanggal lapor : ${getCurrentDateTime()}

1. Nomor by.U : xxxxxx
2. Nomor Identitas KTP : 
3. Foto Selfie (tidak dengan KTP) :
4. Scan/Foto KTP asli/KTP Digital :
5. Alasan tidak ingin menggunakan by.U lagi :
6. Email yang bisa dihubungi :



1x24 jam`   
},

{
id: 9,
case : "Unreg hapus NIK lupa nomor",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : unreg
Solusi : Permintaan data Mandatory
`,
Solusi : "",
Mandatory : () =>
`#Pelangganbyu
ID Omnix : #
Nama Pelanggan : Pelanggan
Tanggal lapor : ${getCurrentDateTime()}

1. Nomor by.U : xxxxxx
2. Nomor Identitas KTP (sesuai yang tercantum di sistem) : ${EMPTY}
3. Foto Selfie (tidak dengan KTP) :
4. Scan/Foto KTP asli/KTP Digital :
5. Alasan tidak ingin menggunakan by.U lagi :
6. Capture hasil pengecekan dari *444# :
7. Email yang bisa dihubungi :

Unregistrasi Prabayar | Permintaan unregistrasi Prabayar
1x24 jam`   
},

{
id: 10,
case : "Gagal Aktivasi eSIM Account Status Tidak Sesuai",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa aktivasi esim acount
Solusi : Permintaan data Mandatory
`,
Solusi :   (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. untuk kendala eSIM di nomor xxxxxx , aku cek ada kendala nih dari proses aktivasinya. Boleh infoin data ini ya biar bisa aku proses :
1.Email akun by.U : 
2.Nomor by.U : 
3.Nomor yang bisa dihubungi : 
4.Email yang bisa dihubungi : 
5.Capture gagal aktivasi di apps : 

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf, untuk kendala eSIM di nomor xxxxxx , aku cek ada kendala nih dari proses aktivasinya. Boleh infoin data ini ya biar bisa aku proses :
1.Email akun by.U : 
2.Nomor yang bisa dihubungi : 
3.Email yang bisa dihubungi : 
4.Capture gagal aktivasi di apps : 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Gagal Aktivasi eSIM Account Status Tidak Sesuai

1.Email by.U : 
2.Nomor by.U : xxxxxx
3.Nomor yang bisa dihubungi : 
4.Email yang bisa dihubungi : 
5.Capture gagal aktivasi di apps : 



1x24 jam
e-SIM | Gagal/error saat melakukan Registrasi`   
},

{
id: 11,
case : "Sinyal lemah/tidak stabil/Tidak ada sinyal",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Sinyal
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala sinyalnya, boleh infoin data ini ya biar bisa aku cek :
1. Nomor by.U : 
2. Email akun by.U :
3. Lokasi detail kendala (kelurahan, kecamatan, kabupaten/kota) saat berkendala :
4. Tanggal dan waktu kejadian sejak kapan :
5. Nomor by.U lain yang berkendala sama :

Sekedar info, Kak. Karena kita pake jaringan Telkomsel, jadi kualitas jaringan by.U mengikuti kualitas jaringan Telkomsel di lokasi kakak ya. Makasih :)

====== Setelah Refresh HLR========

Hi Kak, makasih banyak ya udah nunggu, aku cek nomor xxxxxx aktif dan di lokasi Kakak lagi ga ada gangguan. Untuk nomornya udah aku bantu refresh jaringan via sistem, bisa coba lakukan langkah berikut untuk 5 menit kedepan:
1. Restart HP 5 menit kedepan
2. Pastikan kolom APN di settingan HP terisi “byu”, kolom username dan password dikosongkan.
3. Pindahkan SIM Card ke hp lain sebagai pembanding.
Segera hubungi kita lagi kalo sinyalnya masih kendala ya :) 

===========================
Kak maaf, kalau udah dilakukan tapi masih berkendala, boleh lengkapin data ini ya :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan sinyal :
` :

`
Makasih udah nunggu. Kak maaf, untuk kendala sinyalnya di nomor xxxxxx ,boleh infoin data ini ya biar bisa aku cek :
1. Email akun by.U :
2. Lokasi detail kendala (kelurahan, kecamatan, kabupaten/kota)  saat berkendala :
3. Tanggal dan waktu kejadian sejak kapan :
4. Nomor by.U lain yang berkendala sama :

Sekedar info, Kak. Karena kita pake jaringan Telkomsel, jadi kualitas jaringan by.U mengikuti kualitas jaringan Telkomsel di lokasi kakak ya. Makasih :)

====== Setelah Refresh HLR========

Hi Kak, makasih banyak ya udah nunggu, aku cek nomor xxxxxx aktif dan di lokasi Kakak lagi ga ada gangguan. Untuk nomornya udah aku bantu refresh jaringan via sistem, bisa coba lakukan langkah berikut untuk 5 menit kedepan:
1. Restart HP 5 menit kedepan
2. Pastikan kolom APN di settingan HP terisi “byu”, kolom username dan password dikosongkan.
3. Pindahkan SIM Card ke hp lain sebagai pembanding.
Segera hubungi kita lagi kalo sinyalnya masih kendala ya :) 

===========================
Kak maaf, kalau udah dilakukan tapi masih berkendala, boleh lengkapin data ini ya :
1. Lokasi detail kendala (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan sinyal :

`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner : byU
11. Detail Complaint : Sinyal lemah
12. Additional Information : 
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    -
    Remarks
    -
    Suggestion
    -
16. Solusi Yang telah di berikan : Update Location (reqID)

GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404



`   
},

{
id: 12,
case : "Ganti SIM Card active",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Ganti sim card
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hai Kak. Saat ini terhubung dengan Nindy. Kak aku cek nomor xxxxxx udah hangus karena ga terhubung jaringan lebih dari 60 hari. Kakak bisa beli nomor baru di apps by.U pakai akun baru ya :) Jadi gabisa dilakukan ganti SIM card ya :)

Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk ganti SIM card nya boleh infoin data ini dulu ya biar aku cocokin : 
1. Nomor by.U
2. Email akun by.U
3. NIK yang didaftarin

Aku tunggu datanya ya :)

Hi, Kak . Saat ini udah terhubung dengan Nindy. Untuk permintaan ganti SIM card nya, jika SIM Card by.U nya hilang/rusak aku saranin Kakak untuk melakukan permintaan Ganti SIM Card melalui aplikasi by.U, supaya Kakak tetap bisa menggunakan nomor by.U nya nih, ikutin cara berikut ya:
1. Pastiin Versi aplikasi sudah yang terbaru 
2. Log In ke apps by.U pake akun dari nomor by.U yang hilang/ rusak
3. Masuk Ke profil by.U pojok kiri atas
4. Scroll kebawah 
5. Klik Ganti SIM Card 
6. Ikuti proses prosedur ganti SIM Card 
7. Pilih SIM Cardnya dikirim pake JNE atau pilih Ambil di GraPARI/Indomaret terdekat tanpa biaya pengambilan
8. Tunggu proses validasi dari tim by.U
9. Kalo rikuesmu di terima dan kakak pilih SIM Cardnya di kirim, tunggu SIM Cardnya sampai via JNE maksimal 7 hari kerja atau kalo kakak pilihnya diambil, kakak bisa langsung ambil SIM Cardnya di GraPARI/Indomaret yg sebelumnya dipilih

====================legacy============================
Kak maaf, aku cek nomor xxxxxx, SIM card nya bisa diganti di GraPARI terdekat dengan membawa KTP yang terdaftar dan dikenakan tarif Rp10.000 ya :)

=========Hangus==========
Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak aku cek nomor xxxxxx udah hangus karena ga terhubung jaringan lebih dari 60 hari. Jadi Kakak udah gabisa ganti SIM card nya ya :)
Kakak bisa beli nomor baru di apps by.U pakai akun baru ya :)

DISCLAIMER

Oke Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu Permintaan Ganti SIM Card Active dengan data :
1. Nomor by.U : xxxxxx
2. Email: ${EMPTY}
3. NIK KTP valid : 
4. Nama & nomor penerima :
5. Alamat pengiriman :

Kalo data diatas udah sesuai, silakan konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :) 
` :
`Makasih udah nunggu. Kak untuk ganti SIM card nya boleh infoin data ini dulu ya biar aku cocokin : 
1. Nomor by.U
2. Email akun by.U
3. NIK yang didaftarin


Kak untuk  ganti SIM card nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U : 
2. Nomor Identitas valid : 
3. Scan/Foto KTP asli :  
4. Nama & nomor penerima : 
5. Alamat pengiriman (nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos) : 
6. Alasan ganti SIM Card : 

===========Di Apps ============
Makasih udah nunggu. Kak kalau maksudnya permintaan ganti SIM Card nya,  jika SIM Card by.U nya hilang/rusak aku saranin Kakak untuk melakukan permintaan Ganti SIM Card melalui aplikasi by.U, supaya Kakak tetap bisa menggunakan nomor by.U nya nih, ikutin cara berikut ya:
1. Pastiin Versi aplikasi sudah yang terbaru 
2. Log In ke apps by.U pake akun dari nomor by.U yang hilang/ rusak
3. Masuk Ke profil by.U pojok kiri atas
4. Scroll kebawah 
5. Klik Ganti SIM Card 
6. Ikuti proses prosedur ganti SIM Card 
7. Pilih SIM Cardnya dikirim pake JNE atau pilih Ambil di GraPARI/Indomaret terdekat tanpa biaya pengambilan
8. Tunggu proses validasi dari tim by.U
9. Kalo rikuesmu di terima dan kakak pilih SIM Cardnya di kirim, tunggu SIM Cardnya sampai via JNE maksimal 7 hari kerja atau kalo kakak pilihnya diambil, kakak bisa langsung ambil SIM Cardnya di GraPARI/Indomaret yg sebelumnya dipilih

Tapi kalau nomornya beli di konter, SIM card nya bisa diganti di GraPARI terdekat dengan membawa KTP yang terdaftar dan dikenakan tarif Rp10.000 ya :)

====================================

DISCLAIMER

Oke Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu Permintaan Ganti SIM Card Active dengan data :
1. Nomor by.U : xxxxxx
2. Email: ${EMPTY}
3. NIK KTP valid : 
4. Nama & nomor penerima :
5. Alamat pengiriman :

Kalo data diatas udah sesuai, silakan konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :) 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Permintaan Ganti SIM Card Active

1. Nomor by.U : xxxxxx
2. Email registrasi by.U atau nomor HP jika registrasi by.U menggunakan nomor operator lain : 
3. Nomor Identitas valid : 
4. Scan/Foto identitas asli : 
5. Nama & nomor penerima : 
6. Alamat pengiriman (nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos) : 
7. Alasan ganti SIM Card : 
8. Capture SIM card rusak : -
`   
},

{
id: 13,
case : "Miskoordinasi JNE (AWB)",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : misskoordinasi JNE ada AWB
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala pengiriman SIM card , boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U yang dipesan : 
2. Email akun by.U :
3. Nama dan Nomor Penerima :
4. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) :
5. Capture pengecekan nomor resi di web tracking JNE : 
6. Konfirmasi dari JNE (jika Kakak sempat komplain ke JNE) :

Aku tunggu datanya ya :)
` :

`Makasih udah nunggu. Kak maaf, untuk kendala pengiriman SIM card nya di nomor xxxxxx , aku cek ada kendala nih dari proses pengantarannya. Boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U :
2. Nama dan Nomor Penerima :
3. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) :
4. Capture pengecekan nomor resi di web tracking JNE : 
5. Konfirmasi dari JNE (jika Kakak sempat komplain ke JNE) :
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Keluhan SIM Card Tidak Sampai via JNE ada AWB

1. Nomor by.U : xxxxxx
2. Email by.U : 
3. Nama dan Nomor Penerima : 
4. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) : 
5. Capture pengecekan nomor resi di web tracking JNE : 
6. Konfirmasi dari JNE (jika customer sempat komplain ke JNE) : -

Perdana PraBayar | K12-Kendala pengiriman kartu SIM
`   
},

{
id: 14,
case : "Miskoordinasi JNE ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : misskoordinasi ga ada awb
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala pengiriman SIM card nya, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U :
2. Email akun by.U : 
3. Capture bukti pembayaran : 
4. Nama Penerima : 
5. Nomor Penerima : 
6. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) : 

Aku tunggu datanya ya :)
` :

`Makasih udah nunggu. Kak maaf, untuk kendala pengiriman SIM card nya di nomor xxxxxx , aku cek ada kendala nih dari aplikasinya jadinya SIM card Kakak belum di kirimin. Boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U : 
2. Capture bukti pembayaran : 
3. Nama Penerima : 
4. Nomor Penerima : 
5. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) : 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Keluhan SIM Card Tidak Sampai via JNE tidak ada AWB

1. Nomor by.U : xxxxxx
2. Email by.U : 
3. Capture bukti pembayaran : 
4. Nama Penerima : 
5. Nomor Penerima : 
6. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) : 

Perdana PraBayar | K12-Kendala pengiriman kartu SIM
`   
},

{
id: 15,
case : "Pembelian paket IRENEW virtual account Paid ",

Bracket : (segment: string ) =>
`#Pelangganbyu
[byU ${segment}] 
ID Omnix : #
Nama Pelanggan : Pelanggan 
Tanggal lapor : ${getCurrentDate()} 
Nomor by.U : xxxxxx
Waktu Transaksi : ${getCurrentDateTime()}
Metode Bayar : Virtual Accont
Capture halaman bukti pembayaran : 
Capture riwayat detail transaksi di aplikasi by.U : -
Nama paket/Nominal pulsa : 
Order detail ID (CXO)  : 
Transaction ID (CXT)  :
Detail Permasalahan : Pelanggan beli kuota/pulsa belum masuk. status finnet paid
Solusi : Minta data Mandatory
`   ,
Solusi : `Makasih udah nunggu. Kak maaf untuk kendala kuotanya di nomor xxxxxx, aku cek ada kendala nih dari aplikasinya jadi kuotanya belum masuk. Boleh infoin aku data ini ya biar bisa aku proses :
1. capture bukti pembayarannya :
2. Capture riwayat detail transaksi di aplikasi by.U : `,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Masalah Pembelian Kuota/Pulsa I RENEW Via VA

1. Nomor by.U : xxxxxx
2. Email by.U : 
3. Printscreen halaman bukti pembayaran : 
4. Rincian Keluhan : kuota belum masuk
5. Order detail ID (CXO) (Pengecekan OperatorX) : -
6. Transaction ID (CXT) (Pengecekan OperatorX) : -

No VA : 
paid
      

`   
},

{
id: 16,
case : "Penyalahgunaan NIK ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : penyalahgunaan nik
Solusi : Permintaan data Mandatory
`,
Solusi : 
`Makasih udah nunggu. Kak untuk permintaan unreg di NIK Kakak boleh infoin aku data ini ya biar bisa aku proses : 
1. Nomor by.U yang ingin di UNREGISTRASI :
2. Nomor Identitas KTP :
3. Foto Selfie (tidak dengan KTP) :
4. Scan/Foto KTP asli/KTP Digital :
5. Capture SMS cek registrasi dari 4444 :
6. Email yang bisa dihubungi :


DISCLAIMER
Oke Kak, Aku konfirmasi kembali pada tanggal ${getCurrentDate()} kakak mau proses UNREGISTRASI nomor by.U yang bukan milik Kakak tetapi terdaftar dengan NIK Kakak dengan data berikut

Nomor by.U : xxxxxx
NIK  : 
NOKK : 

Silahkan dikonfirmasi ya kak, dengan membalas "benar" atau "setuju"`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Penyalahgunaan NIK

1. Nomor by.U yang ingin di UNREGISTRASI :
2. Nomor Identitas  :
3. Foto Selfie :
4. Scan/Foto KTP asli/KTP Digital :
5. Capture SMS cek registrasi dari 4444 :
6. Email yang bisa dihubungi :
7. Alasan ingin Unregistrasi nomor by.U : MSISDN terdapat penyalahgunaan NIK yang bukan punya pemilik NIK

        
`   
},

{
id: 17,
case : "Pembelian paket Irenew virtual account Unpaid ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}] 
ID Omnix : #
Nama Pelanggan : Pelanggan 
Tanggal lapor : ${getCurrentDate()} 
Nomor by.U : xxxxxx
Waktu Transaksi : ${getCurrentDateTime()}
Metode Bayar : Virtual Accont
Capture halaman bukti pembayaran : 
Capture riwayat detail transaksi di aplikasi by.U : -
Nama paket/Nominal pulsa : 
Order detail ID (CXO)  : 
Transaction ID (CXT)  :
Detail Permasalahan : Pelanggan beli kuota/pulsa belum masuk. cek finnet unpaid
Solusi : Minta data Mandatory
` ,
Solusi : `Makasih udah nunggu. Kak maaf, aku cek transaksi di nomor xxxxxx, ada kendala dari pihak pembayarannya jadinya transaksinya gabisa dilanjutin nih. Boleh infoin data ini ya biar bisa aku proses : 
1. Nomor rekening bank BCA
2. Atas nama pemilik rekening

3. Kantor cabang pembuka
`,
Mandatory : ( ) =>
`
        
`   
},

{
id: 18,
case : "Permintaan Refund karena kesalahan sistem ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : refund karena
Solusi : Permintaan data Mandatory
`,
Solusi : "",
Mandatory : (DateTime: string ) =>
`#Pelangganbyu
ID Omnix :
Nama Pelanggan :
Tanggal lapor : ${DateTime} 

1. Nomor by.U : xxxxxx
2. Capture bukti pembayaran : 
3. Data Refund : 
4. Order detail ID (CXO) : 
5. Transaction ID (CXT) : 
6. Detail permasalahan : 
7. Solusi : eskalasi, mohon dibantu. Tks


P44 - Paket darurat Permintaan refund pulsa
`   
},

{
id: 19,
case : "Tidak Mendapatkan Kuota Monthversary  ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : ga dapat kuota Monthversary
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala ga dapat kuota Monthversary, boleh infoin aku data ini ya biar bisa aku proses : 
1. Nomor by.U :
2. Email akun by.U : 
3. Kuota berapa bulan yang belum didapatkan (3, 6, 9, atau 12 bulan) : 
4. Tanggal aktivasi nomor by.U : 
5. Capture halaman Reward (Sudah dan Belum Terpakai) :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf, untuk kendala ga dapat kuota Monthversary di nomor xxxxxx, boleh infoin aku data ini ya biar bisa aku proses : 
1. Email akun by.U : 
2. Kuota berapa bulan yang belum didapatkan (3, 6, 9, atau 12 bulan) : 
3. Tanggal aktivasi nomor by.U : 
4. Capture halaman Reward (Sudah dan Belum Terpakai) : 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Mendapatkan Kuota Monthversary 

1. MSISDN by.U : xxxxxx
2. Email akun by.U : 
3. Kuota berapa bulan yang belum didapatkan (3, 6, 9, atau 12 bulan) : 
4. Tanggal aktivasi nomor by.U : 
5. Capture halaman Reward (Sudah dan Belum Terpakai) : 
6. Bukti bayar (jika kendalanya pelanggan sudah bayar tapi belum menerima paket Monthiversary Reward) :-
7. Hasil pengecekan Add Ons di CRM (berupa text dan tidak boleh printscreen) : 

        
`   
},

{
id: 20,
case : "SMS - Gagal Aktivasi M-Banking ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gagal Aktivasi M-Banking
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hai, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala fitur banking nya, pastiin cuma ada SIM Card by.U di hp saat aktivasi fitur banking tersebut dan terkoneksi dengan jaringan by.U. Kalau masih tidak bisa, boleh tolong infokan beberapa data berikut agar dapat dibantu pengecekan :
1. Nomor by.U : 
2. Email akun by.U :
3. Rincian keluhan :
4. Tipe HP :
5. Capture dashboard apps :
6. Capture kirim atau terima SMS ke nomor lain berhasil :
7. Capture keterangan gagal aktivasi fitur banking :

Aku tunggu datanya ya :)
` :

`Makasih udah nunggu. Kak maaf, untuk kendala fitur banking nya di nomor xxxxxx, pastiin cuma ada SIM Card by.U di hp saat aktivasi fitur banking tersebut dan terkoneksi dengan jaringan by.U. Kalau masih tidak bisa, boleh tolong infokan beberapa data berikut agar dapat dibantu pengecekan :
1. Email akun by.U :
2. Rincian keluhan :
3. Tipe HP :
4. Capture dashboard apps :
5. Capture kirim atau terima SMS ke nomor lain berhasil :
6. Capture keterangan gagal aktivasi fitur banking :
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
SMS - Gagal Aktivasi M-Banking

1. Nomor by.U : xxxxxx
2. Email akun by.U : 
3. Rincian keluhan : 
4. Tipe HP : 
5. Capture dashboard apps : 
6. Capture kirim atau terima SMS ke nomor lain berhasil : 
7. Capture keterangan gagal aktivasi fitur banking : 
`   
},

{
id: 21,
case : "Pembelian paket IRENEW OVO/DANA/ShopeePay/lainnya ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}] 
ID Omnix : #
Nama Pelanggan : Pelanggan
Tanggal lapor : ${getCurrentDate()} 
Nomor by.U : xxxxxx
Waktu Transaksi : ${getCurrentDateTime()}
Metode Bayar :
Capture halaman bukti pembayaran : 
Capture riwayat detail transaksi di aplikasi by.U : 
Nama paket/Nominal pulsa : 
Order detail ID (CXO)  : 
Transaction ID (CXT)  :
Detail Permasalahan : kuota/pulsa belum masuk
Solusi : Minta data mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk kendala transaksinya boleh infoin aku data ini ya biar bisa aku cek : 
1. Nomor by.U :
2. Capture bukti pembayaran :
3. Capture riwayat detail transaksi di aplikasi by.U : 

Aku tunggu datanya ya :)

Oke Kak, untuk bukti bayar yang di Shopee dengan tertera Merchant Reff IDnya silahkan coba cara ini :
1. Buka Aplikasi Shopee: Buka aplikasi Shopee di ponsel Kakak.
2. Lihat Riwayat Transaksi: Masuk ke halaman "Saya" dan pilih "ShopeePay". Di bagian "Transaksi Terakhir", Kakak dapat melihat riwayat transaksinya.
3. Pilih Transaksi: Pilih transaksi yang ingin dilihat detailnya.
4. Cari Merchant Ref ID: Rincian transaksi akan menampilkan informasi detail termasuk Merchant Ref ID. Merchant Ref ID ini biasanya tertera dalam format yang mirip dengan nomor ID.

Kak maaf, untuk capture bukti bayar yang di DANA, pastiin tertera ID order merchant nya yang angkanya tanpa di sensor ya:)

Kak untuk riwayat transaksi bisa pilih dulu ke menu profil terus pilih menu riwayat transaksi ya. Pastiin capture nya tertera ID transaksi

** Jika dari bukti bayar pelanggan statusnya "sedang diproses" dan pengecekan OperatorX data transaksi tidak ditemukan atau "Created", edukasi ke pelanggan tunggu 1 x 24 jam karena dari bukti bayar statusnya sedang di proses dan tidak mencoba berkala, karena dikhawatirkan terpotong lebih dari 1 kali jika pelanggan mencoba secara terus-menerus.

Kak maaf, karena pada capture Kakak status pembayarannya sedang di proses, Kakak bisa tunggu dulu maksimal 1x24 jam ya untuk proses transaksinya. Kakak jangan dulu coba secara berkala ya karena dikhawatirkan terpotong lebih dari 1 kali jika Kakak mencoba secara terus-menerus
` :
`Makasih udah nunggu. Kak maaf untuk kendala transaksinya di nomor xxxxxx boleh infoin aku data ini ya biar bisa aku cek : 
1. Capture bukti pembayaran
2. Capture riwayat detail transaksi di aplikasi by.U 

Oke Kak, untuk bukti bayar yang di Shopee dengan tertera Merchant Reff IDnya silahkan coba cara ini :
1. Buka Aplikasi Shopee: Buka aplikasi Shopee di ponsel Kakak.
2. Lihat Riwayat Transaksi: Masuk ke halaman "Saya" dan pilih "ShopeePay". Di bagian "Transaksi Terakhir", Kakak dapat melihat riwayat transaksinya.
3. Pilih Transaksi: Pilih transaksi yang ingin dilihat detailnya.
4. Cari Merchant Ref ID: Rincian transaksi akan menampilkan informasi detail termasuk Merchant Ref ID. Merchant Ref ID ini biasanya tertera dalam format yang mirip dengan nomor ID.

Kak  untuk capture bukti bayar yang di DANA, pastiin tertera ID order merchant nya yang angkanya tanpa di sensor ya:)

Kak untuk riwayat transaksi bisa pilih dulu ke menu profil terus pilih menu riwayat transaksi ya. Pastiin capture nya tertera ID transaksi

** Jika dari bukti bayar pelanggan statusnya "sedang diproses" dan pengecekan OperatorX data transaksi tidak ditemukan atau "Created", edukasi ke pelanggan tunggu 1 x 24 jam karena dari bukti bayar statusnya sedang di proses dan tidak mencoba berkala, karena dikhawatirkan terpotong lebih dari 1 kali jika pelanggan mencoba secara terus-menerus.

Kak maaf, karena pada capture Kakak status pembayarannya sedang di proses, Kakak bisa tunggu dulu maksimal 1x24 jam ya untuk proses transaksinya. Kakak jangan dulu coba secara berkala ya karena dikhawatirkan terpotong lebih dari 1 kali jika Kakak mencoba secara terus-menerus
`,
Mandatory : () =>
`

`   
},

{
id: 22,
case : "Tidak Bisa Aktivasi SIM Card Legacy ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa aktivasi legacy
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala aktivasi SIM card nya, kalau nomornya beli di konter, coba Kakak lakukan aktivasi lagi dengan pasang hanya 1 SIM card by.U saja yang ingin di aktivasi terus pasang di slot SIM 1 ya kak. Kakak bisa juga aktivasi lewat *444# atau SMS ketik REG (spasi) NIK#NoKK# kirim ke 4444. Kalau masih gabisa Kakak bisa infoin ke aku data ini :
1. Nomor by.U :
2. NIK & NOKK :
3. Capture Gagal/berhasil Aktivasi via SMS :
4. SN barcode yang ada di cangkang SIM Card :
5. CP dan Email yang bisa dihubungi :

Aku tunggu datanya ya :)
` :

`Makasih udah nunggu. Kak maaf untuk kendala gabisa aktivasi/registrasi di nomor xxxxxx, aku cek nomornya belum berhasil di aktivasi nih. Kalau nomornya udah sesuai dengan yang di bagian depan bungkus SIM card, coba Kakak lakukan aktivasi lagi dengan pasang hanya 1 SIM card by.U saja yang ingin di aktivasi terus pasang di slot SIM 1 ya kak. Kakak bisa juga aktivasi lewat *444# atau SMS ketik REG (spasi) NIK#NoKK# kirim ke 4444. Kalau masih gabisa Kakak bisa infoin ke aku data ini :
1. NIK & NOKK :
2. Capture Gagal/berhasil Aktivasi via SMS :
3. SN barcode yang ada di cangkang SIM Card :
4. CP dan Email yang bisa dihubungi :


Kak maaf, untuk aktivasi SIM card nya, kalau nomornya beli di konter, coba Kakak lakukan aktivasi lagi dengan pasang hanya 1 SIM card by.U saja yang ingin di aktivasi terus pasang di slot SIM 1 ya kak. Kakak bisa juga aktivasi lewat *444# atau SMS ketik REG (spasi) NIK#NoKK# kirim ke 4444. Kalau masih gabisa Kakak bisa infoin ke aku data ini :
1. Nomor by.U :
2. NIK & NOKK :
3. Capture Gagal/berhasil Aktivasi via SMS :
4. SN barcode yang ada di cangkang SIM Card :
5. CP dan Email yang bisa dihubungi :

`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Bisa Aktivasi SIM Card Legacy

1. Nomor by.U : xxxxxx
2. Capture berhasil aktivasi via SMS : 
3. Nomor Identitas  : 
4. Nomor Kartu Keluarga : 
5. CP dan Email yang bisa dihubungi : 
6. SN barcode yang ada di cangkang SIM Card : 
7. Order ID CXT/CXO (Pengecekan OperatorX) : 
8. Keterangan pengecekan : 
        
`   
},

{
id: 23,
case : "Cara Aktivasi SIM card  ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : cara aktivasi sim card 
Solusi : info cara aktivasi di apps
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak kalau nomornya beli di apps by.U, aku bantu infoin untuk cara aktivasinya Kakak bisa coba cara berikut ya Kak:
1. Buka apps, lalu login dengan menggunakan akun yang digunakan pada saat pemesanan kartu by.U > klik tombol aktifin SIM Card,
2. Pastiin SIM Card di HP hanya ada SIM by.U,
3. Pastiin settingan HP jaringan internet terkoneksi ke jaringan by.U,
4. Saat masukkan NIK dan No.KK pastikan sudah sesuai, cek secara manual kembali ya.
5. Pastiin saat masukkan NIK dan no.KK pakai jaringan by.U aja yang ingin di aktivasi ya
Semoga berhasil ya Kak, kalau berkendala bisa Kakak coba aktivasi via web byu.id/aktivasi dan bisa gunakan jaringan lain untuk perbandingan ya Kak.
` :
`Maaf udah bikin kakak ngga nyaman, buat aktivasi SIM Card by.U jika kakak membeli di apps by.U, silakan Kakak lakukan melalui aplikasi by.U. Pastiin udah login menggunakan akun email/facebook/nomor yang didaftarin saat pembelian SIM Card diawal lalu ikutin langkah berikut:
- Sudah login menggunakan email/facebook yang didaftakan saat pembelian SIM Card by.U
- Matikan WI-fi, cabut semua SIM Card dan masukan SIM Card by.U di SIM1 (Di HP hanya ada SIM Card by.U)
- Nyalakan mobile data dan lakukan aktivasi kembali
- Harusnya secara otomatis akan masuk page daftar NIK NOKK
- Sewaktu memasukkan NIK NOKK, mohon memasukkan NIK NOKK secara manual, tidak perlu pakai scan. Pastikan datanya benar
Kalo sudah dipastikan sesuai prosedur dan masih berkendala boleh infokan beberapa data berikut yaa :
- Nomor by.U : 
- Email by.U :
- NIK dan Nomor KK :
- Capture keterangan gagal aktivasi pada apps :
- Serial Number yang ada dibelakang cangkang/starterpack SIM Card by.U (076XXX atau 006XXX)

Namun jika kakak membeli di outlet atau konter aku saranin kakak melakukan aktivasi melalui SMS ketik REG NIK#NOKK# kirim ke 4444 ya kak. Jika ada kendala kakak bantu infoin ke aku data berikut :
- Nomor by.U :  
- Capture berhasil aktivasi via SMS
- NIK dan NOKK
- CP dan Email yang bisa dihubungi
- SN barcode yang ada di cangkang SIM Card`,
Mandatory : `
`   
},

{
id: 24,
case : "Tidak dapat langganan weTV",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : ga dapat langganan weTV
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala langganan weTV nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses :
1. Nomor by.U : 
2. Email akun by.U :
3. Capture Akun profile di aplikasi WeTV (yang tertera keterangan Membership/Berlangganan) :
4. Capture notifikasi berhasil aktivasi :
5. Tanggal pembelian paket:
6. Tipe HP :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf, untuk kendala langganan weTV nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses :
1. Email akun by.U :
2. Capture Akun profile di aplikasi WeTV (yang tertera keterangan Membership/Berlangganan) :
3. Capture notifikasi berhasil aktivasi :
4. Tanggal pembelian paket:
5. Tipe HP :
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak dapat langganan weTV

1. Email : 
2. Nomor by.U : xxxxxx
3. Capture Akun profile di aplikasi WeTV (yang tertera keterangan Membership/Berlangganan) : 
4. Capture notifikasi berhasil aktivasi : 
5. Tanggal pembelian paket: 
6. Type HP : 
7. Capture kendala (disesuaikan dengan kendala pelanggan) : 
`   
},

{
id: 25,
case : "Tidak Bisa Aktivasi SIM Card Digital indikasi SIM Card SN Legacy (indomaret)",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sim card yang didapat legacy
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hai, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala SIM card nya, boleh infoin data ini ya biar bisa aku proses :
1. Nomor by.U yang dipesan: 
2. Email akun by.U : 
3. Capture Keterangan Gagal Aktivasi : 
4. Serial Number di cangkang SIM Card : 
5. Foto bungkus SIM Card bagian depan : 
6. Nama penerima : 
7. Nomor penerima : 
8. Alamat pengiriman :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf, untuk kendala SIM card nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses :
1. Akun by.U : 
2. Capture Keterangan Gagal Aktivasi : 
3. Serial Number di cangkang SIM Card : 
4. Foto bungkus SIM Card bagian depan : 
5. Nama penerima : 
6. Nomor penerima : 
7. Alamat pengiriman : 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Bisa Aktivasi SIM Card Digital indikasi SIM Card SN Legacy

1. Nomor by.U : xxxxxx
2. Akun by.U : 
3. Capture Keterangan Gagal Aktivasi : 
4. Serial Number di cangkang SIM Card : 
5. Foto bungkus SIM Card bagian depan : 
6. Nama penerima : 
7. Nomor penerima : 
8. Alamat pengiriman : 
9. Order ID CXT/CXO (Pengecekan OperatorX) :         
`   
},

{
id: 26,
case : "Tidak Bisa Aktivasi SIM Card Dengan Kode Error Asset Not Found ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa aktivasi asset notfound
Solusi : Permintaan data Mandatory
`,
Solusi : `Makasih udah nunggu ya Kak. Maaf banget nih untuk kendala aktivasi SIM card nya di nomor xxxxxx, Kalau sudah mencoba lagi dan masih tidak bisa, boleh diinfokan beberapa data berikut ya supaya kami bisa melakukan pengecekan lebih lanjut :
1. Akun by.U :
2. NIK :
3. NOKK :
4. Serial Number di cangkang SIM Card :
5. Capture gagal aktivasi SIM Card :

Sekali lagi mohon maaf, jika sudah ketemu solusinya akan segera dikabari ya Kak. Makasih banyak masih mau tetap bersabar dan setia support by.U!`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Bisa Aktivasi SIM Card Dengan Kode Error "Asset Not Found" 

1. Akun by.U : 
2. Nomor by.U : xxxxxx
3. Nomor identitas : 
4. NOKK : 
5. Serial Number di cangkang SIM Card : 
6. Capture gagal aktivasi SIM Card : 
7. Order ID CXT/CXO (Pengecekan OperatorX) : 
        
`   
},

{
id: 27,
case : "Ketidaksesuaian Penggunaan Kuota ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : kuota tiba-tiba berkurang
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Halo, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk kendala penggunaan kuotanya, boleh infoin data ini ya biar bisa aku proses :
1. Nomor by.U : 
2. Email akun by.U:
3. Tanggal waktu kejadian :
4. Lokasi Kejadian ( Cukup Kec, Kabupaten atau Kota ) :
5. Tipe hp/gadget :
6. Paket yang dikeluhkan :
7. Jumlah kuota awal dan kuota akhir :
8. Capture data usage :
9. Capture dashboard apps by.U (yang ada detail pemakaian Data) : 

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf untuk kendala penggunaan kuota yang ga sesuai di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses :
1. Email akun by.U:
2. Tanggal waktu kejadian :
3. Lokasi Kejadian ( Cukup Kec, Kabupaten atau Kota ) :
4. Tipe hp/gadget :
5. Paket yang dikeluhkan :
6. Jumlah kuota awal dan kuota akhir :
7. Capture data usage :
8. Capture dashboard apps by.U (yang ada detail pemakaian Data) : 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Ketidaksesuaian Penggunaan Kuota 

1. Nomor by.U : xxxxxx
2. Email : 
3. Tanggal waktu kejadian : 
4. Lokasi Kejadian ( Cukup Kec, Kabupaten atau Kota ) : 
5. Tipe hp/gadget : 
6. Paket yang dikeluhkan : 
7. Jumlah kuota awal dan kuota akhir : 
8. Capture data usage : 
9. Capture dashboard apps by.U  (yang ada detail pemakaian Data): 
10. Apakah customer pernah mencoba di gadget lain dan mengalami masalah yang sama? TIDAK
11. Apakah ada VPN dsb di gadget customer? TIDAK 
`   
},

{
id: 28,
case : "Tidak bisa login dengan Nomor BYU / terima kode OTP pakai nomor by.U",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa login nomor by.U
Solusi : solusi gabisa login nomor by.u
`,
Solusi : `
Makasih udah nunggu. Kak maaf untuk kendala gabisa login apps by.U di nomor xxxxxx, jika SIM Card dan aplikasi by.U berada di gadget yang sama dan menggunakan jaringan by.U, seharusnya login akan terjadi otomatis, kecuali jika tidak ada koneksi. Jika memang diperlukan login manual, boleh dipastikan bahwa OS gadget yang Kakak pake adalah OS yang terupdate dan pastikan juga koneksi internetnya berjalan dengan baik. Dicoba ON-kan airplane mode beberapa saat, kemudian OFF-kan kembali. Kalau masih ga bisa, dicoba install ulang aplikasi by.U kakak dan di cek juga di HP lain sebagai perbandingan ya :) 
Pastiin setting dengan memilih menu Setting > pilih manager aplikasi > all > messaging > send premium sms > always allow dan pastikan juga untuk nomor pusat sudah diisi dengan angka +6281100000 disettingan sms HP ya, karena kalau belum disetting itu akan berpengaruh terhadap diterimanya OTP.
Kakak bisa juga coba login menggunakan email akun by.U ya :) Semoga membantu :)`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak bisa login dengan Nomor BYU 

1. Nomor by.U : xxxxxx
2. Email akun by.U : 
3. Tipe/merek Gadget : 
4. Versi OS Gadget : 
5. Versi aplikasi by.U : 
6. Screen record dari awal masuk aplikasi by.U hingga muncul notifikasi error dengan koneksi yang sama atau menggunakan wifi/ jaringan lain : 
7. Hari dan Tanggal waktu terjadi keluhan : 
8. Penjelasan keluhan pelanggan : 
9. Lokasi Pelanggan : 
`   
},

{
id: 29,
case : "Tidak Mendapatkan Voucher Non-Telco uCoin",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : non telco
Solusi : Permintaan data Mandatory
`,
Solusi :(segment: string) => segment ==='Email' ? 
`Hai, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala uCoin nya, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U : 
2. Email akun by.U : 
3. Jenis voucher yang ditukarkan : 
4. Tanggal penukaran U-Coin : 
5. Capture bukti redeem di halaman Reward Saya : 
6. Capture kendala penukaran : 

Aku tunggu datanya ya :)
` : 
`Makasih udah nunggu. Kak maaf, untuk kendala uCoin nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U : 
2. Jenis voucher yang ditukarkan : 
3. Tanggal penukaran U-Coin : 
4. Capture bukti redeem di halaman Reward Saya : 
5. Capture kendala penukaran : 
 `,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Mendapatkan Voucher Non-Telco

1. Nomor by.U : xxxxxx
2. Email by.U : ${EMPTY}
3. Jenis voucher yang ditukarkan : 
4. Tanggal penukaran U-Coin : 
5. Capture bukti redeem di halaman Reward Saya : 
6. Capture kendala penukaran : 

Aktivasi Paket | K21-Tidak Mendapatkan Voucher Non-Telco
`   
},

{
id: 30,
case : "Pergantian SIM Card Legacy ditolak GraPARI",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : ganti sim card ditolak grapari
Solusi : Permintaan data Mandatory
`,
Solusi :(segment: string) => segment ==='Email' ? 
`Hai, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk ganti SIM card nya karena gabisa di GraPARI, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U :
2. Nama Pelanggan/pengunjung : 
3. Email aktif yang bisa dihubungi : 
4. Nomor lain yang bisa dihubungi : 
5. Tanggal dan hari mengunjungi GraPARI : 
6. Nama GraPARI : 
7. Lokasi GraPARI : (Nama dan nomor Jalan, Kelurahan, Kecamatan, Kota/Kabupaten, Provinsi)
8. Detail alasan ditolak : 
9. NIK KTP Valid : 
10. Foto KTP : 
11. Foto selfie KTP : 

Aku tunggu datanya ya :)
` : 
`Makasih udah nunggu. Kak maaf, untuk ganti SIM card nya karena gabisa di GraPARI di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Nama Pelanggan/pengunjung : 
2. Email aktif yang bisa dihubungi : 
3. Nomor lain yang bisa dihubungi : 
4. Tanggal dan hari mengunjungi GraPARI : 
5. Nama GraPARI : 
6. Lokasi GraPARI : (Nama dan nomor Jalan, Kelurahan, Kecamatan, Kota/Kabupaten, Provinsi)
7. Detail alasan ditolak : 
8. NIK KTP Valid : 
9. Foto KTP : 
10. Foto selfie KTP : 
Kirimnya ke email nindy@byu.id aja ya biar aman. Kakak bisa infoin email yang dipake watu ngirimnya biar bisa aku cek :)
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Pergantian SIM Card Legacy ditolak GraPARI

1. Nama Pelanggan : 
2. Nomor by.U : xxxxxx
3. Email aktif dan nomor lain yang bisa dihubungi : 
4. Tanggal dan hari mengunjungi GraPARI : 
5. Nama GraPARI : 
6. Lokasi GraPARI : 
7. Detail alasan ditolak : 
8. Nomor identitas Valid : 
9. Foto identitas : 
10. Foto selfie identitas : 
11. Alasan ganti SIM Card : SIM Card Hilang
`   
},

{
id: 31,
case : "Esim Sinyal hilang",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : esim sinyal hilang
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk kendala eSIM nya, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U :
2. Email akun by.U :
3. Tipe/Merek Gadget :
4. Nomor yang bisa dihubungi :
5. Email yang bisa dihubungi : 
6. Capture Sinyal :
7. Capture settingan eSIM di handphone :
8. Capture bukti pembayaran : 

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf untuk kendala eSIM nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U :
2. Tipe/Merek Gadget :
3. Nomor yang bisa dihubungi :
4. Email yang bisa dihubungi : 
5. Capture Sinyal :
6. Capture settingan eSIM di handphone :
7. Capture bukti pembayaran : 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
eSIM sinyal hilang

1. Nomor by.U : xxxxxx
2. Akun by.U : 
3. Tipe/Merek Gadget : 
4. Nomor yang bisa dihubungi : 
5. Email yang bisa dihubungi : 
6. Capture Sinyal : 
7. Capture settingan eSIM di handphone : 
8. Capture bukti pembayaran : 
9. Order ID CXT/CXO (Pengecekan OperatorX): 

| e-SIM | Gagal/error saat melakukan Registrasi
`   
},

{
id: 32,
case : "eSIM barcode/QR tidak tersimpan ",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : minta barcode esim
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk barcode/qr eSIM nya, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U : 
2. Email akun by.U : 
3. Nomor yang bisa dihubungi : 
4. Email yang bisa dihubungi : 
5. Capture bukti pembayaran : 

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf untuk barcode/qr eSIM nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U : 
2. Nomor yang bisa dihubungi : 
3. Email yang bisa dihubungi : 
4. Capture bukti pembayaran : 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
eSIM  QR tidak tersimpan 

1. Nomor by.U : xxxxxx
2. Akun by.U : 
3. Nomor yang bisa dihubungi : 
4. Email yang bisa dihubungi : 
5. Bukti pembayaran : 
6. Keterangan gagal : (KHUSUS APABILA QR YANG DIMILIKI PELANGGAN TIDAK VALID)
7. Order ID CXT/CXO (Pengecekan OperatorX) : 


K32 - Aktivasi/download Barcode Gagal
`   
},

{
id: 33,
case : "Bugs Ganti SIM card (mandatory E)",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : bugs ganti sim card
Solusi : Permintaan data Mandatory
`,
Solusi : 
`Makasih udah nunggu. Kak maaf, kalau keterangannya seperti itu, boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U :
2. Nomor Identitas KTP :
3. Scan/Foto kartu identitas Asli :
4. Foto selfie dengan kartu identitas Asli :
5. Screen record terbaru :
6. Nama penerima :
7. Nomor penerima :
8. Alamat pengiriman :
9. Tipe/merek Gadget :
10. Versi OS Gadget :
11. Versi aplikasi by.U :
Kalau gabisa kirim Screen recorder, bisa kirim ke email nindy@byu.id, nanti kalau udah infoin email yang dipakai waktu ngirimnya ya :)



DISCLAIMER

Oke Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu  Ganti SIM Card dengan data :
1. Nomor by.U : xxxxxx
2. Email akun by.U: ${EMPTY}
3. NIK KTP valid : 
4. Nama & nomor penerima :
5. Alamat pengiriman :

Kalo data diatas udah sesuai, silakan konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :) 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Bugs Ganti SIM card

1. Nomor by.U : xxxxxx
2. Email akun by.U : 
3. Nomor Identitas identitas : 
4. Scan/Foto kartu identitas Asli : 
5. Foto selfie dengan kartu identitas Asli : 
6. Screen record terbaru : 
7. Nama penerima : 
8. Nomor penerima : 
9. Alamat pengiriman : 
10. Tipe/merek Gadget : 
11. Versi OS Gadget : 
12. Versi aplikasi by.U : 
`   
},

{
id: 34,
case : "Keluhan Tidak Bisa Akses Internet di Luar Negeri Roaming",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa internet roaming
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk kendala gabisa internet di luar negeri,boleh infoin data ini ya biar bisa aku cek :
Hai Kak, maaf udah bikin ga nyaman ya. Boleh infokan beberapa data di bawah ini supaya bisa dibantu pengecekan :
1. Nomor by.U : 
2. Email akun by.U : 
3. Lokasi negara :
4. Tanggal dan waktu kejadian sejak kapan :
5. Jaringan/operator negara setempat yang digunakan :
6. Capture setting APN di HP :
7. Capture sinyal yang didapat :
8. Capture speedtest :

Aku tunggu datanya ya :)

Pastikan ada fitur roaming barring di menu DSC "Unblocked"

Makasih udah nunggu. Kak aku cek nomor xxxxxx aktif  dan punya kuota roaming, serta kondisi jaringan di lokasi negara Kakak ga ada info gangguan. Bisa dicoba langkah-langkah ini ya kak :
1. Coba ON-kan airplane mode dan OFF-kan kembali, 
2. Ubah pengaturan jaringan dari otomatis menjadi manual, lalu cari Operator yang bekerjasama di negara tersebut,
3. Pastikan kolom APN diisi dengan "byu" (tanpa tanda kutip), username dan password kosongkan.
4. Pastikan hanya ada 1 SIM Card yang aktif, jika masih tidak bisa coba pindahkan SIM card ke HP lain untuk perbandingan.

Sebagai tambahan bisa coba salah satu Operator yang berkejasama di negara XXX yaitu xxx  . Jika cara di atas sudah dicoba dan sinyalnya masih berkendala, tolong hubungi kita lagi. Terima kasih.


https://www.telkomsel.com/roaming/setdevice
` :
`Makasih udah nunggu. Kak maaf untuk kendala gabisa internet di luar negeri di nomor xxxxxx ,boleh infoin data ini ya biar bisa aku cek :
1. Email akun by.U :
2. Lokasi negara :
3. Tanggal dan waktu kejadian sejak kapan :
4. Jaringan/operator negara setempat yang digunakan :
5. Capture setting APN di HP :
6. Capture sinyal yang didapat :
7. Capture speedtest :

Pastikan ada fitur roaming barring di menu DSC "Unblocked"

Makasih udah nunggu. Kak aku cek nomor xxxxxx aktif  dan punya kuota roaming, serta kondisi jaringan di lokasi negara Kakak ga ada info gangguan. Bisa dicoba langkah-langkah ini ya kak :
1. Coba ON-kan airplane mode dan OFF-kan kembali, 
2. Ubah pengaturan jaringan dari otomatis menjadi manual, lalu cari Operator yang bekerjasama di negara tersebut,
3. Pastikan kolom APN diisi dengan "byu" (tanpa tanda kutip), username dan password kosongkan.
4. Pastikan hanya ada 1 SIM Card yang aktif, jika masih tidak bisa coba pindahkan SIM card ke HP lain untuk perbandingan.

Sebagai tambahan bisa coba salah satu Operator yang berkejasama di negara XXX yaitu xxx  . Jika cara di atas sudah dicoba dan sinyalnya masih berkendala, tolong hubungi kita lagi. Terima kasih.


https://www.telkomsel.com/roaming/setdevice`,
Mandatory : (segment: string) =>
`#Pelangganbyu
[NO][IR][${segment}]

1. nomor by.U : xxxxxx
2. Email by.U : ${EMPTY}
3. Lokasi negara : 
4. Tanggal dan waktu kendala : 
5. Jaringan yang digunakan apa? 4G, 5G? 
6. Jumlah sinyal bar atau titik yang didapat? 
7. Jaringan/operator negara setempat yang digunakan 
8. Nama Paket Roaming : 
9. Sisa kuota yang dimiliki oleh pelanggan: 
10. Capture speedtest: 
11. Capture setting APN di hp: 
12. Jenis device/HP yang digunakan: 
13. Email aktif yang bisa dihubungi: 
14. Detail Kendala : Ga bisa internet roaming
15. Solusi: sesuai pansol
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
Baring Roam | NOBAR
`   
},

{
id: 35,
case : "Pulsa berkurang tiba-tiba",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : pulsa berkurang tiba-tiba
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Halo, Kak . Saat ini udah terhubung dengan Nindy. Maaf nih untuk kendala pulsa yang berkurang tiba-tiba, boleh infoin data ini ya biar bisa aku proses :
1. Nomor by.U : 
2. Email akun By.U :
3. Pulsa awal dan pulsa akhir :
4. Tipe Hp :
5. Tanggal dan Waktu kejadian :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu Kak. Maaf nih untuk kendala pulsa yang berkurang tiba-tiba di nomor xxxxxx boleh infoin data ini ya biar bisa aku proses :
1. Email akun By.U :
2. Pulsa awal dan pulsa akhir :
3. Tipe Hp :
4. Tanggal dan Waktu kejadian :
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Pulsa berkurang tiba-tiba

1. Nomor By.U : xxxxxx
2. Email akun By.U : 
3. Pulsa awal dan pulsa akhir : 
4. Tipe Hp : 
5. Tanggal dan Waktu kejadian : 
6. Rincian kendala/Capture kendala dan hasil pengecekkan agent : 
        
`   
},

{
id: 36,
case : "Tidak bisa aktivasi inject paket",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa aktivasi sim card legacy
Solusi : hubungi pihak penjual
`,
Solusi : `Makasih udah nunggu Kak maaf kalau keterangan gabisa aktivasinya seperti itu, Kakak bisa tukerin SIM card nya di tempat Kakak beli/dapetin SIM card nya ya`,
Mandatory :
`      
`   
},

{
id: 37,
case : "Tidak bisa aktivasi NIK invalid Dukcapil/Disdukcapil",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa aktivasi nik invalid
Solusi : hubungi dukcapil
`,
Solusi : `Makasih udah nunggu. Kak maaf untuk gabisa aktivasi SIM card nya di nomor xxxxxx, aku cek NIK Kakak ga terdaftar nih di sistem Dukcapil, Boleh pastiin lagi NIK yang diinputnya sesuai yang di KTP dan pastiin ada 16 digit ya Kak. Kalo masih berkendala dikhawatirkan ada error data dukcapil. Untuk kendala ini silakan kakak bisa update data ke Contact Center Ditjen Dukcapil. Bilang aja mau update data registrasi SIM Card ya.
Berikut kontak detailnya dukcapil :
Hotline : 1500537
WA : 08118005373
SMS : 08118005373
Email : callcenter.dukcapil@gmail.com



Kak Kalau sudah berkoordinasi dengan dukcapil, masih tidak bisa, boleh infoin data ini ya biar bisa dibantu lebih lanjut :
* NIK :
* NOKK :
* Serial Number di cangkang SIM Card :
* Capture gagal aktivasi SIM Card :
* Printscreen bukti dari dukcapil bahwa data sudah update :

Sekali lagi mohon maaf, jika sudah ketemu solusinya akan segera dikabari ya Kak. Makasih banyak masih mau tetap bersabar dan setia support by.U!
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Bisa Aktivasi SIM Card Dengan Kode Error NIK Tidak Ditemukan

1. Akun by.U : 
2. Nomor by.U : xxxxxx
3. NIK : 
4. NOKK : 
5. Serial Number di cangkang SIM Card : 
6. Capture gagal aktivasi SIM Card : 
7. Capture bukti dari dukcapil bahwa data sudah update : 
8. Order ID CXT/CXO (Pengecekan OperatorX) : 
`   
},

{
id: 38,
case : "Tidak bisa aktivasi exceed limit (udah 3 kali percobaan)",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa aktivasi sim card
Solusi : diinfoin coba besok
`,
Solusi : `Makasih udah nunggu. Kak maaf aku cek di nomor xxxxxx , hari ini udah lebih dari 3 kali nyoba aktivasi. Boleh dicoba lagi besok hari ya. Pastiin saat proses aktivasi sudah terkoneksi ke jaringan by.U - bukan wifi atau jaringan lain, dan NIK-NO.KK yang dimasukkan benar 16 angka. Kalo besok masih belum bisa, jangan coba berulang ya, silahkan konfirmasi lagi biar bisa langsung di proses :)`,
Mandatory :``   
},

{
id: 39,
case : "Tidak bisa aktivasi maximum NIK",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa aktivasi maximum nik
Solusi : diinfoin unreg nomor telkomsel
`,
Solusi : `Makasih udah nunggu ya Kak, mengenai kendala gagal daftar NIK-NOKK di nomor xxxxxx. Setelah kami cek di sistem rupanya NIK kakak sudah terdaftar di 3 Nomor Telkomsel/ by.U. Untuk case seperti ini jika kakak masih memegang nomor Telkomsel (selain by.U), bisa melakukan unregistrasi sendiri melalui SMS UNREG#NO NIK 
kirim ke 4444 atau melalui *444#. Jika kakak tidak merasa memiliki 3 Nomor Telkomsel, bisa menghubungi Call Center Telkomsel atau datang ke Grapari agar bisa disolusikan. Jika sudah melakukan UNREG atau melaporkan ke pihak Telkomsel, bisa dicoba lagi pendaftaran NIK-NOKK-nya ya, Kak. Maaf banget, semoga bisa ya Kak 😊


Untuk mengecek nomor yang terdaftar di NIK nya kalau kakak punya nomor Telkomsel yang data NIK nya sama juga, silakan bisa cek di *444# pilih cek status registrasi ya Kak :)


Makasih udah nunggu. Kak maaf kalau udah unreg tapi masih gabisa aktivasi SIM card nya, boleh infoin data ini ya  :
1. NIK :
2. NOKK :
3. Serial Number di cangkang SIM Card :
4. Capture gagal aktivasi SIM Card :
5. Capture bukti sudah melakukan unregistrasi

Sekali lagi mohon maaf, jika sudah ketemu solusinya akan segera dikabari ya Kak. Makasih banyak masih mau tetap bersabar dan setia support by.U!
`,
Mandatory : (segment: string,DateTime: string ) =>
` 
#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Bisa Aktivasi SIM Card Dengan Keterangan Maximum Number

1. Akun by.U : 
2. Nomor by.U : xxxxxx
3. Nomor identitas  : 
4. NOKK : 
5. Serial Number di cangkang SIM Card : 
6. Capture gagal aktivasi SIM Card : 
7. Capture bukti sudah melakukan unregistrasi : 
8. Order ID CXT/CXO (Pengecekan OperatorX) : 
`   
},

{
id: 40,
case : "Perubahan Data Pelanggan",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : perubahan data pelanggan
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Berikut form perubahan datanya ya, silakan Kakak isi dulu dengan tandatangan diatas materai ya :)

Halo, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk perubahan data nya, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U : 
2. NIK & NOK pelanggan baru :
3. Foto KTP pelanggan baru :
4. Surat pernyataan yang ada di lampiran :
5. Validasi tambahan :

Untuk validasi tambahannya bisa infoin salah satu dari data ini ya : 
1. Tanggal dan jenis paket terakhir yang dibeli :
2. Jumlah pulsa yang dimiliki sekarang :
3. Nominal harga paket yang dibeli terakhir :
4. 5 Transaksi terakhir (minimum 3 transaksi valid) :
5. Tipe dan merk HP terakhir digunakan :

Aku tunggu datanya ya :)


DISCLAIMER

Oke Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu Permintaan Perubahan data  dengan data :
1. Nomor by.U : xxxxxx
2. NIK KTP pelanggan baru : 

Kalo data diatas udah sesuai, silakan konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :) 
` :
`Makasih udah nunggu. Kak maaf untuk perubahan data nya di nomor xxxxxx ,boleh infoin data ini ya biar bisa aku proses : 
1. NIK & NOK pelanggan baru :
2. Foto KTP pelanggan baru :
3. Surat pernyataan yang bisa minta ke email nindy@byu.id :
4. Validasi tambahan :

Untuk validasi tambahannya bisa infoin salah satu dari data ini ya : 
1. Tanggal dan jenis paket terakhir yang dibeli :
2. Jumlah pulsa yang dimiliki sekarang :
3. Nominal harga paket yang dibeli terakhir :
4. 5 Transaksi terakhir (minimum 3 transaksi valid) :
5. Tipe dan merk HP terakhir digunakan :


DISCLAIMER

Oke Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu Permintaan Perubahan data  dengan data :
1. Nomor by.U : xxxxxx
2.  NIK KTP pelanggan baru : 


Kalo data diatas udah sesuai, silakan konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :) 
`,
Mandatory : (segment: string,DateTime: string ) =>
` 
#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Perubahan data pelanggan

1. Nomor by.U : xxxxxx
2. Nomor identitas pelanggan baru: 
3. NOK pelanggan baru : 
4. Foto identitas pelanggan baru : 
5. Surat pernyataan : 
6. Validasi tambahan : 
`   
},

{
id: 41,
case : "Perubahan Data pindah tangan (pindah tangan)",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : perubahan data 
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak untuk perubahan data nya di nomor xxxxxx ,boleh infoin data ini ya biar bisa aku proses : 
1. NIK & NOK pelanggan lama :
2. NIK & NOK pelanggan baru :
3. Foto KTP pelanggan lama :
4. Foto KTP pelanggan baru :
5. Surat pernyataan yang ada di lampiran:

Aku tunggu datanya ya :)



DISCLAIMER

Oke Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu Permintaan Perubahan data karena pindah tangan dengan data :
1. Nomor by.U : xxxxxx
2. NIK KTP pelanggan baru : 


Kalo data diatas udah sesuai, silakan konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :) 
` :
`Makasih udah nunggu. Kak untuk perubahan data nya di nomor xxxxxx ,boleh infoin data ini ya biar bisa aku proses : 
1. NIK & NOK pelanggan lama :
2. NIK & NOK pelanggan baru :
3. Foto KTP pelanggan lama :
4. Foto KTP pelanggan baru :
5. Foto selfie dengan KTP pelanggan baru :
6. Surat pernyataan yang bisa minta ke email nindy@byu.id :
Kirimnya ke email nindy@byu.id aja ya biar aman :)


DISCLAIMER

Oke Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu Permintaan Perubahan data karena pindah tangan dengan data :
1. Nomor by.U : xxxxxx
2. NIK KTP pelanggan baru : 


Kalo data diatas udah sesuai, silakan konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :) 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Perubahan data pelanggan pindah tangan 

1. Nomor by.U : xxxxxx
2. Nomor identitas pelanggan lama : 
3. NOK pelanggan lama : 
4. Nomor identitas pelanggan baru : 
5. NOK pelanggan baru : 
6. Foto identitas pelanggan lama : 
7. Foto identitas pelanggan baru : 
8.  Surper : 
`   
},

{
id: 42,
case : "PUK",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : puk
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak untuk permintaan kode PUK, boleh infoin data ini ya biar bisa aku bantu :
1. Nomor by.U : 
2. Alamat email akun by.U :
3. NIK yang terdaftar :

Aku tunggu datanya ya :)

Makasih udah nunggu. Kak untuk permintaan kode PUK, boleh infoin data ini ya biar bisa aku bantu :
1. Nomor by.U :
1. NIK yang terdaftar :
2. validasi tambahan :
Untuk validasi tambahannya Kakak bisa isi salah satu dari data ini ya : 
1. Tanggal dan jenis paket terakhir yang dibeli.
2. Jumlah pulsa yang dimiliki sekarang.
3. Nominal harga paket yang dibeli terakhir.
4. 5 Transaksi terakhir (minimum 3 transaksi valid)
5. Tipe dan merk HP terakhir digunakan.

Aku tunggu datanya ya :)


Makasih udah nunggu. Kak untuk permintaan kode PUK 1 di nomor xxxxxx adalah 1111111. Silakan bisa input PUK 1 dan diikuti memasukkan PIN baru 4 digit angka secara acak dan mudah diingat. Untuk syarat dan ketentuannya sebagai berikut Kak:
a. Batas maksimal memasukkan PUK adalah 10 kali
b. Setelah 10 kali gagal, pelanggan diharuskan ganti kartu. Pastikan menginputnya sesuai dengan PUK yang diberikan
c. Kode PUK tidak akan berubah, Kakak bisa menyimpan kode PUK jika diperlukan kembali. Semoga berhasil Kak :)
` :
`Makasih udah nunggu. Kak untuk permintaan kode PUK di nomor xxxxxx , boleh infoin data ini ya biar bisa aku bantu :
1. Alamat email akun by.U :
2. NIK yang terdaftar :

Makasih udah nunggu. Kak untuk permintaan kode PUK di nomor xxxxxx , boleh infoin data ini ya biar bisa aku bantu :
1. validasi tambahan :
2. NIK yang terdaftar :
Untuk validasi tambahannya Kakak bisa isi salah satu dari data ini ya : 
1. Tanggal dan jenis paket terakhir yang dibeli.
2. Jumlah pulsa yang dimiliki sekarang.
3. Nominal harga paket yang dibeli terakhir.
4. 5 Transaksi terakhir (minimum 3 transaksi valid)
5. Tipe dan merk HP terakhir digunakan.


Makasih udah nunggu. Kak untuk permintaan kode PUK 1 di nomor xxxxxx adalah 1111111. Silakan bisa input PUK 1 dan diikuti memasukkan PIN baru 4 digit angka secara acak dan mudah diingat. Untuk syarat dan ketentuannya sebagai berikut Kak:
a. Batas maksimal memasukkan PUK adalah 10 kali
b. Setelah 10 kali gagal, pelanggan diharuskan ganti kartu. Pastikan menginputnya sesuai dengan PUK yang diberikan
c. Kode PUK tidak akan berubah, Kakak bisa menyimpan kode PUK jika diperlukan kembali. Semoga berhasil Kak :)

`,
Mandatory : ``   
},

{
id: 43,
case : "Tidak dapat langganan ZOOM Premium",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Tidak dapat langganan ZOOM Premium"
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk ga dapat langganan Zoom nya, boleh infoin data ini ya biar bisa aku proses :
1. Nomor by.U :
2. Email akun by.U :
3. Capture detail riwayat transaksi pembelian topping Zoom :
4. Email yang didaftarkan pada pentautan Link Zoom :
5. Tipe topping Zoom yang dibeli :
6. Capture SMS dari TSELZOOM :
7. Capture halaman profil di aplikasi web ZOOM :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf untuk ga dapat langganan Zoom nya di nomor xxxxxx boleh infoin data ini ya biar bisa aku proses :
1. Email akun by.U :
2. Capture detail riwayat transaksi pembelian topping Zoom :
3. Email yang didaftarkan pada pentautan Link Zoom :
4. Tipe topping Zoom yang dibeli :
5. Capture SMS dari TSELZOOM :
6. Capture halaman profil di aplikasi web ZOOM :

`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak dapat langganan ZOOM Premium

1. Email akun by.U : 
2. Nomor by.U : xxxxxx
3. Capture detail riwayat transaksi pembelian topping Zoom : 
4. Email yang didaftarkan pada pentautan Link Zoom : 
5. Tipe topping Zoom yang dibeli : 
6. Capture SMS dari TSELZOOM : 
7. Capture halaman profil di aplikasi web ZOOM : 
`   
},

{
id: 44,
case : "Tidak dapat langganan Netflix",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Tidak dapat langganan Netflix
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk ga dapat langganan Netflix nya, boleh infoin data ini ya biar bisa aku proses :
1. Nomor by.U : 
2. Email akun by.U :
3. Tanggal pembelian paket :
4. Capture sms dari Netlfix atau 9943 (kalau ada) :
5. Capture notifikasi berhasil aktivasi di aplikasi :
6. Capture kendala :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf untuk ga dapat langganan Netflix nya di nomor xxxxxx boleh infoin data ini ya biar bisa aku proses :
1. Email akun by.U :
2. Tanggal pembelian paket :
3. Capture sms dari Netlfix atau 9943 (kalau ada) :
4. Capture notifikasi berhasil aktivasi di aplikasi :
5. Capture kendala :

==========
Makasih udah nunggu. Kak maaf, coba Kakak aktivasi manual dulu lewat https://netflix-widget.metranet.co.id/netflix-authentication/account_activation ya :) Berikut langkahnya :
a. Input nomor HP by.U yang sudah aktivasi paket Topping Netflix-nya
b. Klik button "Kirim Kode Verifikasi"
c. Nanti akan masuk SMS berupa kode verifikasi untuk konfirmasi aktivasi akun dan ikuti panduannya.

`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak dapat langganan Netflix

1. Nomor by.U : xxxxxx
2. Email : 
3. Tanggal pembelian paket : 
4. Capture sms dari Netlfix atau 9943 : 
5. Capture notifikasi berhasil aktivasi : 
6. Capture kendala : 
7. Order detail ID (CXO) (Pengecekan OperatorX) : 
8. Transaction ID (CXT) (Pengecekan OperatorX) : 
`   
},

{
id: 45,
case : "Tidak dapat langganan Vidio",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Tidak dapat langganan Vidio
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk ga dapat langganan Vidio nya, boleh infoin data ini ya biar bisa aku proses :
1. Nomor by.U :
2. Email akun by.U :
3. Capture detail riwayat transaksi pembelian topping Vidio :
4. Tipe topping Vidio yang dibeli :
5. Capture SMS dari 97080 :
6. Capture halaman paket subscription di aplikasi Vidio :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf untuk ga dapat langganan Vidio nya di nomor xxxxxx boleh infoin data ini ya biar bisa aku proses :
1. Email akun by.U :
2. Capture detail riwayat transaksi pembelian topping Vidio :
3. Tipe topping Vidio yang dibeli :
4. Capture SMS dari 97080 :
5. Capture halaman paket subscription di aplikasi Vidio :

`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak dapat langganan Vidio

1. Email akun by.U : 
2. Nomor by.U : xxxxxx
3. Capture detail riwayat transaksi pembelian topping Vidio : 
4. Tipe topping Vidio yang dibeli : 
5. Capture SMS dari 97080 : 
6. Capture halaman paket subscription di aplikasi Vidio : 
7. Order detail ID (CXO) (Pengecekan OperatorX) : 
8. Transaction ID (CXT) (Pengecekan OperatorX) : 
`   
},

{
id: 46,
case : "Tidak dapat kuota Birthday reward",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Tidak dapat kuota Birthday reward
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk ga dapat kuota bonus birthday, boleh infoin data ini ya biar bisa aku proses :
1. NOmor by.U :
2. Email akun by.U :
3. Capture profile di aplikasi by.U :
4. Capture halaman notifikasi di apps by.U :
5. Capture halaman paket aktif :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf untuk ga dapat kuota bonus birthday di nomor xxxxxx boleh infoin data ini ya biar bisa aku proses :
1. Email akun by.U :
2. Capture profile di aplikasi by.U :
3. Capture halaman notifikasi di apps by.U :
4. Capture halaman paket aktif :

`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Mendapatkan Kuota Birthday Reward

1. Nomor by.U : xxxxxx
2. Akun by.U : 
3. Capture profile di aplikasi by.U : 
4. Capture halaman notifikasi di apps by.U : 
5. Capture halaman paket aktif : 
6. Hasil pengecekan Add Ons di CRM (berupa text dan tidak boleh printscreen) : 
`   
},

{
id: 47,
case : "IRENEW Voucher fisik",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Pelanggan isi kuota voucher fisik gabisa/kuota belum didapat
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk ga dapat kuota dari pengisian di voucher fisik, boleh infoin data ini ya biar bisa aku proses :
1. Nomor by.U : 
2. Nama Paket Kuota :
3. Kode hasil Gesek Voucher Fisik :
4. Serial Number Voucher Fisik :
5. Capture keterangan gagal redeem voucher :
6. Foto Voucher fisik :

Aku tunggu datanya ya :)
` :
`Makasih udah nunggu. Kak maaf untuk ga dapat kuota dari pengisian di voucher fisik di nomor xxxxxx boleh infoin data ini ya biar bisa aku proses :
1. Email akun by.U :
2. Nama Paket Kuota :
3. Kode hasil Gesek Voucher Fisik :
4. Serial Number Voucher Fisik :
5. Capture keterangan gagal redeem voucher :
6. Foto Voucher Fisik :

`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Masalah Pembelian Kuota Via Tukar Kode Voucher 

1. Nomor by.U : xxxxxx
2. Email akun by.U : 
3. Nama Paket Kuota : 
4. Kode hasil Gesek Voucher Fisik : 
5. Serial Number Voucher Fisik : 
6. Capture keterangan gagal redeem voucher : 
7. Foto Voucher Fisik : (untuk kendala voucher fisik rusak (nomor voucher tidak terlihat atau hilang)
8. Order detail ID (CXO) (Pengecekan OperatorX) : 
9. Transaction ID (CXT) (Pengecekan OperatorX) : 
10. Tanggal dan waktu kejadian : 
`   
},

{
id: 48,
case : "Sponsorship/kerjasama",

Bracket : (segment: string) => segment ==='Email' ?
`#Pelangganbyu
[byU Email]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Sponsorship
Solusi : diteruskan ke email  event@byu.id

Hi, Kak. Saat ini udah terhubung dengan Nindy. Terkait pengajuan Sponsorship/kerjasama udah aku bantu ajuin dulu ke tim terkait, kalo sesuai akan dihubungi melalui CPnya ya :)


Hi, Kak. Saat ini udah terhubung dengan Nindy. Terkait pengajuan Sponsorship/kerjasama bisa lampirkan juga data berikut agar dibantu teruskan dulu ke tim terkait ya:

1. Subject email : Pengajuan Kerjasama/Sponsorship

1. Isi email sertakan 
- Nama Lengkap :
- Contact Person : 
- Lampiran Data Pendukung :
(Lampiran Proposal)

Aku tunggu datanya ya Kak :)
`
:
`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Sponsorship
Solusi : arahin hubungi email
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak. Saat ini udah terhubung dengan Nindy. Terkait pengajuan Sponsorship/kerjasama udah aku bantu ajuin dulu ke tim terkait, kalo sesuai akan dihubungi melalui CPnya ya :)


Hi, Kak. Saat ini udah terhubung dengan Nindy. Terkait pengajuan Sponsorship/kerjasama bisa lampirkan juga data berikut agar dibantu teruskan dulu ke tim terkait ya:

1. Subject email : Pengajuan Kerjasama/Sponsorship

2. Isi email sertakan 
- Nama Lengkap :
- Contact Person : 
- Lampiran Data Pendukung :
(Lampiran Proposal)

Aku tunggu datanya ya Kak :)
` :

` Makasih udah nunggu Kak :) Mengenai pengajuan sponsorship atau kerjasama proposalnya bisa langsung dikirim ke email nindy@byu.id ya, have a good day :)

`,
Mandatory :``
},

{
id: 49,
case : "SIM Card Tidak Terdeteksi atau Tidak Bisa Digunakan / Gagal pairing",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gagal pairing
Solusi : Permintaan data Mandatory
`,
Solusi : ` Makasih udah nungu. Kak maaf sepertinya ada kendala nih untuk  SIM card nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U :
2. SN kartu pengganti yang ada di dekat barcode cangkang SIM card :
3. Capture keterangan gabisa aktivasi SIM card:
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
SIM Card Tidak Terdeteksi atau Tidak Bisa Digunakan

1. Nomor by.U : xxxxxx
2. Akun by.U : 
3. SN Kartu Pengganti :
4. Capture SIM Card tidak terdeteksi : `
},

{
id: 50,
case : " greeting",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : greeting
Solusi : greeting

`,
Solusi :  (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Untuk datanya udah aku terima, silakan konfirmasi ke channel sebelumnya Live Chat agar dibantu lebih lanjut ya :)` 
:
`Kak boleh infoin pertanyaan atau kendalanya lebih detail seputar by.U ya biar bisa aku bantu :)

`,
Mandatory :
`

`
},

{
id: 51,
case : "SIM card Deactive",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case :  sim card deactive
Solusi : info  sim card deactive
`,
Solusi : ` Makasih udah nungu. Kak maaf untuk kendala SIM card nya, aku cek nomor xxxxxx udah gabisa di aktivasi/registrasi karena nomornya udah ga aktif/ga di atifin lebih dari 30 hari dari waktu pembayaran berhasil. Aku saranin beli nomor baru di apps by.U pakai akun baru ya :)
`,
Mandatory :``
},

{
id: 52,
case : "Pulsa terpotong karena SMS dari luar negeri",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Pulsa terpotong karena SMS dari luar negeri
Solusi : info nomor SMS nya
`,
Solusi : ` Maaf udah bikin Kakak nunggu ya. Aku cek di sistem untuk nomor xxxxxx ada pengurangan pulsa sebesar Rp500 untuk SMS ke nomor +41415737017. Untuk SMS ini adalah SMS verifikasi dari apps tertentu yang developernya dari luar negeri dan membebankan biaya registrasi ke pulsa customer. Ini settingan dari apps yang terisntall di HP Kakak yang otomatis menarik biaya pulsa ya, bukan settingan dari by.U 🙂
`,
Mandatory :``
},

{
id: 53,
case : "SIM card tidak terdeteksi",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : SIM card tidak terdeteksi
Solusi : solusi SIM card tidak terdeteksi
`,
Solusi : ` Makasih udah nunggu. Kak maaf, untuk kendala SIM card yang ga kedeteksi, kalau IMEI nya udah terdaftar tapi masih berkendala, boleh coba panduan ini ya :
1. Buka dan lepaskan kartu SIM yang tidak terbaca dari slot HP yang tersedia kemudian bersihkan dari debu-debu yang mengganggu kinerja kartu SIM. Selanjutnya aktifkan kembali HP dan tunggu hingga SIM Card menanggapi serta terhubung ke jaringan.
2. Jika masih tidak bisa, coba pindahkan SIM card ke slot lain (SIM Card 1 ke 2 atau sebaliknya untuk HP dual SIM) atau ke HP lain untuk perbandingan.
3. Pastikan posisi sim card dan slotnya pas
4. Refresh jaringan : pada menu mobile networks, pilih operator lain terlebih dahulu, kemudian pilih by.U (Telkomsel).
5. Coba airplane mode dan ON-OFF kan mobile data.
`,
Mandatory : ``
},

{
id: 54,
case : "Kuota tiba-tiba hilang karena kesalahan by.U",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Kuota tiba-tiba hilang karena kesalahan by.U
Solusi : Permintaan data Mandatory
`,
Solusi :(segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala kuotanya, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U :
2. Email akun by.U : 
3. Channel Pembayaran : 
4. Tanggal & Waktu Kejadian : 
5. Capture Detail Riwayat Transaksi Kuota yang hilang : 

Aku tunggu datanya ya Kak :)
` : 
`Makasih udah nunggu. Kak maaf, untuk kendala kuotanya di nomor xxxxxx , boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U : 
2. Channel Pembayaran : 
3. Tanggal & Waktu Kejadian : 
4. Capture Detail Riwayat Transaksi Kuota yang hilang : 
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Kuota tiba-tiba hilang karena kesalahan by.U

1. Nomor by.U : xxxxxx
2. Email akun by.U : 
3. Channel Pembayaran : 
4. Tanggal & Waktu Kejadian : 
5. Capture Detail Riwayat Transaksi Kuota yang hilang : 
6. Nama, Jumlah, Masa Aktif Kuota : (Agent yang melakukan pengecekan sendiri)
7. Detail Kendala : 
`
},

{
id: 55,
case : "U-Coin Tidak Didapatkan Namun Transaksi Sudah Berhasil",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : 
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : u-Coin Tidak Didapatkan Namun Transaksi Sudah Berhasil
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala uCoin nya, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U :
2. Email akun by.U : 
3. Capture keterangan detail transaksi yang u-coinnya tidak masuk :
4. Capture Halaman Histori U-Coin Terkumpul :

Aku tunggu datanya ya Kak :)
` : 
`Makasih udah nunggu. Kak maaf, untuk kendala uCoin nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U : 
2. Capture keterangan detail transaksi yang u-coinnya tidak masuk :
3. Capture Halaman Histori U-Coin Terkumpul :
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
u-Coin Tidak Didapatkan Namun Transaksi Sudah Berhasil

1. Nomor by.U : xxxxxx
2. Email akun by.U : 
3. Capture keterangan detail transaksi yang u-coinnya tidak masuk :
4. Capture Halaman Histori U-Coin Terkumpul :
5. Order detail ID (CXO) (Pengecekan OperatorX) : (hasil pengecekan agent)
6. Transaction ID (CXT) (Pengecekan OperatorX) : (hasil pengecekan agent) 
7. Nomor BSS Order ID yang u-coin nya tidak masuk : (hasil pengecekan agent)
8. Nomor Transaction ID dan waktu transaksi di CRM yang u-coin nya tidak masuk : (hasil pengecekan agent)
9. Printscreen history u-Coin di LMS : (hasil pengecekan agent)
`
},

{
id: 56,
case : "Keluhan Tidak Ada Tombol Aktivasi SIM Card - I JOIN Via E-Commerce (Tiktok, Tokopedia, Shopee)",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Keluhan Tidak Ada Tombol Aktivasi SIM Card - I JOIN Via E-Commerce (Tiktok, Tokopedia, Shopee)
Solusi : Permintaan data Mandatory
`,
Solusi : `Makasih udah nunggu. Kak maaf, untuk kendala masalah pemesanan sim card via e-Commerce yang dialami, boleh infoin data ini ya biar aku bantu cek dulu transaksinya :
1. Email akun by.U yang didaftarin :
2 Printscreen bukti bayar yang tertera Invoice dan capture resi di aplikasi e-Commerce :
3. Capture dashboard apps :


Kak maaf, untuk aktivasinya kalau Kakak beli di Shopee toko resmi by.U, pastiin waktu beli SIM card nya kasih notes email biar didaftarin akun by.U nya. Kalau Kakak belum kasih notes nya, boleh Kakak hubungi admin by.U di Shopee ya biar bisa di bantu daftarin dulu akun by.U nya. Pastiin emailnya yang belum pernah didaftarin akun by.U sebelumnya ya :)
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Keluhan Tidak Ada Tombol Aktivasi SIM Card - I JOIN Via E-Commerce (Tiktok, Tokopedia, Shopee)

1. Nomor by.U : xxxxxx
2. Email akun by.U : ${EMPTY}
2. Printscreen bukti bayar yang tertera Invoice dan capture resi di aplikasi e-Commerce :
3. Printscreen status pengiriman yang tertera resi di aplikasi e-Commerce : (dicek oleh agent)
4. Capture profil apps : ( yang tertulis email login pelanggan)
5. Tuliskan alasan tidak ada tombol aktivasi adalah karena alasan :
6. Email alternatif yang belum terdaftar di akun by.U : 
7. Order ID CXT/CXO (Pengecekan OperatorX) : 
`
},

{
id: 57,
case : " transfer pulsa",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : info send gift/tf pulsa
Solusi : diinfoin udah gabisa
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak untuk transfer pulsa/ send gift saat ini udah ga tersedia ya. Kakak bisa nikmatin fitur yang tersedia di aplikasi by.U saat ini ya :)
` :
`Makasih udah nunggu. Kak untuk transfer pulsa/ send gift saat ini udah ga tersedia ya. Kakak bisa nikmatin fitur yang tersedia di aplikasi by.U saat ini ya :)
`,
Mandatory : ``
},

{
id: 58,
case : "Tidak Mendapatkan Langganan Prime Video",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Tidak Mendapatkan Langganan Prime Video
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk ga dapat langganan Prime Video nya , boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U :
2. Email akun by.U : 
3. Capture detail/daftar transaksi pembelian topping Prime Video di aplikasi by.U :
4. Tipe topping Prime Video yang dibeli :
5. Tanggal pembelian topping Prime Video :
6. Capture kendala :

Aku tunggu datanya ya Kak :)
` :
`Makasih udah nunggu. Kak maaf, untuk ga dapat langganan Prime Video nya di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U : 
2. Capture detail/daftar transaksi pembelian topping Prime Video di aplikasi by.U :
3. Tipe topping Prime Video yang dibeli :
4. Tanggal pembelian topping Prime Video :
5. Capture kendala :
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Mendapatkan Langganan Prime Video

1. Nomor by.U : xxxxxx
2. Email by.U : 
3. Capture detail/daftar transaksi pembelian topping Prime Video di aplikasi by.U :
4. Tipe topping Prime Video yang dibeli :
5. Tanggal pembelian topping Prime Video :
6. Capture kendala :
7. Order detail ID (CXO) (Pengecekan OperatorX) :
8. Transaction ID (CXT) (Pengecekan OperatorX) :
`
},

{
id: 59,
case : "cek masa aktif",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : informasi status kartu
Solusi : informasi status kartu
`,
Solusi : `Makasih udah nunggu. Kak kalau aku cek nomor xxxxxx, statusnya aktif kok. Ini harusnya bisa digunakan SMS,internet maupun internet ya Kak. Boleh coba cek ya :)

Kak aku cek nomor xxxxxx udah hangus karena ga terhubung jaringan lebih dari 60 hari. Kakak bisa beli nomor baru di apps by.U pakai akun baru ya :) 

`,
Mandatory : ``
},

{
id: 60,
case : "Info Paket/ Tarif Harga paket berubah/jadi mahal/promo",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : info paket
Solusi : info paket
`,
Solusi : `Kak, maaf ya udah dibuat ga nyaman, untuk harga paket yang tertera di aplikasi bersifat penawaran ya, jadi akan berubah sesuai dengan promo yang sedang berjalan, yang merupakan bagian dari upaya kita buat terus ningkatin kualitas layanan by.U. Silakan untuk melakukan pembelian paket yang tersedia di aplikasi by.U ya kak :)

Kak maaf, kalau ga tersedia paket yang Kakak inginin, artinya penawaran paketnya udah ga ada. Kakak bisa pilih paket yang tersedia saat ini di apps by.U ya :)

Kak  aku cek nomor xxxxxx saat ini kuota internetnya udah habis, jadi gabisa internetan. Kakak bisa beli kuota baru di apps by.U pake wifi/jaringan lain dulu ya :)

Maaf kak, saat ini ada penyesuaian tarif paket internet merupakan salah satu upaya by.U untuk tetap menjaga kualitas layanan kepada pelanggan. Nindy dan team akan terus tingkatin produk dan layanan by.U biar Kakak bisa selalu nyaman pakai by.U. Keep supporting us ya! :)
`,
Mandatory : ``
},

{
id: 61,
case : "Cara pasang eSIM",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : cara pasang esim
Solusi : info pasang eSIM
`,
Solusi : `Buat iPhone:
- Buka “Pengaturan” pada iPhone.
- Pilih opsi “Seluler”.
- Pilih opsi “Tambah eSIM”.
- Pilih opsi “Gunakan Kode QR”.
- Pindai kode QR eSIM.
- Setelah eSIM terdeteksi, pilih “Tambah/Lanjutkan”.
- Masukkan kode informasi eSIM ke HP iPhone kamu.
- Kalau nomor sudah berhasil terdaftar, klik “OK”.

Buat Android :
- Buka “Pengaturan” di HP Android kamu.
- Pilih opsi “Koneksi”.
- Pilih opsi “Manajer SIM”.
- Pilih opsi “Tambah Paket Seluler”.
- Pilih opsi “Pindai Kode QR”.
- Pindai kode QR eSIM.

- Setelah eSIM terdeteksi, klik “Tambah/Lanjutkan”.
- Jika nomor sudah berhasil terdaftar, klik “OK”.
- Selanjutnya, Kakak bisa aktivasi eSIM dengan buka aplikasi by.U dan pilih aktivasi eSIM.
- Daftarin Nomor KTP/NIK, dan KK kamu.
- 1Tunggu sampai eSIM kamu berhasil di registrasi.
Kalau Kakak terkendala buat aktivasinya, silakan buat konfirmasi lagi ya

================
Hi, Kak Akhyari. Saat ini udah terhubung dengan Nindy. Mengenai penggunaan nomor by.U tanpa kartu Kakak bisa
pesen eSIM by.U via aplikasi dengan langkah-langkah di bawah ini yaa:
1. Pilih "eSIM" pada login page
2. Pilih perangkat yang akan kamu pakai untuk menggunakan eSIM
3. Pilih kuota yang kamu mau
4. Daftar akun by.U menggunakan nomor provider lain
5. Pilih nomor eSIM by.U yang kamu mau
6. Konfirmasi pesanan dan lakukan pembayaran
7. Selanjutnya, kamu akan dikasih QR Code dengan profile eSIM yang bisa kamu download.

Silakan dicoba dulu ya Kak :)
`,
Mandatory : ``
},

{
id: 62,
case : "Gagal Registrasi 5g",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case :  Gagal Registrasi 5g
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk kendala 5G nya, Pastiin HP Kakak udah support 5G dan Kakak juga bisa cek apakah lokasi Kakak udah tercover jaringan 5G melalui https://www.telkomsel.com/check-5G-coverage. Kakak bisa melakukan daftar mandiri melalui https://my.telkomsel.com/provisioning/5g. Pastiin juga saat akses link tersebut SIM Card terpasang di SIM 1, data selular dalam keadaan on, dan fitur lokasi aktif.

Jika masih berkendala, boleh infokan beberapa data di bawah ini supaya bisa dibantu pengecekan:
1. Nomor by.U :
2. Email akun by.U :
3. Lokasi (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi) :
4. Tipe HP :
5. Capture kendala di web https://my.telkomsel.com/provisioning/5g :
6. Capture settingan APN :

Aku tunggu datanya ya Kak :)
` : 
`Kak makasih udah nunggu. Kak maaf, untuk kendala 5G nya di nomor xxxxxx, Pastiin HP Kakak udah support 5G dan Kakak juga bisa cek apakah lokasi Kakak udah tercover jaringan 5G melalui https://www.telkomsel.com/check-5G-coverage. Kakak bisa melakukan daftar mandiri melalui https://my.telkomsel.com/provisioning/5g. Pastiin juga saat akses link tersebut SIM Card terpasang di SIM 1, data selular dalam keadaan on, dan fitur lokasi aktif.

Jika masih berkendala, boleh infokan beberapa data di bawah ini supaya bisa dibantu pengecekan:
1. Email akun by.U :
2. Lokasi (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi) :
3. Tipe HP :
4. Capture kendala di web https://my.telkomsel.com/provisioning/5g :
5. Capture settingan APN
`,
Mandatory : (segment: string,DateTime: string ) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
5G - Gagal Aktivasi Layanan 5G

1. Nomor by.U : xxxxxx
2. Akun by.U :
3. Lokasi detail (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi) :
4. Tanggan dan waktu kejadian :
5. Tipe HP :
6. Capture kendala di https://my.telkomsel.com/provisioning/5g :
`
},

{
id: 63,
case : "Cek Tiket/Ticket",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Cek Tiket
Solusi : infoin  hasil tiket
#CekHasilTiket
`,
Solusi : (segment: string) => segment ==='Email' ? 
'Hai Kak saat ini terhubung dengan Nindy. Kak aku cek untuk ID laporan xx, masih dalam proses penanganan tim kami. Ditunggu aja dulu prosesnya ya. Semoga cepet beres :)'
:
`Kak aku cek untuk ID laporan xx, masih dalam proses penanganan tim kami. Ditunggu aja dulu prosesnya ya. Semoga cepet beres :)
`,
Mandatory : ``
},

{
id: 64,
case : "Request bikin/buat nomor 4 digit/angka",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Info request nomor
Solusi : Info request nomor
`,
Solusi : `Hi, Kak Asep. Saat ini udah terhubung dengan Nindy. Mengenai request nomor hanya bisa dilakukan maksimal 4 digit pada fitur "Bikin Nomor" di aplikasi by.U atau Web byu.id dengan cara berikut :

1. Masuk ke halaman "Yuk Pilih Nomornya"
2. Klik tombol "Bikin Nomor"
3. Masukkan 4 digit angka favoritmu
Klik "Cari Nomor"
4. Lalu akan muncul 5 pilihan nomor dengan 4 digit yang kamu pilih
5. Setelah muncul pilihan nomor yang tersedia, kamu punya waktu 1 menit untuk memilih dan 5x kesempatan untuk mengganti kombinasi 4 digit angka favorit kamu. Kalo kamu sudah menggunakan 5x kesempatan, kamu baru bisa coba lagi buat bikin kombinasi 4 digit angka setelah 1x24 jam ya :)
`,
Mandatory : ``
},

{
id: 65,
case : "Permintaan Hapus Profil eSIM Karena Device Hilang",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Permintaan Hapus Profil eSIM Karena Device Hilang
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf, untuk hapus eSIM di perangkat lamanya yang udah hilang, boleh infoin data ini ya biar bisa aku proses : 
1. Nomor by.U : 
2. Email registrasi by.U :
3. Nomor Identitas KTP valid :
4. Scan/Foto KTP asli :
5. Foto selfie tanpa KTP :
6. Jenis dan type Device yang hilang :
7. Email lain yang bisa dihubungi :

Aku tunggu datanya ya Kak :)
` :
`Makasih udah nunggu, untuk hapus eSIM di perangkat lamanya yang udah hilang di nomor xxxxxx, boleh infoin data ini ya biar bisa aku proses : 
1. Email registrasi by.U 
2. Nomor Identitas KTP valid
3. Scan/Foto KTP asli
4. Foto selfie dengan KTP asli
5. Jenis dan type Device yang hilang
6. Email lain yang bisa dihubungi
`,
Mandatory : (segment:string,DateTime:string)=> 
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Permintaan Hapus Profil eSIM Karena Device Hilang

1. Nomor by.U : xxxxxx
2. Email registrasi by.U : 
3. Nomor Identitas KTP valid : 
4. Scan/Foto KTP asli : 
5. Foto selfie dengan KTP asli : 
6. Jenis dan type Device yang hilang : 
7. Email lain yang bisa dihubungi : 
`
},

{
id: 66,
case : "CCA UE_Handset_Data_Setting_Off",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : sesuai hasil cca disarankan ganti SIM card
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx ,ditemukan issue pada device atau sim card yang digunakan. Jika restart HP tidak menyelesaikan masalah, maka disarankan untuk ajuin ganti SIM card ya :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    UE_Handset_Data_Setting_Off
    Remarks
    Bapak atau Ibu Yth, setelah melakukan pengecekan di sistem kami. Ditemukan issue pada device atau sim card yang digunakan. Jika restart device tidak menyelesaikan masalah maka disarankan untuk mengganti nomor sim ke Grapari
    Suggestion
    TIDAK PERLU CREATE TIKET KE TIM NETWORK. Adanya indikasi sim card atau handphone pelanggan bermasalah, anjurkan pelanggan untuk restart handphone. Jika masalah tetap ada, anjurkan pelanggan untuk mengganti sim card pada Grapari terdekat.
16. Solusi Yang telah di berikan : restart HP dan arahin ganti SIM card
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404


` 
},


{
id: 67,
case : "CCA UE_Handset_Problem_4G",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : sesuai hasil cca disarankan ganti SIM card
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx ,ditemukan issue pada device atau sim card yang digunakan. Jika restart HP tidak menyelesaikan masalah, maka disarankan untuk ajuin ganti SIM card ya :) `,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    UE_Handset_Problem_4G
    Remarks
    Bapak atau Ibu Yth, setelah melakukan pengecekan di sistem kami. Ditemukan issue pada device atau sim card yang digunakan. Jika restart device tidak menyelesaikan masalah maka disarankan untuk mengganti nomor sim ke Grapari
    Suggestion
    TIDAK PERLU CREATE TIKET KE TIM NETWORK. Adanya indikasi sim card atau handphone pelanggan bermasalah, anjurkan pelanggan untuk restart handphone. Jika masalah tetap ada, anjurkan pelanggan untuk mengganti sim card pada Grapari terdekat.
16. Solusi Yang telah di berikan : restart HP dan arahin ganti SIM card
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404


` 
},
{
id: 68,
case : "CCA Radio_lambat",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : Permintaan data Mandatory
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dari BTS nya yang berkaitan dengan performa BTS tersebut. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Radio_lambat
    Remarks
    Bapak atau Ibu Yth, kendala Bapak atau Ibu saat ini disebabkan oleh BTS yang sedang mengalami isu yang berkaitan dengan performa BTS tersebut. Terima kasih atas laporannya kami akan segera eskalasi ke tim terkait
    Suggestion
    SILAHKAN CREATE TIKET KE TIM NETWORK. Adanya indikasi masalah pada jaringan yang lambat.
16. Solusi Yang telah di berikan : tiket
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404


` 
},

{
id: 69,
case : "CCA Neighbor_BTS_Problem",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : sarankan tunggu sesuai CCA
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dari jaringan di lokasi Kakak. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Neighbor_BTS_Problem
    Remarks
    Bapak atau Ibu Yth, kendala Bapak atau Ibu yang dialami saat ini sedang dalam proses peningkatan kualitas jaringan dan memerlukan waktu untuk dapat kembali normal. Mohon dicek secara berkala.
    Cause : ${EMPTY}
    Level : 0
    Alarm meaning : 0 = Low, 1 = Critical, 2 = Major, 3 = Minor
    Suggestion
    TIDAK PERLU CREATE TIKET KE TIM NETWORK. Pelanggan mengalami masalah dan sudah ada tiket yang dicreate ke Network dengan
    Ticket No: IM-20260207-00000898
16. Solusi Yang telah di berikan : disarankan menunggu
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404
`
},

{
id: 70,
case : "CCA Kapasitas_jaringan",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : Permintaan data Mandatory
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dari BTS nya yang berkaitan dengan performa BTS tersebut. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Kapasitas_jaringan
    Remarks
    Bapak atau Ibu Yth, setelah pengecekan di sistem kami, kendala Bapak atau Ibu dikarenakan BTS sedang mengalami isu yang berkaitan dengan performa BTS tersebut. Terima kasih atas laporannya kami akan segera eskalasi ke tim terkait
    Suggestion
    SILAHKAN CREATE TIKET KE TIM NETWORK. Adanya indikasi masalah kapasitas jaringan yang penuh.
16. Solusi Yang telah di berikan : tiket
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404
`
},

{
id: 71,
case : "CCA Sinyal_tidak_stabil",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : Permintaan data Mandatory
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dari BTS nya yang berkaitan dengan performa BTS tersebut. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Sinyal_tidak_stabil
    Remarks
    Bapak atau Ibu Yth, kendala Bapak atau Ibu saat ini BTS sedang mengalami isu yang berkaitan dengan performa BTS tersebut. Terima kasih atas laporannya kami akan segera eskalasi ke tim terkait.
    Suggestion
    SILAHKAN CREATE TIKET KE TIM NETWORK. Adanya indikasi jaringan yang dirasakan pelanggan sedang tidak stabil sehingga pelanggan merasakan internet lamban.
16. Solusi Yang telah di berikan : tiket
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404
`
},

{
id: 72,
case : "SMS broadcast",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sms konten
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`Halo, Kak . Saat ini udah terhubung dengan Nindy. Kalo yang dimaksud permintaan berhenti layanan SMS konten atau Broadcast, Kakak bisa balasa SMS yang didapat dengan Cara ketik UNREG. Kalo ada kendala, boleh infoin data berikut agar dibantu lebih lanjut ya:
1. Email by.U :
2. Nomor by.U
3. Nomor pengirim Broadcast :
4. Capture SMS :
5. Tanggal dan waktu kejadian :

Aku tunggu datanya ya Kak :)
` :
`Kak maaf banget untuk SMS nya di nomor xxxxxx bisa aku proses ya, boleh infoin data ini :
1. Email by.U :
2. Nomor by.U :
3. Capture SMS :
4. Tanggal dan waktu kejadian :
5. Nomor pengirim Broadcast :

Kak aku cek nomor xxxxxx, ada langganan SMS berbayar yang aktif nih. Saat ini udah aku bantu berhentiin langganannya ya. Boleh di cek notifikasi berhenti berlangganannya di SMS ya:) 
`,
Mandatory : (segment:string,DateTime:string)=> 
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Permintaan berhenti layanan SMS Broadcast

1. Email by.U :
2. Nomor by.U :
3. Capture SMS :
4. Tanggal dan waktu kejadian :
5. Nomor pengirim Broadcast :
`
},

{
id: 73,
case : "CCA Layanan_data_tidak_tersedia",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : Permintaan data Mandatory
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, kami menemukan indikasi bahwa sim card yang sedang digunakan tidak memiliki paket untuk mengakses atau menggunakan layanan internet. Mohon dicek kembali :) 

=====================
Hi Kak, makasih banyak ya udah nunggu, aku cek nomor xxxxxx aktif dan di lokasi Kakak lagi ga ada gangguan. Untuk nomornya udah aku bantu refresh jaringan via sistem, bisa coba lakukan langkah berikut untuk 5 menit kedepan:
1. Restart HP 5 menit kedepan
2. Pastikan kolom APN di settingan HP terisi “byu”, kolom username dan password dikosongkan.
3. Pindahkan SIM Card ke hp lain sebagai pembanding.
Segera hubungi kita lagi kalo internetnya masih kendala ya :)

============Kalau masih berkendala===============
Kak maaf, kalau masih berkendala, boleh lengkapin data ini ya :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Layanan_data_tidak_tersedia
    Remarks
    Bapak atau Ibu Yth, setelah pengecekan di sistem kami, kami menemukan indikasi bahwa sim card yang sedang digunakan tidak memiliki paket untuk mengakses atau menggunakan layanan internet. Mohon dicek kembali
    Suggestion
    TIDAK PERLU CREATE TIKET KE TIM NETWORK. Adanya indikasi bahwa pelanggan tidak menggunakan layanan roaming, saran kepada agent untuk mengecek profile dan paketnya kembali.
16. Solusi Yang telah di berikan : sesuai remarks
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404
`
},

{
id: 74,
case : "CCA Kendala_sinyal_4G",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : Permintaan data Mandatory
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dari BTS nya yang berkaitan dengan performa BTS tersebut. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Kendala_sinyal_4G
    Remarks
    Bapak atau Ibu Yth, setelah pengecekan di sistem kami, sinyal 4G bapak atau ibu terdeteksi lemah. Terima kasih atas laporannya kami akan segera eskalasi ke tim terkait
    Suggestion
    SILAHKAN CREATE TIKET KE TIM NETWORK. Adanya indikasi kondisi jangkauan sinyal 4G pada pelanggan yang kurang baik.
16. Solusi Yang telah di berikan : Tiket
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404
`
},

{
id: 75,
case : "CCA UE_Handset_tidak_connect_ke_network",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : sesuai hasil cca disarankan ganti SIM card
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx ,ditemukan issue pada device atau sim card yang digunakan. Jika restart HP tidak menyelesaikan masalah, maka disarankan untuk ajuin ganti SIM card ya :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    UE_Handset_tidak_connect_ke_network
    Remarks
    Bapak atau Ibu Yth, setelah pengecekan di sistem kami. Ditemukan issue pada device atau sim card yang digunakan. Jika restart device tidak menyelesaikan masalah maka disarankan untuk mengganti nomor sim ke Grapari
    Suggestion
    TIDAK PERLU CREATE TIKET KE TIM NETWORK. Adanya indikasi sim card atau handphone pelanggan bermasalah, anjurkan pelanggan untuk restart handphone. Jika masalah tetap ada, anjurkan pelanggan untuk mengganti sim card pada Grapari terdekat.
16. Solusi Yang telah di berikan : restart HP dan arahin ganti SIM card
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404

` 
},

{
id: 76,
case : "CCA Network_browsing_lambat",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : Permintaan data Mandatory
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dari BTS nya yang berkaitan dengan performa BTS tersebut. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Network_browsing_lambat
    Remarks
    Bapak atau Ibu Yth, kendala Bapak atau Ibu saat ini disebabkan oleh BTS yang sedang mengalami isu yang berkaitan dengan performa BTS tersebut. Terima kasih atas laporannya kami akan segera eskalasi ke tim terkait
    Suggestion
    SILAHKAN CREATE TIKET KE TIM NETWORK. Adanya indikasi masalah pada jaringan yang lambat.
16. Solusi Yang telah di berikan : tiket
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404
` 
},

{
id: 77,
case : "Cara membagikan kode refferal",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Cara membagikan kode refferal
Solusi : edukasi
`,
Solusi : `Hi, Kak Herman. Saat ni udah terhubung dengan Nindy. Aku konfirmasi apakah yang dimaksud cara ajak teman menggunakan nomor by.U? Kalo iya, sebelumnya Pastiin dulu udah pake aplikasi versi terbaru ya!

Nah ada 2 cara buat share link referral:

1. Buka aplikasi lalu klik foto profile di pojok kiri atas aplikasi. Klik tombol "Ajak Teman" lalu bagikan link/QR code referral lewat channel yang kamu mau
2. Buka aplikasi by.U lalu klik carding "Rich Giga" di halaman Updates, lalu klik "Link Referal" dan bagikan lewat channel yang kamu mau atau ajak teman kamu untuk scan QR code referal yang ada di aplikasi.

Oh iya! Kamu bisa kamu share referal kamu lewat Whatsapp, Line, IG direct, Twitter, Email, Linkedin, Facebook Messenger, SMS, Email, Flipboard, dan pilihan channel lainnya ya :)`,
Mandatory : 
`` 
},

{
id: 78,
case : "Paket unlimited/Mbps",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Paket unlimited
Solusi : edukasi ga tersedia
`,
Solusi : (segment: string) => segment ==='Email' ?  `Hi, Kak Ardi. Saat ini udah terhubung dengan Nindy. Mengenai paket unlimited atau Mbps lagi engga tersedia dulu nih atas pertimbangan tim dan buat info kedepannya masih ada paketnya atau engga Kaka bisa cek berkala siapa tau tim lagi siapin kejutan kuota yg lebih menarik buat kamu dan bisa juga beli dulu paket lainnya yg tersedia si Apps ya Kak, makasih udah antusias banget :)`:
`Kak maaf, untuk paket unlimited atau Mbps lagi engga tersedia dulu nih atas pertimbangan tim dan buat info kedepannya masih ada paketnya atau engga Kaka bisa cek berkala siapa tau tim lagi siapin kejutan kuota yg lebih menarik buat kamu dan bisa juga beli dulu paket lainnya yg tersedia si Apps ya Kak, makasih udah antusias banget :)`,
Mandatory : 
`` 
},

{
id: 79,
case : "CCA Cell_Colo_Problem",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : sarankan tunggu sesuai CCA
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dari jaringan di lokasi Kakak. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Cell_Colo_Problem
    Remarks
    Bapak atau Ibu Yth, kendala Bapak atau Ibu yang dialami saat ini sedang dalam proses peningkatan kualitas jaringan dan memerlukan waktu untuk dapat kembali normal. Mohon dicek secara berkala.
        Cause : Cell Unavailable
        Level : 0
        Alarm meaning
        0 = Low
        1 = Critical
        2 = Major
        3 = Minor
    Suggestion
    TIDAK PERLU CREATE TIKET KE TIM NETWORK. Pelanggan mengalami masalah dan sudah ada tiket yang dicreate.
    Ticket No: EM-20260214-00000957
16. Solusi Yang telah di berikan : disarankan menunggu
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404
`
},

{
id: 80,
case : "CCA BTS_Down",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : sarankan tunggu sesuai CCA
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, saat ini sedang dalam proses peningkatan kualitas jaringan dan memerlukan waktu untuk dapat kembali normal. Mohon dicek secara berkala ya :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    BTS_Down
    Remarks
    Bapak atau Ibu Yth, kendala Bapak atau Ibu yang dialami saat ini sedang dalam proses peningkatan kualitas jaringan dan memerlukan waktu untuk dapat kembali normal.
        Mohon dicek secara berkala.
        Cause : INAP Site Down
        Alarm level : 0
        Alarm meaning : 0 = Low, 1 = Critical, 2 = Major, 3 = Minor
    Suggestion
    TIDAK PERLU CREATE TIKET KE TIM NETWORK. Pelanggan mengalami masalah dan sudah ada tiket yang dicreate ke Network dengan
    Ticket No: IM-20260216-00000058
16. Solusi Yang telah di berikan : disarankan menunggu
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404
`
},

{
id: 81,
case : "CCA Red_Cell_Capacity_Solution",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : Permintaan data Mandatory
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dikarenakan BTS sedang mengalami isu yang berkaitan dengan kapasitas jaringan yang penuh di BTS tersebut. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Red_Cell_Capacity_Solution
    Remarks
    Bapak atau Ibu Yth, setelah pengecekan di sistem kami, kendala Bapak atau Ibu dikarenakan BTS sedang mengalami isu yang berkaitan dengan kapasitas jaringan yang penuh di BTS tersebut. Terima kasih atas laporannya kami akan segera eskalasi ke tim terkait
    Suggestion
    SILAHKAN CREATE TIKET KE TIM NETWORK. Adanya indikasi masalah kapasitas jaringan yang penuh.
16. Solusi Yang telah di berikan : tiket
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404

` 
},

{
id: 82,
case : "CCA Kendala_Sinyal",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : sinyal/internet
Solusi : Permintaan data Mandatory
`,
Solusi : `Kak maaf, kalau aku cek di nomor xxxxxx, ada kendala nih dikarenakan BTS sedang mengalami isu yang berkaitan dengan performa BTS tersebut. Boleh infoin data ini ya biar bisa aku proses :
1. Lokasi detail kendala (nama jalan, RT/RW, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
2. Apakah terjadi di dalam Gedung atau di luar gedung?
3. Apakah berkendalanya di semua lokasi atau hanya lokasi tertentu
4. Nomor lain yang berkendala sama di lokasi tersebut (jika mengetahui)
5. Jaringan yang terdapat di handset (2G/3G/HSDPA/4G LTE/5G) dan jumlah bar sinyal yang diterimanya
6. Aplikasi/web yang berkendala. (Jika kendala aplikasi/web tertentu)
7. CP lain yang dapat dihubungi 
8. Capture keterangan internet/sinyal berkendala :)`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[NO] [byU ${segment}] 
1. Nama Customer : Pelanggan 
2. MSISDN-A Yang Menghubungi : xxxxxx
3. MSISDN-B Yang Bermasalah : xxxxxx
4. Tanggal/Jam Kejadian : ${DateTime} 
5. Lokasi Pelanggan (alamat) : 
6. Koordinat Customer : 
7. Segmentasi Kartu :byU
8. SIM Capability :USIM
9. Customer Tier Pelanggan :-
10. Case Owner :byU
11. Detail Complaint : sinyal/internet
12. Additional Information :
    -dalam Gedung atau di luar gedung?
    -semua lokasi atau hanya lokasi tertentu :
    -Nomor lain yang berkendala sama :-
    -bar sinyal dan 4G/3G/E :
    -Aplikasi/web yang berkendala :
    -CP :
    -Tipe HP :
13. Capture Bukti Pelanggan : linkcapture
14. Capture CCA : linkcapture
15. Hasil analisa CCA :
    Possible Root Cause 
    Kendala_Sinyal
    Remarks
    Bapak atau Ibu Yth, berdasarkan pengecekan di sistem kami, kendala Bapak atau Ibu saat ini dikarenakan BTS sedang mengalami isu yang berkaitan dengan performa BTS tersebut. Terima kasih atas laporannya, kami akan segera eskalasi ke tim terkait.
    Suggestion
    SILAHKAN CREATE TIKET KE TIM NETWORK. Adanya indikasi BTS mengalami gangguan sehingga pelanggan tidak dapat mengakses internet.
16. Solusi Yang telah di berikan : tiket
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
#CheckbyCCA

N-90001-Network Service Desk-Head Office-INT404

` 
},
{
id: 83,
case : "Beli Paket/Pulsa/SIM card",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : cara pembelian SIM card/eSIM
Solusi : info cara pembelian SIM card/eSIM
`,
Solusi : `Kak untuk beli paket internet bisa lewat apps by.U dengan pilih menu isi kuota pada halaman dashboard ya :)

Kak untuk beli pulsa bisa lewat apps by.U dengan pilih menu isi pulsa pada halaman dashboard ya :)

Kak untuk beli SIM card/nomor baru bisa beli lewat apps/web by.U ya, nanti setelah pilih paket langsung masuk ke halaman pembayaran. Pilih nomor yang tersedia aja disana ya :)

Kak untuk beli eSIM bisa lewat apps by.U langsung ya, pastiin pilih menu eSIM sebelum login/sign up :)`,
Mandatory : `` 
},

{
id: 85,
case : "Tidak dapat Langganan Youtube Premium",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Tidak Mendapatkan Langganan Youtube Premium
Solusi : Permintaan data Mandatory
`,
Solusi : `Hai, Kak. Maaf banget jadi ga nyaman karena ga dapet SMS link akun Youtube Premium-nya di nomor xxxxxx. Silakan coba aktivasi dulu melalui link berikut : https://tsel.id/ytact ya. Kalo masih kendala infoin data berikut biar dibantu lebih lanjut :
1. Email akun by.U
2. Capture detail/daftar transaksi pembelian topping Youtube Premium di aplikasi by.U
3. Capture SMS dari 97080
4. Capture gagal aktivasi melalui link https://tsel.id/ytact
`,
Mandatory : (segment:string, DateTime:string) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Tidak Mendapatkan Langganan Youtube Premium

1. Email akun by.u :
2. Nomor by.U :
3. Capture detail/daftar transaksi pembelian topping Youtube Premium di aplikasi by.U :
4. Tipe topping Youtube Premium yang dibeli :
5. Tanggal pembelian topping Youtube Premium :
6. Capture kendala (disesuaikan dengan kendala pelanggan) :
7. Order detail ID (CXO) (Pengecekan OperatorX) :
8. Transaction ID (CXT) (Pengecekan OperatorX) :

` 
},

{
id: 86,
case : "Closing",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : closing
Solusi : closing
`,
Solusi:  (segment: string) => segment ==='Live' ?  `Makasih juga udah interaksi ya Kak :) Ohiya, aku akhiri obrolan kita ya, Kaka jangan dulu tutup chatnya ya karena setelah ini juga ada pop-up survey yang lain. Dibantu isi ya Kak kalau Kaka merasa puas boleh banget isi dengan angka (10) dan seterusnya ya. Makasih banget udah selalu setia sama by.U Kak :)  sehat selalu :)
`: `Oke, Kak. Kalau nantinya masih ada yang mau ditanyain lagi terkait layanan by.U-nya, jangan sungkan buat hubungi aku ya.Aku izin akhiri obrolan kita ya, Agar pelayanannya bisa lebih baik lagi nih Kak, bisa isi link berikut https://tsel.id/survey-byu . Boleh banget isi dengan angka (10) kalau merasa terbantu dan kalau merasa belum terbantu boleh di isi dari mulai angka (1) dan seterusnya, ya Kak.
Nindy bakal tingkatin terus kualitas layanan by.U biar kamu seneng dan tetep setia sama by.U 💙`,
Mandatory : 
`
` 
},

{
id: 87,
case : "Pengambilan SIM card di GraPARI/Indomaret",
Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email akun by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : Pengambilan SIM card di GraPARI/Indomaret
Solusi : Permintaan data Mandatory
`,
Solusi:  (segment: string) => segment ==='Email' ?  `
Hi, Kak Dalela. Saat ini udah terhubung dengan Nindy. Maaf mengenai kendala pengambilan SIM Card baru di GraPARI, boeh infoin data berikut agar dibantu cek dulu ya :


1. Email dan Nomor by.U customer:
2. Bukti bayar:
3. Capture pengambilan kartu:
4. Nama dan alamat booth/grapari/outlet:
5. Nama dan nomor penerima:

Aku tunggu datanya ya Kak :)
`: `
Makasih udah nunggu. Kak maaf, untuk pengambilan SIM card nya kalau berkendala, Kakak bisa ke GraPARI lain yang terdekat ya dengan tunjukin halaman pengambilan SIM card nya yang saat ini :)

Oke Kak untuk pengajuan pengirimannya di nomor xxxxxx boleh infoin data ini ya :
1. Email akun by.U:
2. Bukti bayar:
3. Capture pengambilan kartu:
4. Nama dan alamat booth/grapari/outlet:
5. Nama dan nomor penerima:
6. Alamat lengkap (nama jalan, no rumah, RT/RW, Kelurahan. Kecamatan, kabupaten/kota, patokan lokasi dan kode POS) :

(kalau sim card pengganti gausah bukti bayar)

`,
Mandatory : (segment: string, DateTime:string) =>
`#Pelangganbyu
[byU ${segment}] 
Pelanggan by.U
${DateTime} 
Pick Up GRAPARI/indomaret tutup

1. Email by.u : ${EMPTY}
2. Nomor by.U : xxxxxx
3. Bukti bayar: 
4. Capture pengambilan kartu: 
5. Nama dan alamat grapari/indomaret: 
6. Nama dan nomor penerima: 
7. Alamat lengkap (nama jalan, no rumah, RT/RW, Kelurahan. Kecamatan, kabupaten/kota, patokan lokasi dan kode POS) :
8. Order detail ID (CXO) (Pengecekan OperatorX) :
9. Transaction ID (CXT) (Pengecekan OperatorX) :

` 
},

{
id: 88,
case : "Keluhan sinyal di Luar Negeri Roaming",

Bracket : (segment: string) =>`#Pelangganbyu
[byU ${segment}]
Nomor by.U : xxxxxx
Email by.U : ${EMPTY}
Waktu Transaksi   :  
Waktu Kejadian    : ${getCurrentDate()}
Lokasi Pelanggan  : 
Detail case : gabisa sinyal roaming
Solusi : Permintaan data Mandatory
`,
Solusi : (segment: string) => segment ==='Email' ? 
`
Hi, Kak . Saat ini udah terhubung dengan Nindy. Kak maaf untuk kendala sinyalnya di luar negeri,boleh infoin data ini ya biar bisa aku cek :
Hai Kak, maaf udah bikin ga nyaman ya. Boleh infokan beberapa data di bawah ini supaya bisa dibantu pengecekan :
1. Nomor by.U : 
2. Email akun by.U : 
3. Lokasi negara :
4. Tanggal dan waktu kejadian sejak kapan :
5. Jaringan/operator negara setempat yang digunakan :
6. Capture setting APN di HP :
7. Capture sinyal yang didapat :


Aku tunggu datanya ya :)

Pastikan ada fitur roaming barring di menu DSC "Unblocked"

Makasih udah nunggu. Kak aku cek nomor xxxxxx aktif  dan punya kuota roaming, serta kondisi jaringan di lokasi negara Kakak ga ada info gangguan. Bisa dicoba langkah-langkah ini ya kak :
1. Coba ON-kan airplane mode dan OFF-kan kembali, 
2. Ubah pengaturan jaringan dari otomatis menjadi manual, lalu cari Operator yang bekerjasama di negara tersebut,
3. Pastikan kolom APN diisi dengan "byu" (tanpa tanda kutip), username dan password kosongkan.
4. Pastikan hanya ada 1 SIM Card yang aktif, jika masih tidak bisa coba pindahkan SIM card ke HP lain untuk perbandingan.

Sebagai tambahan bisa coba salah satu Operator yang berkejasama di negara XXX yaitu xxx  . Jika cara di atas sudah dicoba dan sinyalnya masih berkendala, tolong hubungi kita lagi. Terima kasih.

======Gapunya paket roaming=====
Kak aku cek nomor xxxxxx aktif tapi gapunya kuota roaming. Untuk ketentuan nomor by.U saat ini biar dapet sinyal di luar negeri, harus memiliki paket internet roaming ya. Silakan aktivasi paketnya di aplikasi by.U ya. Makasih :)
` :
`Makasih udah nunggu. Kak maaf untuk kendala sinyalnya di luar negeri di nomor xxxxxx ,boleh infoin data ini ya biar bisa aku cek :
1. Email akun by.U :
2. Lokasi negara :
3. Tanggal dan waktu kejadian sejak kapan :
4. Jaringan/operator negara setempat yang digunakan :
5. Capture setting APN di HP :
6. Capture sinyal yang didapat :
7. Capture speedtest :

Pastikan ada fitur roaming barring di menu DSC "Unblocked"

Makasih udah nunggu. Kak aku cek nomor xxxxxx aktif  dan punya kuota roaming, serta kondisi jaringan di lokasi negara Kakak ga ada info gangguan. Bisa dicoba langkah-langkah ini ya kak :
1. Coba ON-kan airplane mode dan OFF-kan kembali, 
2. Ubah pengaturan jaringan dari otomatis menjadi manual, lalu cari Operator yang bekerjasama di negara tersebut,
3. Pastikan kolom APN diisi dengan "byu" (tanpa tanda kutip), username dan password kosongkan.
4. Pastikan hanya ada 1 SIM Card yang aktif, jika masih tidak bisa coba pindahkan SIM card ke HP lain untuk perbandingan.

Sebagai tambahan bisa coba salah satu Operator yang berkejasama di negara XXX yaitu xxx  . Jika cara di atas sudah dicoba dan sinyalnya masih berkendala, tolong hubungi kita lagi. Terima kasih.


======Gapunya paket roaming=====
Kak aku cek nomor xxxxxx aktif tapi gapunya kuota roaming. Untuk ketentuan nomor by.U saat ini biar dapet sinyal di luar negeri, harus memiliki paket internet roaming ya. Silakan aktivasi paketnya di aplikasi by.U ya. Makasih :)
`,
Mandatory : (segment: string ) =>
`#Pelangganbyu
[NO][IR][${segment}]

1. Nomor by.U : xxxxxx
2. Email akun by.U : ${EMPTY}
3. Lokasi negara : 
4. Tanggal dan waktu kejadian sejak kapan : 
5. Jaringan/operator negara setempat yang digunakan : 
6. Gangguan sinyal terjadi sepanjang hari atau pada waktu tertentu aja? 
7. Jaringan yang digunakan apa? 2G, 4G, 5G? : 
8. Jenis device/hp yang dipakai? 
9. Capture setting APN di hp : 
10. Capture bar sinyal yang didapat : 
11. Email aktif yang bisa dihubungi: 
12. Detail kendala: Ga ada sinyal roaming
13. Solusi: sesuai pansol
GPRSLOCK UNBLOCK
EPSLOCK UNBLOCK
status ACTIVE
GPRSLOCK | FALSE
EPSLOCK | FALSE
Baring Roam | NOBAR
`   
},



]
return Mandatory
}

