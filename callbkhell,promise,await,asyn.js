// // // console.log("welcome to javascript code");
// // // function getData(id){
// // //     setTimeout(()=>{
// // //         console.log("data"+id)

// // //     },1000)

// // // }
// // // getData(1)
// // // getData(2)
// // // getData(3)

// // // call back hell
// // // nested callbacks stacks below one another forming a pyramid stracure
// // // Jab koi kaam complete ho jaye, to ek aur function ko baad mein call karo.
// // // Kaam hone ke baad mujhe bula lena"
// // // this type of code is difficult to understand
// // // function getData(id,checknextdata){
// // //     setTimeout(()=>{
// // //         console.log("data"+id)
// // //         if(checknextdata){
// // //             checknextdata();
// // //         }

// // //     },1000)

// // // }
// // // getData(1,()=>{
// // //     getData(2,()=>{
// // //         getData(3,()=>{
// // //             getData(2)

// // //         })
// // //     })

// // // })
// // // promises
// // // to solve the call back hell problem then come to market promises
// // // / promise is basically object 
// // // it have three states its may be resloved reject our pending
// // // fetch return krta hai promise
// // // "Wada hai kaam ya to hoga ya fail hoga"
// // let promise1=new Promise((resolve,reject)=>{
// //     resolve("promise is resolved")

// // })
// // function getData(id,checknextdata){
// //    return prom= new Promise((resolve,reject)=>{
// //           setTimeout(()=>{
// //         console.log("data",id);
// //         resolve("success");
// //         if(checknextdata){
// //             checknextdata();
// //         }
// //     },5000);
// //     });
// //      }
// //      let result=getData(123);
// //      console.log(result)
// // // resolve and reject are the call back function that is provided by js 
// // // 
// // let promise=()=>{
// //     return prom=new Promise((resol,reject)=>{
// //       resol();


// //     })
// // }
// // let newpromise=promise();

// // newpromise.then((result)=>{
// //     // console.log(result)
// //     console.log("promise is resol")
// // })
// // newpromise.catch((err)=>{
// //     console.log(err);

// // })
// // // promise chaining
// // // let asyn1 = () => {
// // //     return prom = new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             resolve("promise is resolved")
// // //              console.log("data1");
// // //         }, 2000);
// // //     })
// // // }
// // // let asyn2 = () => {
// // //     return prom = new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             resolve("promise is resolved")
// // //             console.log("data2");


// // //         }, 5000);
// // //     })
// // // }
// // // console.log("data 1 is fetching")
// // // let p1 = asyn1();
// // // p1.then((result) => {

// // //     console.log(result)
// // //     console.log("data 2 is fetching");
    
// // //     let p2 = asyn2();
// // //     p2.then((result) => {
// // //         console.log(result);
// // //     })
// // // })
// //  async await
// // async aur await JavaScript mein asynchronous code
// //  ko handle karne ke liye modern tareeqe hain.
// //   Ye dono Promises ke sath kaam karte hain aur asynchronous 
// //   operations (jaise API calls, delays, file reading, etc.) ko likhne 
// //   aur samajhne mein asaan banate hain — jaise synchronous code dikhta hai.

// function api(para){
//     return new Promise((resol,reject)=>{
//         setTimeout(() => {
//            console.log(para);
           
//              resol(200);
            
//         }, 1000);
//     })
// }
// async function display() {
//     await api(1);
//     await api(2)
//     await api(3)
//     await api(4)
    
// }
// console.log(display());













