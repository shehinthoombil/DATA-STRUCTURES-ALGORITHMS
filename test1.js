// [{a:100,b:1},{a:50,b:2},{a:25,b:4},{a:12.5,b:8},{a:6.125,b:16}]// [{a:100,b:1},{a:50,b:2},{a:25,b:4},{a:12.5,b:8},{a:6.125,b:16}]

function fun(){
    const arr =[]
    let i =1
    while(i<=16){
        arr.push({a:100/i,b:i})
        i*=2
    }
    return arr
}
console.log(fun())