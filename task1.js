const cekHariKerja = (day) => {                                                                         // membuat function yg menerima parameter hari
    return new Promise ((resolve, reject) => {                                                          // function akan mereturn promise yang berisi satu fungsi "callback". dan fungsi callback tersebut mempunyai dua parameter "resolve" dan "reject" 
        setTimeout(() => {                                                                              // membuat fungsi setTimeOut yang akan menjalankan proses di dalamnya setelah waktu yang di tentukan
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]                               // membuat variable dataDay yang berisi array nama-nama hari
            let cek = dataDay.find((item) => {                                                          // melooping array menggunakan properti find
                return item === day                                                                     // membandingkan hari yang ada di array dengan hari yang di passing di parameter. jika return adalah true maka variable "cek" akan berisi string nama hari, jika false maka variable "cek" akan berisi nilai undefined
            })
            if(cek){                                                                                    // variable "cek" berisi "string" yang termasuk ke dalam truthy                                                                             
                resolve(cek)                                                                            // jika true maka akan memanggil callback "resolve" dengan mengirim parameter cek yang berfungsi untuk menghandle proses promise yang sukses                                                                          
            }else{
                reject(new Error("Hari ini bukan hari kerja"))                                          // jika false maka akan memanggil callback "reject" dengan mengirim parameter new Error beserta message di dalamnya yang berfungsi untuk menghandle proses promise yang gagal
            }
        }, 3000);                                                                                       // menentukan waktu eksekusi program. jadi setelah 3 detik program baru akan di eksekusi
    })
}





const days = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]                          // membuat variable days yang berisi array nama-nama hari untuk di looping sehingga tidak perlu melakukan then catch sebanyak 7 kali

// a. then catch
days.forEach((day) => {                                                                                // melooping hari
    cekHariKerja(day)                                                                                  // memanggil function cekHariKerja
    .then(result => console.log(`hari ${result} adalah hari kerja`))                                   // melakukan method chaining then untuk menangkap hasil resolve di promise
    .catch(error => console.log(`hari ini adalah hari ${day} dan ${error.message}`))                   // melakukan method chaining catch untuk menangkap hasil reject di promise
})





// b. try catch
const validasi = async(day) => {                                                                       // membuat function validasi dan menambahkan kata "async" untuk menandai bahwa fungsi tersebut akan di jalankan secara asyncronous
    try {                                                                                              // menggunakan method "try" untuk menghandle hasil resolve di promise
        const result = await cekHariKerja(day)                                                         // membuat variable result yang di assign dengna pemanggilan fungsi cekHariKerja dengan kata "await" yang berguna untuk menunggu/menahan eksekusi sampai proses asynchronous selesai 
        console.log(`hari ${result} adalah hari kerja`)                                                // mengeksekusi hasil resolve
    } catch (error) {                                                                                  // menggunakan method "catch" untuk menghandle hasil reject di promise
        console.log(`hari ini adalah hari ${day} dan ${error.message}`)                                // mengeksekusi hasil reject
    }
}

days.forEach((day) => {                                                                                // meloping nama hari
    validasi(day)                                                                                      // memanggil fungsi validasi dan mengirim parameter nama hari di tiap loopingan
})