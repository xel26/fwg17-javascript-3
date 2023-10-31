const data = fetch("https://jsonplaceholder.typicode.com/users")





const display = (response) => {
    if(response.status === 200){
        response.json().then(result => {
            result.forEach(object => console.log(object.name))
        })
    }else {
        console.log("data not found")
    }
}




// then catch :
data.then(display).catch (error => console.log(error.message))




// async await :
const getName = async (callback) => {
    try {
        let response = await data
        callback(response)
    } catch (error) {
        console.log(error.message)
    }
}
getName(display)
