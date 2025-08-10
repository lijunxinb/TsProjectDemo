// // object表示一个js对象
// let a: object;

// // {} 用来指定对象中可以包含哪些属性
// // 语法：{属性名:属性值,属性名:属性值}
// // 在属性名后面加上问好?,表示属性是可选的
// let b: {name:string,age?:number};
// b = {name:'jack',age:18}; //类型 "{}" 中缺少属性 "name"，但类型 "{ name: string; }" 中需要该属性。


// // [属性名:string]:any  表示任意类型的属性
// let c:{name:string,[propName:string]:any};
// c = {name:'mark',age:18,gender:'male'};


// /*
//     设置函数结构的类型声明：
//         语法：(形参:类型, 形参:类型 ...) => 返回值
// */

// //表示希望d是一个函数，希望d有两个number类型的参数，返回值也为参数
// let d: (a:number,b:number)=>number; 
// d = function(num1,num2):number{ //默认给 num1 和 num2 赋值
//     return num1 + num2;
// }


// /*
//     数组的类型声明：
//         类型[]
//         Array<类型>
// */
// // string[] 表示字符串数组
// let e: string[];
// e = ['a','b','c',];

// // number[] 表示数值数组 
// let f: number[];

// // Array<number> 与 number[] 表示的东西是一样的
// let g: Array<number>;
// g = [1,2,3];

// /*
//     元组，元组就是固定长度的数组
//         语法：[类型,类型,类型,...]
// */

// let h: [string,string];
// h = ['hello','abc'];

// /*
//     enum 枚举
//  */
// enum Gender{
//     Male = 0,
//     Female = 1
// }
// let person:{name:string,gender: Gender};
// person = {
//     name:'jack',
//     gender: Gender.Male//'male'
// }

// // &表示同时,  相当于object?
// let j:{name:string}&{age:number};
// j = {name:'jack',age:18};

// // 类型的别名,相当于给string起别名
// type myType = string;
// type myNumType = 1 | 2 | 3 | 4 | 5;
// let k: myNumType;
// k = 1;
// k = 2;
// k = 5;
// // k = 6; //不能将类型“6”分配给类型“myNumType”。

let numArr: Array<number>;

numArr = [1,2,3,4];
for(let i = 0;i<numArr.length;i++){
    console.log(numArr[i]);
}

numArr.push(5);
for(let i = 0;i<numArr.length;i++){
    console.log(numArr[i]);
}

numArr.pop();
for(let i = 0;i<numArr.length;i++){
    console.log(numArr[i]);
}

