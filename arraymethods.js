// let array=[1,2,3,4,5,6,7,8,9];
// console.log(array);
// let newarray=array.map((value,index,array)=>{
//     return value>5

// })
// console.log(newarray)
// // task 2
// let array=["banana","mango","cherry"]
 
// console.log(array);

// let new_array = array.map(arr => arr.toUpperCase())

// console.log(new_array);


//  let fruits = ["apple", "banana", "mango"];

// let upperFruits = fruits.map(fruit => fruit.toUpperCase());

// console.log(upperFruits);
// Output: ["APPLE", "BANANA", "MANGO"]
// let array=[obj={
//     name:"shahbaz",age:"23",
//     name1:"qalander",age:"23",
    
// }];
// console.log(array);
// let newarray=array.map((obj)=>{
//     console.log(obj.name.name1);
    
//     console.log(obj.name)
//     console.log(obj.name1)
// })

// console.log(newarray);
// 🔹 map() – "Badalne wala"
// ➡️ Har item ko badalta hai (transform)
// ➡️ Sabhi items ka naya array banata hai
// ➡️ Array ki length same rehti hai

// js
// Copy
// Edit
// let arr = [1, 2, 3];
// let result = arr.map(x => x * 2);  // [2, 4, 6]
// 🔸 filter() – "Chhannne wala"
// ➡️ Sirf condition pass karne wale items ko rakhata hai
// ➡️ Array ki length kam ho sakti hai
// ➡️ Items ko remove karta hai, badalta nahi



// filter array method
// let array=[1,2,3,4,5,6,7,8,];
// console.log(array);
// let new_array=array.filter((value,index,array)=>{
//     return value>5

// })
// console.log(new_array);
// task 1
// let array=[1,2,3,4,5,6,7,8,9,10,11,12,13];
// let chk_even_numb=array.filter((value,index,array)=>{
//     return value%2==0;


// })
// console.log(chk_even_numb);
// task 2
// let array=[
//     { name: "Ali", age: 16 },
//   { name: "Sana", age: 21 },
//   { name: "Zara", age: 18 },
//   { name: "Ahmed", age: 14 }
    
// ]
// console.log(array);
// let chk_age=array.filter((item)=>{

//     return 18<=item.age
// })
// console.log(chk_age);
// let array=["hello", "", null, "world", undefined, "saylani", false]
// console.log(array);
// let new_array=array.filter((item)=>{
//     return typeof item==`string`&&item.length > 0;
// })
// console.log(new_array);

// forEach Array method 
// Method	Naya array?	Return value
// forEach()	❌ Nahi	undefined
// map()	✅ Haan	New transformed array
// let array=[1,2,3,4,5,6,7,8]
// array.forEach(element => {
  
//   console.log(element+"*2"+"="+`${element*2}`);
  
    
// });
// let array=[1,2,3,4,5,6,7,8]
// array.forEach(element => {
//     if(element%2==0){
//         console.log(`${element}`+" "+"even number");
        
//     }
//     else{
//         console.log(`${element}`+" "+"odd")
//     }
    
// });
// let fruits = ["apple", "banana", "mango"];
// fruits.forEach(element => {
//     console.log("i like"+" "+`${element}`)
// });
// let names = ["Ali", "Fatima", "Zain"];
// names.forEach((element)=>{
//     console.log("welcome to"+""+` ${element}`)
// })
// find array method
//  let array=[1,2,3,4,5,6,7,8]
//  let find=array.find((value)=>{
//     return value>5;
//  })
//  console.log(find)
// flat array method
// Method	New Array Return?	Description
// flat()	✅ Haan	Nested array ko seedha karta hai


// let array=[1,2,3,4,5,[6,7,8,9,10,[11,12,13,14,15]]]
// console.log(array)

// let flat=array.flat(2);
// console.log(flat);
// let arr = [1, 2, [3, [4, [5]]]];
// let flat=arr.flat(3)
// console.log(flat);
// reduce array method
// let array=[1,2,3,4,5,6,7,8];
// let new_array=array.reduce((accu, current_value,index,array)=>{
//      console.log(accu,current_value)
//     return accu+current_value

// },);
// console.log(new_array);
// let array=[1,2,3,4,5,6,7,8];
// let result=array.reduce((accu,current_value,index,array)=>{
//      return accu > current_value ? accu:current_value;
   
// })
// console.log(result);

// console.log(accu)
// let str=["ali","ahmad","yasir"]
// let result=str.reduce((acuu,current_value,index)=>{
//     return acuu+current_value.length;
// },0)
// console.log(result);
// let concatstr=["i","love","javascript"];
// let check=concatstr.reduce((accu,value)=>{
//    return accu+" "+value;
// })
// console.log(check);





