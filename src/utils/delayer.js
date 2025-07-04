export  function delayer(func,ms){
    return new Promise(resolve =>{
        setTimeout(()=>resolve(func()),ms)
    })

}