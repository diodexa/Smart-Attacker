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
        LC ${getCurrentDateTime()} <br/>
        Internet Lambat <br/> <br/>
        
        1. Nomor dan email by.U : <br/>
        2. Lokasi detail (nama jalan, RT/RW, kelurahan, kecamatan, kabupaten/kota, kode pos, patokan lokasi dan titik koordinat) : <br/>
        3. Jenis device yang digunakan : <br/>
        4. Tanggal dan waktu kendala : <br/>
        5. Kendala terjadi sepanjang hari atau pada waktu tertentu aja? : <br/>
        6. Jaringan yang diterima (2G, 4G, atau 5G) dan jumlah bar/titik sinyal yang didapat? : <br/>
        7. Capture hasil speedtest : <br/>
        8. Nomor atau info kontak lain yang bisa dihubungi : <br/>
        9. Sisa kuota yang dimiliki oleh pelanggan : <br/><br/><br/>
        3x24 jam` 
    },
    {
        id: 2,
        case : "Error Lain",
        Mandatory : `
        LC ${getCurrentDateTime()} <br/>
        Tidak bisa aktivasi Error Lain <br/><br/>

        1. Nomor by.U : <br/>
        2. Email by.U : <br/>
        3. Nomor Identitas KTP valid : <br/>
        4. NOKK : <br/>
        5. Serial Number di cangkang SIM Card : <br/>
        6. Capture gagal aktivasi : <br/><br/><br/>
        1x24 jam`
    },
    {
        id: 3,
        case : "Bugs Lain",
        Mandatory : `
        LC ${getCurrentDateTime()} <br/>
        Bugs Lain <br/><br/>

        1. Email by.U : <br/>
        2. Nomor by.U : <br/>
        3. Tipe/merek Gadget : <br/>
        4. Versi OS Gadget : <br/>
        5. Versi aplikasi by.U : <br/>
        6. Apakah bisa akses website byu.id di device yang sama menggunakan jaringan by.U atau jaringan lain? YA <br/>
        7. Screen recorder dari awal masuk aplikasi by.U hingga muncul notifikasi error : <br/>
        8. Waktu dan Lama Kejadian : <br/>
        9. Lokasi Kejadian : <br/> `   
    },
    {
        id: 4,
        case : "Bugs Ganti Sim Card",
        Mandatory : `
        LC ${getCurrentDateTime()} <br/>
        Bugs Ganti Sim Card <br/><br/>

        1. Email by.U : <br/>
        2. Nomor by.U : <br/>
        3. Tipe/merek Gadget : <br/>
        4. Versi OS Gadget : <br/>
        5. Versi aplikasi by.U : <br/>
        6. Detail keluhan yang disampaikan customer apakah bisa akses menggunakan wifi/jaringan lain : YA <br/>
        7. Screen recorder dari awal masuk aplikasi by.U hingga muncul kendalanya seperti apa :  <br/>
        8. Waktu dan Lama Kejadian : <br/>`   
    },

]
return Mandatory
}

