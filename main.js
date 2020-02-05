"use strict";
exports.__esModule = true;
var message = "halo dunia, saya adalah type script";
// console.log(message)
var x = 10;
var y = 20;
var sum;
var title = 'this is my first title on typescript';
var isBeginner = true;
var total = 0;
var name = 'onoy';
var sentence = "My name is " + name + "\niam a beginner of typescript";
// console.log(sentence)
//declare variable null and undifined variable
var u = null;
var n = undefined;
// console.log(n)
var isNew = null;
var myName = undefined;
// console.log(isNew)
//declare array type
var list1 = [1, 2, 3]; //number with array
var list2 = [1, 2, 3]; //array with number
//one array declare number and string, kondisi ini harus berurutan, tidak boleh terpecah
var person1 = ['wkwkw', 2];
// console.log(person1)
//declare enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
//start number in different value
var c = Color.Green;
// console.log(c)
var randomValue = 10;
randomValue = true;
randomValue = 'Hendriyono';
// console.log(randomValue)
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase()
var a;
a = 10;
a = true;
var b = 20;
//digunakan untuk data yang tidak bisa kita control
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = 1;
// function in type script
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
function add_data(numb1, numb2) {
    if (numb2) {
        return numb1 + numb2;
    }
    else {
        return numb1;
    }
}
function add_data2(numb1, numb2) {
    if (numb2 === void 0) { numb2 = 10; }
    if (numb2) {
        return numb1 + numb2;
    }
    else {
        return numb1;
    }
}
add(5, 10); //jika datanya hanya 1 maka error | hasil 15
add_data(5); //jika datanya 2 tidak error | hasil 5
add_data2(5); //jika datanya 2 tidak error | hasil 15
var fullname = function (person) {
    console.log(person.firstname + " " + person.lastname);
};
var p = {
    firstname: 'Hendriyono'
};
fullname(p);
//class in typescript
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
var m1 = new Employee(1123, 'hendriyono');
console.log(m1);
