const getMonth = (callback) => {                                                        // membuat function getMonth yang menerima parameter callback
    setTimeout(() => {                                                                  // membuat fungsi setTimeOut yang akan mengeksekusi program yang ada di dalamnya setelah waktu yang di tentukan
        let error = false                                                               // membuat variable error yang berisi nilai false                       
        let month = ["Januari", "Februari", "Maret", "April",                           // membuat variable month yang berisi nama-nama bulan dalam array
                      "Mei", "Juni", "Juli", "Agustus", "September",
                      "Oktober", "November", "Desember"]
        if(!error){                                                                     // jika "true" maka akan memanggil callback dan mengirimkan parameter nilai null, dan variable month
            callback(null, month)
        }else{                                                                          // jika "false" maka akan memanggil callback dan mengirim parameter new Error dan array kosong
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);                                                                           // mengeksekusi program setelah 4 detik
}


const showMonth = (error, month) => {                                                   // membuat fungsi showMonth yang menerima parameter error dan month
    if(error){                                                                          // jika parameter error berisi nilai null maka nama-nama bulan dalam array akan di map dan di tampilkan 
        console.log(error.message, month)
    }else{                                                                              // jika parameter error tidak berisi nilai null tapi berisi error, maka akan menampilkan pesan error berserta array kosong
        console.log(month.map(eachMonth => eachMonth))                                  // di tampilkan dalam bentuk array
    }
}

getMonth(showMonth)                                                                     // memanggil fungsi getMOnth dan mengirim fungsi showMonth sebagai callback