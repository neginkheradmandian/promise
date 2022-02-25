let p = new Promise((resolve , reject) => {
    let a = 1+1;
    if (a ==2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})
p.then((message)=> {
    console.log(message)
}).catch((err)=> {
    console.log(err)
})

const recordOne = new Promise((resolve , reject)=> {
    resolve('Record one')
})
const recordTwo = new Promise((resolve , reject)=> {
    resolve('Record two')
})
const recordThree = new Promise((resolve , reject)=> {
    resolve('Record three')
})

Promise.all([
    recordOne,
    recordTwo,
    recordThree
]).then((message)=> {
    console.log(message)
})

Promise.race([
    recordOne,
    recordTwo,
    recordThree
]).then((message)=> {
    console.log(message)
})