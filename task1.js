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
                reject(new Error(`hari ini adalah hari ${day} dan Hari ini bukan hari kerja`))          // jika false maka akan memanggil callback "reject" dengan mengirim parameter new Error beserta message di dalamnya yang berfungsi untuk menghandle proses promise yang gagal
            }
        }, 3000);                                                                                       // menentukan waktu eksekusi program. jadi setelah 3 detik program baru akan di eksekusi
    })
}









// A. then catch
const cek = (hari, callback) => {                                                           // membuat fungi cek yang menerima dua parameter
    callback(hari)                                                                          // memanggil fungsi callback dan mengirim parameter hari        
    .then(result => console.log(`hari ${result} adalah hari kerja`))                        // melakukan method chaining then untuk menangkap hasil resolve di promise berupa "string" nama hari lalu menampilkannya
    .catch(error => console.log(error.message))                                             // melakukan method chaining catch untuk menangkap hasil reject di promise pesan new Error lalu menampilkannya
}

cek("senin", cekHariKerja)                                                                  // memanggil fungsi cek dengan mengirim parameter nama hari dan callback cekHariKerja
cek("sabtu", cekHariKerja)






// B. try catch
const validasi = async(hari, callback) => {                                                 // membuat fungsi validasi dan menambahkan kata "async" untuk menandai bahwa program akan di jalankan secara asyncronous
    try {                                                                                   // menggunakan method "try" untuk menghandle hasil resolve di promise
        const result = await callback(hari)                                                 // inisialisasi variable result dengan pemanggilan fungsi callback dengan menambahkan kata  "await" yang berguna untuk menunggu/menahan eksekusi sampai proses asynchronous selesai dan hasil di dapatkan
        console.log(`hari ${result} adalah hari kerja`)                                     // mengeksekusi hasil resolve
    } catch (error) {                                                                       // menggunakan method "catch" untuk menghandle hasil reject di promise
        console.log(error.message)                                                          // mengeksekusi hasil reject
    }
}

validasi("selasa", cekHariKerja)                                                            // memanggil fungsi validasi dan mengirim parameter hari dan callback cekHariKerja
validasi("minggu", cekHariKerja)