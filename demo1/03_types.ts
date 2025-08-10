// let a:number = 10;

// // 可以使用 | 来连接多个类型(联合类型)
// // 字面量可以限制变量在某个范围内
// let b: "male" | "female";
// b = "female";
// b = "male";

// let c:boolean | string
// c = true;
// c = "hello";

// // any表示的是任意类型，一个变量设置类型为any后，相当于对该变量关闭了TS的类型检测
// // 使用TS时，不建议使用any类型（隐式的any）
// let d: any;
// d = 10;
// d = 'hello';
// d = true;

// // unknown 表示未知类型的值
// let e: unknown;
// e = 10;
// e = 'hello';
// e = true;

// let s:string;

// e = 'hello';
// // s = e;  //不能将类型“unknown”分配给类型“string”。
// // unknown 实际上是一个类型安全的any
// // unknown类型的变量，不能直接赋值给其他变量
// if(typeof e === "string"){
//     s = e;
// }

// // 类型断言,可以用来告诉解析器变量的实际类型
// /*
//     语法：
//         变量 as 类型
//         <类型>变量
// */ 
// s = e as string;
// s = <string>e;

// //void 用来表示空，以函数为例，就表示没有返回值的函数
// function fn1(): void{

// }

// //never 表示永远不会返回结果, 可用于抛出异常错误
// function fn2(): never{
//     throw new Error('报错了!');
// }
