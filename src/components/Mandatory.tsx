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
        LC ${getCurrentDateTime()} 
        Internet Lambat  
        
        1. Nomor dan email by.U : 
        2. Lokasi detail (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) : 
        3. Jenis device yang digunakan : 
        4. Tanggal dan waktu kendala : 
        5. Kendala terjadi sepanjang hari atau pada waktu tertentu aja? : 
        6. Jaringan yang diterima (2G, 4G, atau 5G) dan jumlah bar/titik sinyal yang didapat? : 
        7. Capture hasil speedtest : 
        8. Nomor atau info kontak lain yang bisa dihubungi : 
        9. Sisa kuota yang dimiliki oleh pelanggan : 

        3x24 jam` 
    },
    {
        id: 2,
        case : "Error Lain",
        Mandatory : `
        LC ${getCurrentDateTime()} 
        Tidak bisa aktivasi Error Lain 

        1. Nomor by.U : 
        2. Email by.U : 
        3. Nomor Identitas KTP valid : 
        4. NOKK : 
        5. Serial Number di cangkang SIM Card : 
        6. Capture gagal aktivasi : 

        1x24 jam`
    },
    {
        id: 3,
        case : "Bugs Lain",
        Mandatory : `
        LC ${getCurrentDateTime()} 
        Bugs Lain 

        1. Email by.U : 
        2. Nomor by.U : 
        3. Tipe/merek Gadget : 
        4. Versi OS Gadget : 
        5. Versi aplikasi by.U : 
        6. Apakah bisa akses website byu.id di device yang sama menggunakan jaringan by.U atau jaringan lain? YA 
        7. Screen recorder dari awal masuk aplikasi by.U hingga muncul notifikasi error : 
        8. Waktu dan Lama Kejadian : 
        9. Lokasi Kejadian :  `   
    },
    {
        id: 4,
        case : "Bugs Ganti Sim Card",
        Mandatory : `
        LC ${getCurrentDateTime()} 
        Bugs Ganti Sim Card 

        1. Email by.U : 
        2. Nomor by.U : 
        3. Tipe/merek Gadget : 
        4. Versi OS Gadget : 
        5. Versi aplikasi by.U : 
        6. Detail keluhan yang disampaikan customer apakah bisa akses menggunakan wifi/jaringan lain : YA 
        7. Screen recorder dari awal masuk aplikasi by.U hingga muncul kendalanya seperti apa :  
        8. Waktu dan Lama Kejadian : `   
    },
    {
        id: 5,
        case : "Tidak bisa Kirim/Terima SMS",
        Mandatory : `
        LC ${getCurrentDateTime()} 
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
        Mandatory : `
        LC ${getCurrentDateTime()} 
        Tidak bisa melakukan panggilan on-net & off-net

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
        id: 7,
        case : "Tidak bisa request OTP Meta Product",
        Mandatory : `
        LC ${getCurrentDateTime()} 
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
        Mandatory : `
        LC ${getCurrentDateTime()} 
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
        Mandatory : `
        LC ${getCurrentDateTime()} 
        Permintaan Deaktivasi SIM Card dan Hapus NIK

        1. Nomor by.U :
        2. Email by.U :
        3. Nomor KTP :
        4. Alasan tidak ingin menggunakan by.U lagi :
        5. Nomor Kartu Keluarga :
        6. Foto identita :
        7. Foto Selfie KTP : 
        8. Capture hasil pengecekan dari *444# :
        9. CP yang bisa dihubungi :
        
        1x24 jam`   
    },
    {
        id: 10,
        case : "Gagal Aktivasi eSIM Account Status Tidak Sesuai",
        Mandatory : `
        LC ${getCurrentDateTime()} 
        Gagal Aktivasi eSIM Account Status Tidak Sesuai

        1.Email by.U :
        2.Nomor by.U :
        3.Nomor yang bisa dihubungi :
        4.Email yang bisa dihubungi :
        5.Capture gagal aktivasi di apps :
        
        1x24 jam`   
    },

]
return Mandatory
}

