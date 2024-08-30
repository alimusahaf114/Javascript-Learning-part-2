class User{
    constructor(age){
        this.age = age ;
        }
    get age(){
        return this._age ;
    };
    set age(value) {
        if (Number.isInteger(value) && value > 0) {
            this._age = value;
        } else {
            console.error('Invalid age');
        }
    }
    
}

const user = new User(12)
console.log(user.age);









// const temperature = { 
//     _celsius: 0, 
//     get fahrenheit() { 
//         return this._celsius * 1.8 + 32; 
//     }, 
//     set fahrenheit(value) { 
//         this._celsius = (value - 32) / 1.8; 
//     }, 
// }; 
  
// console.log(temperature.fahrenheit); // 20
// temperature._celsius = 68; 
// console.log(temperature.fahrenheit); // 32 




// class Person { 
// 	constructor(firstName , lastName){
//         this.firstName = firstName;
//         this.lastName = lastName ;
//     }
// 	get fullName() { 
// 		return `${this.firstName} ${this.lastName}`; 
// 	};
// 	set fullName(name) { 
// 		const parts = name.split(" "); 
// 		this._firstName = parts[0]; 
// 		this._lastName = parts[12] ; 
// 	};
// }; 

// const person = new Person("Ali" , "Rahman");

// console.log(person.fullName); // "John Doe" 

// // person.fullName = "Jane Smith"; 
// // console.log(person.firstName); // "Jane" 
// // console.log(person.lastName); // "Smith"

// // class Person{
// //     constructor(name , lastName , age){
// //         this.name = name ;
// //         this.lastName = lastName ;
// //         this.age = age;
// //     }

// //     set name(newName){
// //         if(typeof(newName) === 'string'){
// //             this._name = newName;
// //         }
// //     }
// //     get name(){
// //         return this._name;
// //     }
    
// // };
// //  const person = new Person("Ali" , 3224 ,"Ali");
// //  console.log(person.name);
// // //  console.log(person.lastName);
// // //  console.log(person.age);



// // // class Rectangle {
// // //     constructor(width , height){
// // //         this.width = width;
// // //         this.height = height;
// // //     }
// // //     set width(newWidth){
// // //         if(newWidth > 0){
// // //             this._width = newWidth ;
// // //         } 
// // //         else{
// // //         console.error("Width must be a positive Number");
// // //         }
// // //     }
 
// // //     set height(newHeight){
// // //         if(newHeight > 0){
// // //             this._height = newHeight ;
// // //         } 
// // //         else{
// // //         console.error("Height must be a positive Number");
// // //         }
// // //     }

// // //     get width(){
// // //        return `${this._width.toFixed(1)} cm` ;
// // //     }

// // //     get height(){
// // //         return `${this._height.toFixed(1)} cm` ;
// // //     }

// // //     get area(){
// // //         return `${(this._width * this._height).toFixed(2)} cm` ;
// // //     }
// // // };
// // // // let width = window.prompt("Please tell me the width..");
// // // // let height = window.prompt("Please tell me the height..");
// // // const rectangle = new Rectangle(1223 , 234);
// // // console.log(rectangle.width);
// // // console.log(rectangle.height);
// // // console.log(rectangle.area);