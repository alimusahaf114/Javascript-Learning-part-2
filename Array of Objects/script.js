//         /// ========= Chainable Method==============
// class Calculator{
//     constructor(value = 0){
//         this.value = value ;
//     }
//     add(number){
//         this.value += number;
//         return this ;
//     }

//     subtract(number){
//         this.value -= number ;
//         return this ;
//     }

//     multiply(number){
//         this.value *= number ;
//         return this ;
//     }

// }
// const result = new Calculator(10).add(2).subtract(4).multiply(2);
// console.log(result);

// // const numbers=[1,2,3,4,5];
// // numbers.forEach((number , index) => {
// //     console.log(`Index: ${index} , Value: ${number}`);    
// // })









const fruits = [{name: "Musahaf Ali" , cast: "Kunbhar" , age: 21},
                {name: "Asif Ali" , cast: "Rajbani" , age: 19},
                {name: "Gulshan Murtaza" , cast: "jiend" , age: 21},
                {name: "Zafar Murtaza" , cast: "Jamalani" , age: 4},
                {name: "Madiha Murtaza" , cast: "My love" , age: 21}];

////// =============== Filter() =====================

    const yellowFruits = fruits.filter(fruit => fruit.age === 21);
    const bro  =yellowFruits.forEach(res => console.log(res.name));
    console.log(bro);
    

// // // console.log(fruits[2].name);
// // // console.log(fruits[4].cast);
// // // console.log(fruits[2].age);
// // // fruits.pop();
// // fruits.push({name: "Amir Ali" , cast: "Jamalani" , age: 16})
// // // console.log(fruits);


// //         //============== For Each Method ================

// // // fruits.forEach(fruit => console.log(fruit.name ,'-' , fruit.cast , '-', fruit.age))

// //         // ============= map() ===================

// // const fruitsName = fruits.map(fruit => fruit.name)
// // console.log(fruitsName);
