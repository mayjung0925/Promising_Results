//Promise.then() Chaining

// slowMath.add(6,2)
// .then((res)=>{

//     console.log(res);
//     return slowMath.multiply(res,2);

// }).then((res)=>{

//     console.log(res);
//     return slowMath.divide(res,4);

// }).then((res)=>{

//     console.log(res);
//     return slowMath.subtract(res,3);

// }).then((res)=>{

//     console.log(res);
//     return slowMath.add(res,98);

// }).then((res)=>{

//     console.log(res);
//     return slowMath.remainder(res, 2);

// }).then((res)=>{

//     console.log(res);
//     return slowMath.multiply(res, 50);

// }).then((res)=>{

//     console.log(res);
//     return slowMath.remainder(res, 40);

// }).then((res)=>{

//     console.log (res);
//     return slowMath.add(res, 32);

// }).then((res)=>{

//     console.log(`The final result is ${res}`);

// }).catch((err)=>{

//     console.log(err)

// })

// Async/Await

async function doMath(val1,val2) {
    try {
        let res = await slowMath.add(val1, val2);
        console.log(res);

        res = await slowMath.multiply(res,2);
        console.log(res);

        res = await slowMath.divide(res,4);
        console.log(res);

        res =  await  slowMath.subtract(res,3);
        console.log(res);

        res = await slowMath.add(res,98);
        console.log(res);

        res = await slowMath.remainder(res,2)
        console.log(res);

        res = await slowMath.multiply(res,50);
        console.log(res);

        res = await slowMath.remainder(res,40);
        console.log(res);

        res = await slowMath.add(res,32);
        console.log(`The final result is ${res}.`);



    } catch (e) {
        console.log(e);

    }
};

doMath(6,2)
