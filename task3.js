const getName = (callback) => {                                             // membuat function getName yang menerima parameter callback
    fetch("https://jsonplaceholder.typicode.com/users")                     // melakukan fetch yg mereturn promise
    .then(response => {                                                     // menghandle hasil eksekusi fetch yang sukses atau resolve
        callback(null, response)                                                  // memanggil callback dan mengirim hasil fetch di parameter callback
    })
    .catch (error => {                                                      // menghandle hasil eksekusi fetch yang gagal atau reject
        callback(`${error.message} data not found`, {})                     // menampilkan pesan error
    })
}





const display = (error, response) => {                                             // membuat function display yang menerima dua parameter 
    if(error === null){                                                            // jika error berisi nilai null
        response.json()                                                            // parsing data json yang mereturn promise. mengubah tipe data json menjadi array of object
        .then(result => {                                                          // menghandle hasil sukses atau resolve dari promise yang di return oleh metode json()
            result.forEach(object => {                                             // melooping tiap object dalam array
                console.log(object.name)                                           // mengambil nama dalam object dan menampilkannya
            });
        })
    }else{                                                                        // jika error tidak berisi nilai null atau berisi error
        console.log(error, response)                                              // menampilkan pesan error
    }
}



getName(display)                                                                   // memanggil fungsi getName dengan mengirim fungsi display sebagai parameter