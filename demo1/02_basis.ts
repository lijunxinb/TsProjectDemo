// // let a;

// // a = 10;
// // a = 'hello';

// // 声明一个变量a，同时指定它的类型为number
// // a的类型设置为了number，在以后的使用过程中a的值只能是数字
// let a: number;
// a = 10;
// a = 33;
// // a = 'hello'; //a 的类型是number，不能赋值字符串


// // 声明完变量，直接赋值
// // 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
// let bFlag: boolean = true;


// // JS中的函数是不考虑参数的类型和个数的
// // function sum(a ,b){
// //     return a + b;
// // }
// // console.log(sum(123,456)) // 579:number
// // console.log(sum(123,"456")); //123456:string

// // TS中的函数可以规定参数的类型和返回值
// function sum(a: number,b: number): number{
//     return a + b;
// }
// let res = sum(123,456); //let res: number
// // sum(123,"456");  //类型“string”的参数不能赋给类型“number”的参数。
// // sum(123,456,789);   //应有 2 个参数，但获得 3 个。
