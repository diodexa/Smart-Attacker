export const DataMandatory = () => {

    const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("id-ID");       // 02/12/2025
    const time = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
    });
    return`${date} ${time}`
}  
    const getCurrentDate = () => {
    const now = new Date();
    const date = now.toLocaleDateString("id-ID");       // 02/12/2025
  
    return`${date} `
}  

const Mandatory = [{ 
id: 1 ,
case : "Internet Lambat",
Solusi : `
Makasih udah nunggu. Kak maaf, untuk kendala internet lambatnya di nomor xxxxxxx, boleh infoin data ini ya biar bisa aku cek : 
1. Email akun by.U :
2. Lokasi detail kendala (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
3. Tanggal dan waktu kejadian sejak kapan :
4. Kendala terjadi di satu atau semua aplikasi :
5. Capture speedtest :
6. Capture setting APN di HP :

Sekedar info kak, karena kita pake jaringan Telkomsel, jadi kualitas jaringan by.U mengikuti kualitas jaringan Telkomsel di lokasi kakak ya. Makasih :)



Makasih udah nunggu. Kak aku cek nomor xxxxxxx aktif dan punya kuota juga lokasi Kakak ga ada info gangguan nih. Boleh coba panduan ini ya :
1. Ubah mode jaringan dari otomatis ke manual 2G only, kemudian kembalikan lagi ke mode otomatis
2. Lakukan refresh jaringan :
Android : pada menu mobile networks, pilih operator lain terlebih dahulu, kemudian pilih by.U (Telkomsel).
iOS : pilih menu Settings, pilih General, klik Reset dan Reset Network Setting
3. Coba ON-kan airplane mode dan OFF-kan kembali, OFF-kan mobile data dan ON-kan kembali.
4. Isi APN dengan "byu", username dan password kosongkan.
5. Jika masih tidak bisa, coba pindahkan SIM card ke slot lain (SIM Card 1 ke 2 atau sebaliknya untuk HP dual SIM) atau ke HP lain untuk perbandingan.
6. Coba akses secara berkala selama 1x24 jam khawatir gangguan sementara.
Semoga membantu :)`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Internet Lambat  

1. Nomor dan akun by.U :
2. Lokasi detail (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) :
3. Jenis device yang digunakan :
4. Tanggal dan waktu kendala :
5. Kendala terjadi sepanjang hari atau pada waktu tertentu aja?
6. Jaringan yang diterima (2G, 4G, atau 5G) dan jumlah bar/titik sinyal yang didapat?
7. Capture hasil speedtest :
8. Nomor atau info kontak lain yang bisa dihubungi :
9. Sisa kuota yang dimiliki oleh pelanggan :



3x24 jam` 
},

{
id: 2,
case : "Error Lain",
Solusi : ` Makasih udah nunggu. Kak maaf, kalau aku cek ada  masalah di nomor atau SIM Card by.U Kakak. Untuk pengecekan lebih lanjut, boleh infoin data ini ya :

1. Nomor Identitas KTP valid :
2. NOKK :
3. Serial Number di cangkang SIM Card :
4. Capture gagal aktivasi yang menggunakan 1 SIM card di HP dan pastiin ga pakai wifi :

Sekali lagi mohon maaf, jika sudah ketemu solusinya akan segera dikabari ya Kak. Makasih banyak masih mau tetap bersabar dan setia support by.U! `,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak bisa aktivasi Error Lain 

1. Nomor by.U :
2. Akun by.U :
3. Nomor Identitas KTP valid :
4. NOKK :
5. Serial Number di cangkang SIM Card :
6. Capture gagal aktivasi  :
7. Order ID CXT/CXO (Pengecekan OperatorX) :



1x24 jam`
},

{
id: 3,
case : "Bugs Lain",
Solusi : `Makasih udah nunggu. Kak maaf, aku cek ga ada info gangguan. Boleh coba dulu untuk ON-kan airplane mode beberapa saat, kemudian OFF-kan kembali. Kalau masih gak bisa, boleh coba install ulang aplikasi by.U kakak dan pastikan koneksi internet ada. Kalau di aplikasi masih berkendala, Kakak bisa coba akses di website by.U ya. Kalau udah tapi masih berkendala, boleh infoin data ini ya :
1. Email by.U : 
2. Nomor by.U : 
3. Tipe/merek Gadget : 
4. Versi OS Gadget : 
5. Versi aplikasi by.U : 
6. Apakah bisa akses website byu.id di device yang sama menggunakan jaringan by.U atau jaringan lain? 
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul notifikasi error : 
8. Waktu dan Lama Kejadian : 
9. Lokasi Kejadian :  `,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Bugs Lain 

1. Email by.U : 
2. Nomor by.U : 
3. Tipe/merek Gadget : 
4. Versi OS Gadget : 
5. Versi aplikasi by.U : 
6. Apakah bisa akses website byu.id di device yang sama menggunakan jaringan by.U atau jaringan lain? YA 
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul notifikasi error : 
8. Waktu dan Lama Kejadian : 
9. Lokasi Kejadian : 


`   
},

{
id: 4,
case : "Bugs Ganti Sim Card",
Solusi : `Makasih udah nunggu :) Oke Kak maaf. Ini SIM card Kakak harusnya bisa lanjut dengan Kakak pilih menu ganti SIM card di apps, nantinya bakal muncul halaman pengambilan/pengantaran. Coba di clear cache dulu apps nya dan pastiin pakai apps versi terbaru ya. Kalau udah tapi masih ga muncul halaman pengambilan/pengantarannya boleh diinfoin data ini :
1. Email by.U :
2. Nomor by.U :
3. Tipe/merek Gadget :
4. Versi OS Gadget :
5. Versi aplikasi by.U :
6. Apakah bisa akses menggunakan wifi/jaringan lain :
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul kendalanya seperti apa :
8. Waktu dan Lama Kejadian :`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Bugs Ganti Sim Card 

1. Email by.U : 
2. Nomor by.U : 
3. Tipe/merek Gadget : 
4. Versi OS Gadget : 
5. Versi aplikasi by.U : 
6. Detail keluhan yang disampaikan customer apakah bisa akses menggunakan wifi/jaringan lain : YA 
7. Screen recorder dari awal masuk aplikasi by.U hingga muncul kendalanya seperti apa :  
8. Waktu dan Lama Kejadian : 


`   
},

{
id: 5,
case : "Tidak bisa Kirim/Terima SMS",
Solusi : `Makasih udah nunggu. Kak maaf banget nih untuk kendala SMS nya di nomor xxxx. Boleh coba panduan ini dulu ya :
1. Kalau kakak berada dalam lokasi yang mendapatkan sinyal by.U.
2. Periksa settingan SMS bahwa nomor pusat layanan SMS (message center-nya) adalah +6281100000 *Note: hanya ada di HP android, jika pelanggan sudah infokan tipe HP dan bukan HP android maka settingan ini tidak perlu di infokan ke pelanggan
3. Coba on-off-kan airplane mode
Jika nomor 1-3 sudah dicek tapi layanan SMS tetap bermasalah, mohon diinfokan beberapa data berikut supaya kami bisa bantu pengecekan ya Kak :
1. Email akun by.U :
2. Printscreen dashboard di apps dan keterangan sinyal : 
3. Waktu dan Lama Kejadian :
4. Tipe gadget yang dipakai :
5. Keterangan gagal yang muncul saat menerima atau mengirim SMS :
6. Kendala yang terjadi tidak bisa terima SMS, kirim SMS atau keduanya? :
7. Kendala terjadi hanya saat menerima SMS atau mengirim SMS ke nomor tertentu atau semua? :
8. Nomor lain yang bisa dihubungi : 

`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak bisa kirim / Terima SMS 

1. Email dan nomor by.U :
2. Printscreen dashboard di apps dan keterangan sinyal : 
3. Waktu dan Lama Kejadian :
4. Tipe gadget yang dipakai :
5. Keterangan gagal yang muncul saat menerima atau mengirim SMS :
6. Kendala yang terjadi tidak bisa terima SMS, kirim SMS atau keduanya? :
7. Kendala terjadi hanya saat menerima SMS atau mengirim SMS ke nomor tertentu atau semua? :
8. Nomor lain yang bisa dihubungi : 



1x24 jam`   
},

{
id: 6,
case : "Panggilan Telepon Masuk / Telepon Keluar",
Solusi : `Makasih udah nunggu. Kak maaf, untuk kendala teleponnya di nomor xxxxx , boleh  pastiin dulu kakak berada dalam lokasi yang mendapatkan sinyal by.U dan sudah mencoba on-off-kan airplane mode. kalau masih gabisa, boleh infoin data ini ya :
1. Email akun by.U :
2. Printscreen dashboard di apps dan keterangan sinyal : 
3. Waktu dan Lama Kejadian :
4. Tipe HP yang dipakai :
5. Keterangan error yang muncul saat telepon :
6. Kendala terjadi hanya saat menerima panggilan, melakukan panggilan, atau keduanya :
7. Kendala terjadi hanya ke nomor tertentu atau semua nomor :
8. Nomor lain yang bisa dihubungi : 

`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak bisa melakukan panggilan on-net & off-net

1. Email dan nomor by.U :
2. Printscreen dashboard di apps dan keterangan sinyal : 
3. Waktu dan Lama Kejadian :
4. Tipe HP yang dipakai :
5. Keterangan error yang muncul saat telepon :
6. Kendala terjadi hanya saat menerima panggilan, melakukan panggilan, atau keduanya :
7. Kendala terjadi hanya ke nomor tertentu atau semua nomor :
8. Nomor lain yang bisa dihubungi : 



1x24 jam`   
},

{
id: 7,
case : "Tidak bisa request OTP Meta Product",
Solusi : `Kak maaf banget nih untuk kendala kode OTP nya di nomor xxxx. Boleh coba panduan ini dulu ya :
1. Kalau kakak berada dalam lokasi yang mendapatkan sinyal by.U.
2. Periksa settingan SMS bahwa nomor pusat layanan SMS (message center-nya) adalah +6281100000 
3. Coba on-off-kan airplane mode
Jika nomor 1-3 sudah dicek tapi layanan SMS tetap bermasalah, mohon diinfokan beberapa data berikut supaya kami bisa bantu pengecekan ya Kak :
1. Email akun by.U :
2. Waktu Kejadian :
3. Nomor lain yang bisa dihubungi :
4. Tipe gadget yang digunakan :
5. Capture dashboard di apps dan keterangan sinyal : 
6. Keterangan gagal yang muncul saat melakukan request/menerima OTP :
`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
TIDAK BISA REQUEST OTP META PRODUCT

1. Email by.U :
2. Nomor by.U :
3. Waktu Kejadian :
4. Nomor lain yang bisa dihubungi :
5. Tipe gadget yang digunakan :
6. Capture dashboard di apps dan keterangan sinyal : 
7. Keterangan gagal yang muncul saat melakukan request/menerima OTP :



1x24 jam`   
},

{
id: 8,
case : "Unreg hapus NIK",
Solusi : `Makasih udah nunggu. Kak maaf untuk unreg/deaktivasi SIM card by.U, bisa melalui aplikasi. Silakan kakak buka halaman profil, pilih menu bantuan, pilih topik Isu SIM, lalu Kakak pilih faq Gimana sih cara unreg SIM Card by.U? Selanjutnya ikuti langkah-langkah pada aplikasi ya.
1. Masukan SIM Card by.U ke gadget kamu
2. Matikan WiFi dan pastikan gadget kamu udah nyambung ke jaringan seluler by.U
3. Klik button UNREG SIM Card pada bagian "Klik disini"
4. Selanjutnya akan muncul halaman data unreg SIM Card. Pada halaman ini Kakak perlu meng-input NIK yang sama ketika nomor diaktivasi dan alasan unreg SIM Card, lalu klik button Kirim
5. Kemudian akan muncul halaman disclaimer yang berisi syarat dan ketentuan terkait unreg SIM Card, pelanggan perlu menandai tanda checklist dibagian bawah sebagai tanda bahwa pelanggan sudah membaca dan menyetujui syarat & ketentuan unreg SIM Card. Lalu klik Unreg SIM Card
6. Unreg SIM Card akan diproses jika data sesuai dan keterangan berhasil unreg akan muncul di aplikasi by.U :)


Makasih udah nunggu. Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu UNREG SIM Card di akun berikut:
1. Nomor by.U : xxxxxxxx
2. Email: xxxxxxxx

Nomor yang sudah berhasil di unregistrasi ga akan bisa diaktifkan kembali dalam kondisi apapun ya kak, lalu NIK yang terdaftar di nomor ini juga akan ikut terhapus. Kalo data diatas udah sesuai dan Kakak setuju boleh tolong konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :)
`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Permintaan Deaktivasi SIM Card dan Hapus NIK

1. Email by.U :
2. Nomor by.U :
3. Nomor Identitas KTP :
4. Alasan tidak ingin menggunakan by.U lagi :
5. Nomor Kartu Keluarga :
6. Foto KTP : 
7. Foto Selfie dengan KTP : 



1x24 jam`   
},

{
id: 9,
case : "Unreg hapus NIK lupa nomor",
Solusi : "",
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Permintaan Deaktivasi SIM Card dan Hapus NIK

1. Nomor by.U :
2. Email by.U :
3. Nomor KTP :
4. Alasan tidak ingin menggunakan by.U lagi :
5. Nomor Kartu Keluarga :
6. Foto identitas :
7. Foto Selfie KTP : 
8. Capture hasil pengecekan dari *444# : 
9. CP yang bisa dihubungi :


1x24 jam`   
},

{
id: 10,
case : "Gagal Aktivasi eSIM Account Status Tidak Sesuai",
Solusi : "",
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Gagal Aktivasi eSIM Account Status Tidak Sesuai

1.Email by.U :
2.Nomor by.U :
3.Nomor yang bisa dihubungi :
4.Email yang bisa dihubungi :
5.Capture gagal aktivasi di apps : 



1x24 jam`   
},

{
id: 11,
case : "Sinyal lemah/tidak stabil",
Solusi : `
Makasih udah nunggu. Kak maaf, untuk kendala sinyalnya di nomor xxxxx ,boleh infoin data ini ya biar bisa aku cek :
1. Email akun by.U :
2. Lokasi detail kendala (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
3. Tanggal dan waktu kejadian sejak kapan :
4. Nomor by.U lain yang berkendala sama :

Sekedar info, Kak. Karena kita pake jaringan Telkomsel, jadi kualitas jaringan by.U mengikuti kualitas jaringan Telkomsel di lokasi kakak ya. Makasih :)

==============

Makasih udah nunggu. Kak maaf, kalau aku cek nomor xxxxxxxxxxxx  statusnya aktif dan tidak ada info gangguan di lokasi Kakak. Bisa dicoba dulu langkah-langkah di bawah ini ya kak :
1. Ubah mode jaringan dari otomatis ke manual 2g only, kemudian kembalikan lagi ke mode otomatis
2. Lakukan refresh jaringan :
Android : pada menu mobile networks, pilih operator lain terlebih dahulu, kemudian pilih by.U (Telkomsel).
iOS : pilih menu Settings, pilih General, klik Reset dan Reset Network Setting
3. Coba ON-kan airplane mode, lalu OFF-kan kembali.
4. Jika masih tidak bisa, coba pindahkan SIM card ke slot lain (SIM Card 1 ke 2 atau sebaliknya untuk HP dual SIM) atau coba ke HP lain untuk perbandingan.
5. Dicoba akses/cek secara berkala selama 1x24 jam khawatir gangguan sementara.
Semoga membantu :)`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak Ada Sinyal/Blankspot & Sinyal Lemah/Tidak Stabil

1. Nomor by.U :
2. Akun by.U :
3. Lokasi detail kendala (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
4. Tanggal dan waktu kejadian sejak kapan :
5. Nomor by.U lain yang berkendala sama :
6. Jenis device yang dipakai saat gangguan sinyal terjadi?
7. Kendala sinyal terjadi sepanjang hari atau pada waktu tertentu aja?
8. Kendala terjadi di satu lokasi atau semua lokasi?
9. Jaringan yang digunakan 2G, 4G, 5G?
10. Jumlah sinyal bar atau titik yang didapat?
11. Capture keterangan bar sinyal :
12. Nomor atau info kontak lain yang bisa dihubungi?



1x24 jam`   
},

{
id: 12,
case : "permintaan Ganti SIM Card active",
Solusi : `Makasih udah nunggu. Kak untuk permintaan ganti SIM Card, bisa dilakukan selama nomornya aktif ya. Silakan Kakak bisa lakukan prosesnya diApps by.U yaa, berikut cara melakukan permintaan ganti SIM Card-nya ya:
1. Pastiin Versi aplikasi sudah yang terbaru yaa
2. Log In ke apps by.U pake akun dari nomor by.U yang hilang/ rusak (bukan pakai nomor by.U)
3. Masuk Ke profil by.U pojok kiri atas
4. Scroll kebawah
5. Klik Ganti SIM Card
6. Ikuti proses prosedur ganti SIM Card
7. Tunggu proses validasi dari tim by.U
8. Kalo rikuesmu di terima, lanjutin prosesnya dan bisa Pilih Ambil (GraPARI)/Indomaret tanpa biaya pengambilan atau SIM Card diantar (Kurir JNE) dengan biaya Rp10.000 dan estimasi sampai makismal 7 hari kerja sesudah melakukan pembayaran.


Oke Kak, aku cek data-data yang Kakak infoin udah sesuai ya. Aku konfirmasi kembali, pada tanggal ${getCurrentDate()} Kakak mau dibantu Permintaan Ganti SIM Card Active dengan data :
1. Nomor by.U : xxxxxx
2. Email: xxxxxxx
3. NIK KTP valid : xxxxxxx
4. Nama & nomor penerima :
5. Alamat pengiriman :

Kalo data diatas udah sesuai, silakan konfirmasi kembali agar aku bisa segera bantu lebih lanjut ya :) 



`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Permintaan Ganti SIM Card Active

1. Nomor by.U :
2. Email registrasi by.U atau nomor HP jika registrasi by.U menggunakan nomor operator lain :
3. Nomor Identitas valid :
4. Scan/Foto KTP asli : 
5. Foto selfie dengan KTP asli : 
6. Nama & nomor penerima :
7. Alamat pengiriman (nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos) :

`   
},

{
id: 13,
case : "Miskoordinasi JNE (AWB)",
Solusi : `Makasih udah nunggu. Kak maaf, untuk kendala pengiriman SIM card nya di nomor xxxxx , aku cek ada kendala nih dari aplikasinya jadinya SIM card Kakak belum di kirimin. Boleh infoin data ini ya biar bisa aku proses : 
1. Email akun by.U :
2. Nama dan Nomor Penerima :
3. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) :
4. Capture pengecekan nomor resi di web tracking JNE : 
5. Konfirmasi dari JNE (jika Kakak sempat komplain ke JNE) :
`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Keluhan SIM Card Tidak Sampai via JNE ada AWB

1. Nomor by.U :
2. Email by.U :
3. Nama dan Nomor Penerima :
4. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) :
5. Capture pengecekan nomor resi di web tracking JNE : 
6. Konfirmasi dari JNE (jika customer sempat komplain ke JNE) : -



`   
},

{
id: 14,
case : "Miskoordinasi JNE ",
Solusi : "",
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Keluhan SIM Card Tidak Sampai via JNE tidak ada AWB

1. Nomor by.U :
2. Email by.U :
3. Capture bukti pembayaran : 
4. Nama Penerima :
5. Nomor Penerima :
6. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) :
        
`   
},

{
id: 15,
case : "IRENEW virtual account Paid ",
Solusi : "",
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Masalah Pembelian Kuota/Pulsa I RENEW Via VA

1. Nomor by.U :
2. Email by.U : 
3. Printscreen halaman bukti pembayaran : terlampir
4. Rincian Keluhan : kuota belum masuk
5. Order detail ID (CXO) (Pengecekan OperatorX) 
6. Transaction ID (CXT) (Pengecekan OperatorX)

pending payment
TRX ID : 
No VA :
paid
      
`   
},

{
id: 16,
case : "Penyalahgunaan NIK ",
Solusi : `Oke Kak, Aku konfirmasi kembali pada tanggal ${getCurrentDate()} kakak mau proses UNREGISTRASI nomor by.U yang bukan milik Kakak tetapi terdaftar dengan NIK Kakak dengan data berikut

Nomor by.U : xxxxx
NIK  : xxxxxxx
NOKK : xxxxxxxx

Silahkan dikonfirmasi ya kak, dengan membalas "benar" atau "setuju"`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Penyalahgunaan NIK

1. Email Aktif :
2. Nomor aktif lainnya yang bisa dihubungi :
3. Nomor Identitas KTP :
4. Nomor Kartu Keluarga :
5. Nomor by.U yang ingin di UNREGISTRASI : 
5. Capture SMS cek registrasi dari 4444 :

        
`   
},

{
id: 17,
case : "Irenew virtual account Unpaid ",
Solusi : "Makasih udah nunggu. Kak maaf untuk kendala transaksinya di nomor xxxx boleh infoin aku email akun by.U sama capture bukti pembayarannya ya biar bisa aku proses :)",
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Masalah Pembelian Kuota/Pulsa I RENEW Via Virtual Account

1. Nomor by.U :
2. Email by.U :
3. Bukti pembayaran yang tercantum waktu transaksinya : terlampir
4. Rincian Keluhan : kuota belum masuk, pembayaran berhasil
5. Order detail ID (CXO) (Pengecekan OperatorX) :
6. Transaction ID (CXT) (Pengecekan OperatorX) :
7. Norek :
8. Atas nama :
9. Cabang pembuka rekening refund :

TRX ID :
No VA : 
Unpaid
        
`   
},

{
id: 18,
case : "Permintaan Refund karena kesalahan sistem ",
Solusi : "",
Mandatory : `
[REFUND]
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Permintaan Refund karena kesalahan sistem

1.Nomor by.U :
2.Email by.U :
3.Capture bukti pembayaran :


`   
},

{
id: 19,
case : "Tidak Mendapatkan Kuota Monthversary  ",
Solusi : "",
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak Mendapatkan Kuota Monthversary 

1. MSISDN by.U :
2. Email akun by.U :
3. Kuota berapa bulan yang belum didapatkan (3, 6, 9, atau 12 bulan) :
4. Tanggal aktivasi nomor by.U :
5. Capture halaman Reward (Sudah dan Belum Terpakai) : Terlamp8ir
6. Bukti bayar (jika kendalanya pelanggan sudah bayar tapi belum menerima paket Monthiversary Reward) :-
7. Hasil pengecekan Add Ons di CRM (berupa text dan tidak boleh printscreen) :

        
`   
},

{
id: 20,
case : "SMS - Gagal Aktivasi M-Banking ",
Solusi : `Makasih udah nunggu. Kak maaf, untuk kendala fitur banking nya di nomor xxxxxx, pastiin cuma ada SIM Card by.U di hp saat aktivasi fitur banking tersebut dan terkoneksi dengan jaringan by.U. Kalau masih tidak bisa, boleh tolong infokan beberapa data berikut agar dapat dibantu pengecekan :
1. Email akun by.U :
2. Rincian keluhan :
3. Tipe HP :
4. Capture dashboard apps :
5. Capture kirim atau terima SMS ke nomor lain berhasil :
6. Capture keterangan gagal aktivasi fitur banking :

`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
SMS - Gagal Aktivasi M-Banking

1. Nomor by.U :
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
case : "IRENEW OVO/DANA/ShopeePay ",
Solusi : `Makasih udah nunggu. Kak maaf untuk kendala transaksinya di nomor xxxx boleh infoin aku email akun by.U sama capture bukti pembayarannya ya biar bisa aku proses :)`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Masalah Pembelian Kuota/Pulsa I RENEW Via 

1. Nomor by.U :
2. Email by.U :
3. Capture bukti pembayaran :
4. Order detail ID (CXO) (Pengecekan OperatorX)  : 
5. Transaction ID (CXT) (Pengecekan OperatorX) :
6. Rincian Keluhan : kuota/pulsa belum masuk
  
`   
},

{
id: 22,
case : "Tidak Bisa Aktivasi SIM Card Legacy ",
Solusi : `Makasih udah nunggu. Kak maaf untuk kendala gabisa aktivasi/registrasi di nomor xxxxx, aku cek nomornya belum kedaftar di sistem nih yang artinya belum di aktivasi. Kalau nomornya udah sesuai dengan yang di bagian depan bungkus SIM card, coba Kakak lakukan aktivasi lagi dengan pasang hanya 1 SIM card by.U saja yang ingin di aktivasi terus pasang di slot SIM 1 ya kak. Kakak bisa juga aktivasi lewat *444# atau SMS ketik REG (spasi) NIK#NoKK# kirim ke 4444. Kalau masih gabisa Kakak bisa infoin ke aku data ini :
1. NIK & NOKK :
2. Capture Gagal Aktivasi
3. SN barcode yang ada di cangkang SIM Card
4. CP dan Email yang bisa dihubungi`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak Bisa Aktivasi SIM Card Legacy

1. Nomor by.U :
2. Capture berhasil aktivasi via SMS :
3. Nomor Identitas KTP :
4. Nomor Kartu Keluarga :
5. CP dan Email yang bisa dihubungi :
6. SN barcode yang ada di cangkang SIM Card :
7. Order ID CXT/CXO (Pengecekan OperatorX) :
8. Keterangan pengecekan :
        
`   
},

{
id: 23,
case : "Cara Aktivasi SIM card Digital ",
Solusi : `Aku bantu infoin untuk cara aktivasinya Kakak bisa coba cara berikut ya Kak:
1. Buka apps, lalu login dengan menggunakan akun yang digunakan pada saat pemesanan kartu by.U > klik tombol aktifin SIM Card,
2. Pastiin SIM Card di HP hanya ada SIM by.U,
3. Pastiin settingan HP jaringan internet terkoneksi ke jaringan by.U,
4. Saat masukkan NIK dan No.KK pastikan sudah sesuai, cek secara manual kembali ya.
5. Pastiin saat masukkan NIK dan no.KK pakai jaringan by.U aja yang ingin di aktivasi ya
Semoga berhasil ya Kak, kalau berkendala bisa Kakak coba aktivasi via web byu.id/aktivasi dan bisa gunakan jaringan lain untuk perbandingan ya Kak.`,
Mandatory : `

`   
},

{
id: 24,
case : "Tidak bisa internet",
Solusi : `
Kak makasih udah nunggu. Maaf nih untuk kendala internet nya di nomor xxxxx , boleh infoin data ini ya biar bisa aku cek : 
1. Email akun by.U :
2. Lokasi detail kendala (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
3. Tanggal dan waktu kendala :
4. Kendala terjadi di beberapa aplikasi (ya/tidak) :
5. Capture setting APN di HP :


Makasih udah nunggu. Kak maaf, aku cek nomor xxxx aktif, punya kuota dan lokasi Kakak ga ada masalah nih. Boleh coba panduan ini ya :
1. Ubah mode jaringan dari otomatis ke manual 2g only, kemudian kembalikan lagi ke mode otomatis
2. Lakukan refresh jaringan :
Android : pada menu mobile networks, pilih operator lain terlebih dahulu, kemudian pilih by.U (Telkomsel).
iOS : pilih menu Settings, pilih General, klik Reset dan Reset Network Setting
3. Coba ON-kan airplane mode dan OFF-kan kembali, OFF-kan mobile data dan ON-kan kembali.
4. Isi APN dengan "byu", username dan password kosongkan.
5. Jika masih tidak bisa, coba pindahkan SIM card ke slot lain (SIM Card 1 ke 2 atau sebaliknya untuk HP dual SIM) atau ke HP lain untuk perbandingan.`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak Bisa akses internet

1. Nomor by.U :
2. Akun by.U :
3. Lokasi detail (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) :
4. Jenis device yang digunakan :
5. Tanggal dan waktu kendala :
6. Kendala terjadi sepanjang hari atau pada waktu tertentu aja :
7. Jaringan yang digunakan apa? 4G,5G? 
8. Jumlah sinyal bar yang didapat :
9. Capture tidak bisa akses internet :
10. Nomor atau info kontak lain yang bisa dihubungi :
11. Sisa kuota yang dimiliki oleh pelanggan :


        
`   
},

{
id: 25,
case : "Tidak Bisa Aktivasi SIM Card Digital indikasi SIM Card SN Legacy (indomaret)",
Solusi : ``,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak Bisa Aktivasi SIM Card Digital indikasi SIM Card SN Legacy

1. Nomor by.U : 
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
Solusi : `Makasih udah nunggu ya Kak. Maaf banget nih untuk kendala aktivasi SIM card nya di nomor xxxxxx, Kalau sudah mencoba lagi dan masih tidak bisa, boleh diinfokan beberapa data berikut ya supaya kami bisa melakukan pengecekan lebih lanjut :
1. Akun by.U :
2 NIK :
3. NOKK :
4. Serial Number di cangkang SIM Card :
5. Capture gagal aktivasi SIM Card :

Sekali lagi mohon maaf, jika sudah ketemu solusinya akan segera dikabari ya Kak. Makasih banyak masih mau tetap bersabar dan setia support by.U!`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak Bisa Aktivasi SIM Card Dengan Kode Error "Asset Not Found" 

1. Akun by.U :
2. Nomor by.U :
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
Solusi : `Makasih udah nunggu. Kak maaf untuk kendala penggunaan kuota yang ga sesuai di nomor xxxxx, boleh infoin data ini ya biar bisa aku proses :
1. Email akun by.U:
2. Tanggal waktu kejadian :
3. Lokasi Kejadian ( Cukup Kec, Kabupaten atau Kota ) :
4. Tipe hp/gadget :
5. Paket yang dikeluhkan :
6. Jumlah kuota awal dan kuota akhir :
7. Capture data usage :
8. Capture dashboard apps by.U (yang ada detail pemakaian Data) : 
`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Ketidaksesuaian Penggunaan Kuota 

1. Nomor by.U :
2. Email :
3. Tanggal waktu kejadian :
4. Lokasi Kejadian ( Cukup Kec, Kabupaten atau Kota ) :
5. Tipe hp/gadget :
6. Paket yang dikeluhkan :
7. Jumlah kuota awal dan kuota akhir :
8. Capture data usage :
9. Capture dashboard apps by.U :
10. Apakah customer pernah mencoba di gadget lain dan mengalami masalah yang sama? TIDAK
11. Apakah ada VPN dsb di gadget customer? TIDAK
        
`   
},

{
id: 28,
case : "Tidak bisa login dengan Nomor BYU / terima kode OTP pakai nomor by.U",
Solusi : `
Makasih udah nunggu. Kak maaf untuk kendala gabisa login apps by.U, jika SIM Card dan aplikasi by.U berada di gadget yang sama dan menggunakan jaringan by.U, seharusnya login akan terjadi otomatis, kecuali jika tidak ada koneksi. Jika memang diperlukan login manual, boleh dipastikan bahwa OS gadget yang Kakak pake adalah OS yang terupdate dan pastikan juga koneksi internetnya berjalan dengan baik. Dicoba ON-kan airplane mode beberapa saat, kemudian OFF-kan kembali. Kalau masih ga bisa, dicoba install ulang aplikasi by.U kakak dan di cek juga di HP lain sebagai perbandingan ya :) Pastiin setting dengan memilih menu Setting > pilih manager aplikasi > all > messaging > send premium sms > always allow dan pastikan juga untuk nomor pusat sudah diisi dengan angka +6281100000 disettingan sms HP ya, karena kalau belum disetting itu akan berpengaruh terhadap diterimanya OTP.
Kakak bisa juga coba login menggunakan email akun by.U ya :) Semoga membantu :)`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak bisa login dengan Nomor BYU 

1. Email dan nomor by.U :
2. Tipe/merek Gadget :
3. Versi OS Gadget :
4. Versi aplikasi by.U :
5. Screen record dari awal masuk aplikasi by.U hingga muncul notifikasi error dengan koneksi yang sama atau menggunakan wifi/ jaringan lain :
6. Hari dan Tanggal waktu terjadi keluhan :
7. Penjelasan keluhan pelanggan :
8. Lokasi Pelanggan :
        
`   
},

{
id: 29,
case : "Tidak Mendapatkan Voucher Non-Telco",
Solusi : ``,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak Mendapatkan Voucher Non-Telco

1. Nomor by.U :
2. Email by.U :
3. Jenis voucher yang ditukarkan :
4. Tanggal penukaran U-Coin :
5. Capture bukti redeem di halaman Reward Saya :
6. Capture kendala penukaran : 
        
`   
},

{
id: 30,
case : "Pergantian SIM Card Legacy ditolak GraPARI",
Solusi : ``,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Pergantian SIM Card Legacy ditolak GraPARI

1.Nama Pelanggan :
2. Nomor dan email by.U :
3. Email aktif dan nomor lain yang bisa dihubungi :
4. Tanggal dan hari mengunjungi GraPARI :
5. Nama GraPARI :
6. Lokasi GraPARI : (Nama dan nomor Jalan, Kelurahan, Kecamatan, Kota/Kabupaten, Provinsi)
7. Detail alasan ditolak :
8. NIK KTP Valid :
9. Foto KTP :
10. Foto selfie KTP :
11. Alasan ganti SIM Card : SIM Card Hilang
        
`   
},

{
id: 31,
case : "Esim Sinyal hilang",
Solusi : ``,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
eSIM sinyal hilang

1. Nomor by.U :
2. Akun by.U :
3. Tipe/Merek Gadget :
4. Nomor yang bisa dihubungi :
5. Email yang bisa dihubungi : 
6. Capture Sinyal :
7. Capture settingan eSIM di handphone :
8. Capture bukti pembayaran : 
9. Order ID CXT/CXO (Pengecekan OperatorX):
        
`   
},

{
id: 32,
case : "eSIM  QR tidak tersimpan ",
Solusi : ``,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
eSIM  QR tidak tersimpan 

1. Nomor by.U :
2. Akun by.U :
3. Nomor yang bisa dihubungi :
4. Email yang bisa dihubungi :
5. Bukti pembayaran :
6. Keterangan gagal : (KHUSUS APABILA QR YANG DIMILIKI PELANGGAN TIDAK VALID)
7. Order ID CXT/CXO (Pengecekan OperatorX) :
        
`   
},

{
id: 33,
case : "Bugs Ganti SIM card (mandatory E)",
Solusi : ``,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Bugs Ganti SIM card

1. Nomor by.U :
2. Email by.U :
3. Nomor Identitas KTP :
4. Scan/Foto KTP Asli :
5. Foto selfie dengan KTP Asli :
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
Solusi : `Makasih udah nunggu. Kak maaf untuk kendala gabisa internet di luar negeri di nomor xxxxxx ,boleh infoin data ini ya biar bisa aku cek :
1. Email akun by.U :
2. Tanggal dan waktu kejadian sejak kapan :
3. Jaringan/operator negara setempat yang digunakan :
4. Capture speedtest :
5. Capture setting APN di HP :
6. Lokasi negara :

Makasih udah nunggu. Kak aku cek nomor xxxxx aktif  dan punya kuota roaming, serta kondisi jaringan di xxxxxx tidak ada info gangguan. Bisa dicoba langkah-langkah ini ya kak :
1. Coba ON-kan airplane mode dan OFF-kan kembali, OFF-kan mobile data dan ON-kan kembali.
2. Lakukan refresh jaringan :
3. Android : pada menu mobile networks, pilih operator lain terlebih dahulu, kemudian pilih operator yang bekerja sama dengan Telkomsel, yaitu xxxxxxx
4. iOS : pilih menu Settings, pilih General, klik Reset dan Reset Network Setting
5. Isi APN dengan "byu", username dan password kosongkan.
6.Jika masih tidak bisa, coba pindahkan SIM card ke slot lain (SIM Card 1 ke 2 atau sebaliknya untuk HP dual SIM) atau ke HP lain untuk perbandingan.

Jika cara di atas sudah dicoba dan akses internet tetap bermasalah, tolong hubungi kita lagi. Terima kasih`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
DATA - Tidak Bisa Akses Internet di Luar Negeri

1. Akun dan nomor by.U :
2. Lokasi negara :
3. Nama Paket Roaming :
4. Jenis device yang digunakan :
5. Tanggal dan waktu kendala :
6. Jaringan yang digunakan apa? 4G, 5G? :
7. Jumlah sinyal bar atau titik yang didapat? :
8. Jaringan/operator negara setempat yang digunakan :
9. Email aktif yang bisa dihubungi :
10. Sisa kuota yang dimiliki oleh pelanggan :
11. Capture speedtest :
12. Capture APN :
        
`   
},

{
id: 35,
case : "Tidak bisa aktivasi NIK invalid",
Solusi : `Makasih udah nunggu Kak. Maaf nih untuk kendala aktivasinya, aku cek nomor xxxx gabisa aktivasi karena NIK nya ga valid yang artinya  NIK nya ga terdaftar nih di sistem Dukcapil. Kakak bisa hubungi pihak Dukcapil dulu ya biar NIK Kakak bisa digunakan untuk aktivasi SIM card nya :)`,
Mandatory : `
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak bisa aktivasi NIK invalid

1. Akun by.U :
2. Nomor by.U :
3. Data identitas :
4. NOKK :
5. Serial Number di cangkang SIM Card :
6. Capture gagal aktivasi SIM Card
7. Capture bukti dari dukcapil bahwa data sudah update
8. Order ID CXT/CXO (Pengecekan OperatorX)


        
`   
},

{
id: 36,
case : "Tidak bisa aktivasi inject paket",
Solusi : `Makasih udah nunggu Kak maaf kalau keterangan gabisa aktivasinya seperti itu, Kakak bisa tukerin SIM card nya di tempat Kakak beli/dapetin SIM card nya ya`,
Mandatory : `       
`   
},

{
id: 37,
case : "Tidak bisa aktivasi NIK invalid Dukcapil",
Solusi : `Makasih udah nunggu. Kak maaf untuk gabisa aktivasi SIM card nya di nomor xxxx, aku cek NIK Kakak ga terdaftar nih di sistem Dukcapil, Boleh pastiin lagi NIK yang diinputnya sesuai yang di KTP dan pastiin ada 16 digit ya Kak. Kalo masih berkendala dikhawatirkan ada error data dukcapil. Untuk kendala ini silakan kakak bisa update data ke Contact Center Ditjen Dukcapil. Bilang aja mau update data registrasi SIM Card ya.
Berikut kontak detailnya dukcapil :
Hotline : 1500537
WA : 08118005373
SMS : 08118005373
Email : callcenter.dukcapil@gmail.com`,
Mandatory : `       
`   
},

{
id: 38,
case : "Tidak bisa aktivasi exceed limit (udah 3 kali percobaan)",
Solusi : `Makasih udah nunggu. Kak maaf aku cek di nomor xxxxxxx , hari ini udah lebih dari 3 kali nyoba aktivasi. Boleh dicoba lagi besok hari ya. Pastiin saat proses aktivasi sudah terkoneksi ke jaringan by.U - bukan wifi atau jaringan lain, dan NIK-NO.KK yang dimasukkan benar 16 angka. Kalo besok masih belum bisa, jangan coba berulang ya, silahkan konfirmasi lagi biar bisa langsung di proses :)`,
Mandatory : `       
`   
},

{
id: 39,
case : "Tidak bisa aktivasi maximum NIK",
Solusi : `Makasih udah nunggu ya Kak, mengenai kendala gagal daftar NIK-NOKK di nomor xxx. Setelah kami cek di sistem rupanya NIK kakak sudah terdaftar di 3 Nomor Telkomsel/ by.U. Untuk case seperti ini jika kakak masih memegang nomor Telkomsel (selain by.U), bisa melakukan unregistrasi sendiri melalui SMS UNREG#NO NIK kirim ke 4444 atau melalui *444#. Jika kakak tidak merasa memiliki 3 Nomor Telkomsel, bisa menghubungi Call Center Telkomsel atau datang ke Grapari agar bisa disolusikan. Jika sudah melakukan UNREG atau melaporkan ke pihak Telkomsel, bisa dicoba lagi pendaftaran NIK-NOKK-nya ya, Kak. Maaf banget, semoga bisa ya Kak 😊


Untuk mengecek nomor yang terdaftar di NIK nya kalau kakak punya nomor Telkomsel yang data NIK nya sama juga, silakan bisa cek di *444# pilih cek status registrasi ya Kak :)


Makasih udah nunggu. Kak maaf kalau udah unreg tapi masih gabisa aktivasi SIM card nya, boleh infoin data ini ya  :
* NIK :
* NOKK :
* Serial Number di cangkang SIM Card :
* Capture gagal aktivasi SIM Card :
* Capture bukti sudah melakukan unregistrasi

Sekali lagi mohon maaf, jika sudah ketemu solusinya akan segera dikabari ya Kak. Makasih banyak masih mau tetap bersabar dan setia support by.U!
`,
Mandatory : `  
#Pelangganbyu
[byU igdm] 
NamaPelanggan
${getCurrentDateTime()} 
Tidak Bisa Aktivasi SIM Card Dengan Keterangan Maximum Number

1. Akun by.U :
2. Nomor by.U :
3. Nomor identitas KTP :
4. NOKK :
5. Serial Number di cangkang SIM Card :
6. Capture gagal aktivasi SIM Card :
7. Capture bukti sudah melakukan unregistrasi :
8. Order ID CXT/CXO (Pengecekan OperatorX) :
`   
},


]
return Mandatory
}

