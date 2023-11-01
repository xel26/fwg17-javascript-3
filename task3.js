const data = fetch("https://jsonplaceholder.typicode.com/users")                                // inisialisasi variable data dengan metode fetch yang mengakses url tersebut 





const display = (result) => {                                                                   // membuat fungsi display yg menerima satu variable yang berisi array of object hasil parsing json
            if(result.length){                                                                  // memeriksa apakah result memiliki data atau tidak kosong
                result.forEach(object => console.log(object.name))                              // melooping tiap object dalam array lalu mengakses namanya untuk di tampilkan
            }else{                                                                              // jika result kosong maka akan melempar error yang akan di tangkap oleh catch
                throw new Error("data not found")
            }
}




// then catch :
data                                                                                           // melakukan method chaining untuk variable data yang berisi hasil dari fetch
.then(response => response.json()                                                              // method chaining untuk menangkap resolve dari hasil fetch lalu melakukan parsing json
                          .then(display)                                                       // memanggil fungsi diplay dan mengirim hasil parsing json untuk di looping
                          .catch(error => console.log(error.message))                          // method chaining untuk menangkap pesan error di dalam scope "then" lalu menampilkan pesan error
    )
.catch (error => console.log(error.message))                                                   // method chaining untuk menangkap reject dari hasil fetch lalu menampilkan pesan error




// async await :
const getName = async (data, callback) => {                                                   // membuat fungsi getName dengan menambahkan kata "async" untuk menandakan bahwa program akan di jalankan secara asynchronous. fungsi menerima satu parameter beruap callback
    try {                                                                                     // method async await untuk menangkap resolve dari hasil fetch
        try {
            const response = await data                                                       // inisialisasi variable response dengan variable data yang berisi resolve dengan tambahan kata "await" yang berguna untuk menunggu/menahan eksekusi sampai proses asynchronous selesai dan hasil di dapatkan
            const result = await response.json()                                              // inisialisasi variable result dengan data fetch yang di parse dari format json dengan tambahan kata "await" yang berguna untuk menunggu/menahan eksekusi sampai proses asynchronous selesai dan hasil di dapatkan
            callback(result)                                                                  // memanggil callback dan mengirim hasil data parsing json berupa array of object
        } catch (error) {                                                                     // method chaining untuk menangkap pesan error di dalam scope "then" lalu menampilkan pesan error
            console.log(error.message)
        }
    } catch (error){                                                                          // method chaining untuk menangkap reject dari hasil fetch lalu menampilkan pesan error
        console.log(error.message)
    }
}
getName(data, display)                                                                        // memanggil fungsi getName dan mengirim parameter data dan callback
