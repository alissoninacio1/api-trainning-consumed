async function getContent() {
    try {
        const response = await fetch('http://localhost:4567/')
       // console.log(response)
       //await = olha so, espera o response transformar em json e guarda na variavel data
       const data = await response.json()
       show(data)
        
    } catch (error) {
        console.log(error)
    }           
}

getContent()

function show(users) {

    let output = ''

    for(let user of users) {
        output += `<li>${user.name}</li>`
    }
    document.querySelector('main').innerHTML = output;
}