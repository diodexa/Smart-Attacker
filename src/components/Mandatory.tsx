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

    const Mandatory = [{ 
        id: 1 ,
        case : "Internet Lambat",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Internet Lambat  
        
        1. Nomor dan email by.U : 
        2. Lokasi detail (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) : 
        3. Jenis device yang digunakan : 
        4. Tanggal dan waktu kendala : 
        5. Kendala terjadi sepanjang hari atau pada waktu tertentu aja? : 
        6. Jaringan yang diterima (2G, 4G, atau 5G) dan jumlah bar/titik sinyal yang didapat? : 
        7. Capture hasil speedtest : terlampir
        8. Nomor atau info kontak lain yang bisa dihubungi : 
        9. Sisa kuota yang dimiliki oleh pelanggan : 
        
        Ticket by Dio Deska

        3x24 jam` 
    },
    {
        id: 2,
        case : "Error Lain",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Tidak bisa aktivasi Error Lain 

        1. Nomor by.U : 
        2. Email by.U : 
        3. Nomor Identitas KTP valid : 
        4. NOKK : 
        5. Serial Number di cangkang SIM Card : 
        6. Capture gagal aktivasi :  terlampir
        
        Ticket by Dio Deska

        1x24 jam`
    },
    {
        id: 3,
        case : "Bugs Lain",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
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
        
        Ticket by Dio Deska
         `   
    },
    {
        id: 4,
        case : "Bugs Ganti Sim Card",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Bugs Ganti Sim Card 

        1. Email by.U : 
        2. Nomor by.U : 
        3. Tipe/merek Gadget : 
        4. Versi OS Gadget : 
        5. Versi aplikasi by.U : 
        6. Detail keluhan yang disampaikan customer apakah bisa akses menggunakan wifi/jaringan lain : YA 
        7. Screen recorder dari awal masuk aplikasi by.U hingga muncul kendalanya seperti apa :  
        8. Waktu dan Lama Kejadian : 
        
        Ticket by Dio Deska
        `   
    },
    {
        id: 5,
        case : "Tidak bisa Kirim/Terima SMS",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Tidak bisa kirim / Terima SMS 

        1. Email dan nomor by.U :
        2. Printscreen dashboard di apps dan keterangan sinyal : terlampir
        3. Waktu dan Lama Kejadian :
        4. Tipe gadget yang dipakai :
        5. Keterangan gagal yang muncul saat menerima atau mengirim SMS :
        6. Kendala yang terjadi tidak bisa terima SMS, kirim SMS atau keduanya? :
        7. Kendala terjadi hanya saat menerima SMS atau mengirim SMS ke nomor tertentu atau semua? :
        8. Nomor lain yang bisa dihubungi : 
        
        Ticket by Dio Deska
        
        1x24 jam`   
    },
    {
        id: 6,
        case : "Panggilan Telepon Masuk / Telepon Keluar",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Tidak bisa melakukan panggilan on-net & off-net

        1. Email dan nomor by.U :
        2. Printscreen dashboard di apps dan keterangan sinyal : terlampir
        3. Waktu dan Lama Kejadian :
        4. Tipe HP yang dipakai :
        5. Keterangan error yang muncul saat telepon :
        6. Kendala terjadi hanya saat menerima panggilan, melakukan panggilan, atau keduanya :
        7. Kendala terjadi hanya ke nomor tertentu atau semua nomor :
        8. Nomor lain yang bisa dihubungi : 
        
        Ticket by Dio Deska
        
        1x24 jam`   
    },
    {
        id: 7,
        case : "Tidak bisa request OTP Meta Product",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        TIDAK BISA REQUEST OTP META PRODUCT

        1. Email by.U :
        2. Nomor by.U :
        3. Waktu Kejadian :
        4. Nomor lain yang bisa dihubungi :
        5. Tipe gadget yang digunakan :
        6. Capture dashboard di apps dan keterangan sinyal : terlampir
        7. Keterangan gagal yang muncul saat melakukan request/menerima OTP :
        
        Ticket by Dio Deska
        
        1x24 jam`   
    },
    {
        id: 8,
        case : "Unreg hapus NIK",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Permintaan Deaktivasi SIM Card dan Hapus NIK

        1. Email by.U :
        2. Nomor by.U :
        3. Nomor Identitas KTP :
        4. Alasan tidak ingin menggunakan by.U lagi :
        5. Nomor Kartu Keluarga :
        6. Foto KTP : terlampir
        7. Foto Selfie dengan KTP : terlampir
        
        Ticket by Dio Deska
        
        1x24 jam`   
    },
    {
        id: 9,
        case : "Unreg hapus NIK lupa nomor",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Permintaan Deaktivasi SIM Card dan Hapus NIK

        1. Nomor by.U :
        2. Email by.U :
        3. Nomor KTP :
        4. Alasan tidak ingin menggunakan by.U lagi :
        5. Nomor Kartu Keluarga :
        6. Foto identita :
        7. Foto Selfie KTP : 
        8. Capture hasil pengecekan dari *444# : terlampir
        9. CP yang bisa dihubungi :
        
        Ticket by Dio Deska
        
        1x24 jam`   
    },
    {
        id: 10,
        case : "Gagal Aktivasi eSIM Account Status Tidak Sesuai",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Gagal Aktivasi eSIM Account Status Tidak Sesuai

        1.Email by.U :
        2.Nomor by.U :
        3.Nomor yang bisa dihubungi :
        4.Email yang bisa dihubungi :
        5.Capture gagal aktivasi di apps : terlampir
        
        Ticket by Dio Deska
        
        1x24 jam`   
    },
    {
        id: 11,
        case : "Sinyal",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Tidak Ada Sinyal/Blankspot & Sinyal Lemah/Tidak Stabil

        1. Nomor by.U :
        2. Email by.U :
        3. Lokasi detail kendala (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) saat berkendala :
        4. Tanggal dan waktu kejadian sejak kapan :
        5. Nomor by.U lain yang berkendala sama :
        6. Jenis device yang dipakai saat gangguan sinyal terjadi :
        7. Kendala sinyal terjadi sepanjang hari atau pada waktu tertentu aja :
        8. Kendala terjadi di satu lokasi atau semua lokasi :
        9. Jaringan yang digunakan 2G, 4G, 5G :
        10. Jumlah sinyal bar atau titik yang didapat :
        11. Nomor atau info kontak lain yang bisa dihubungi :
        
        Ticket by Dio Deska
        
        1x24 jam`   
    },
    {
        id: 12,
        case : "Ganti SIM Card",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Permintaan Ganti SIM Card Active

        1. Nomor by.U :
        2. Email registrasi by.U atau nomor HP jika registrasi by.U menggunakan nomor operator lain :
        3. Nomor Identitas valid :
        4. Scan/Foto KTP asli : terlampir
        5. Foto selfie dengan KTP asli : terlampir
        6. Nama & nomor penerima :
        7. Alamat pengiriman (nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos) :
        
        Ticket by Dio Deska
        
        `   
    },
    {
        id: 13,
        case : "Miskoordinasi JNE (AWB)",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Keluhan SIM Card Tidak Sampai via JNE ada AWB

        1. Nomor by.U :
        2. Email by.U :
        3. Nama dan Nomor Penerima :
        4. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) :
        5. Capture pengecekan nomor resi di web tracking JNE : terlampir
        6. Konfirmasi dari JNE (jika customer sempat komplain ke JNE) : -
        
        Ticket by Dio Deska
        
        `   
    },
    {
        id: 14,
        case : "Miskoordinasi JNE ",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Keluhan SIM Card Tidak Sampai via JNE tidak ada AWB

        1. Nomor by.U :
        2. Email by.U :
        3. Capture bukti pembayaran : terlampir
        4. Nama Penerima :
        5. Nomor Penerima :
        6. Alamat pengiriman & Kode Pos (Nama Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kabupaten/Kota, Patokan lokasi dan Kode Pos) :
        
        Ticket by Dio Deska
                
        `   
    },
    {
        id: 15,
        case : "IRENEW virtual account Paid ",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Masalah Pembelian Kuota/Pulsa I RENEW Via

        1. Nomor by.U :
        2. Email by.U : 
        3. Printscreen halaman bukti pembayaran : terlampir
        4. Rincian Keluhan : kuota belum masuk

        pending payment
        BSS : 
        TRX ID : 
        No VA :

        Ticket by Dio Deska
                
        `   
    },
    {
        id: 16,
        case : "Penyalahgunaan NIK ",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Penyalahgunaan NIK

        1. Email Aktif :
        2. Nomor aktif lainnya yang bisa dihubungi :
        3. Nomor Identitas KTP :
        4. Nomor Kartu Keluarga :
        5. Nomor by.U yang ingin di UNREGISTRASI : 
        5. Capture SMS cek registrasi dari 4444 :

        Ticket by Dio Deska
                
        `   
    },
    {
        id: 17,
        case : "Irenew virtual account Unpaid ",
        Mandatory : `
        IGDM ${getCurrentDateTime()} 
        Masalah Pembelian Kuota/Pulsa I RENEW Via Virtual Account

        1. Nomor by.U
        2. Email by.U
        3. Bukti pembayaran yang tercantum waktu transaksinya : terlampir
        4. Rincian Keluhan : kuota belum masuk, pembayaran berhasil
        5. Norek :
        6. Atas nama :
        7. Cabang pembuka rekening refund :

        TRX ID :
        No VA : 
        Unpaid

        Ticket by Dio Deska
                
        `   
    },
    {
        id: 18,
        case : "Permintaan Refund karena kesalahan sistem ",
        Mandatory : `
        [REFUND]
        IGDM ${getCurrentDateTime()} 
        Permintaan Refund karena kesalahan sistem

        1.Nomor by.U :
        2.Email by.U :
        3.Capture bukti pembayaran :

        Ticket by Dio Deska
                
        `   
    },

]
return Mandatory
}

