export{}
let message = "halo dunia, saya adalah type script"
// console.log(message)

let x = 10
const y = 20

let sum
const title = 'this is my first title on typescript'

let isBeginner : boolean = true
let total: number = 0
let name: string = 'onoy'

let sentence: string = `My name is ${name}
iam a beginner of typescript`

// console.log(sentence)

//declare variable null and undifined variable
let u: null = null
let n: undefined = undefined
// console.log(n)
let isNew: boolean = null
let myName: String = undefined
// console.log(isNew)

//declare array type
let list1: number[] = [1,2,3] //number with array
let list2: Array<number> = [1,2,3] //array with number
//one array declare number and string, kondisi ini harus berurutan, tidak boleh terpecah
let person1: [string, number] = ['wkwkw', 2]
// console.log(person1)

//declare enum type
enum Color { Red = 5, Green, Blue }
//start number in different value
let c: Color = Color.Green 
// console.log(c)

let randomValue: any = 10
randomValue = true
randomValue = 'Hendriyono'
// console.log(randomValue)

let myVariable: unknown = 10
function hasName (obj: any): obj is {name: string} {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name)
}
// (myVariable as string).toUpperCase()

let a
a = 10
a = true

let b = 20

//digunakan untuk data yang tidak bisa kita control
let multiType: number | boolean
multiType = 20
multiType = true

let anyType: any
anyType = 20
anyType = 1

// function in type script
function add(num1: number, num2: number): number{
    return num1 + num2
}
add(5,10)

function add_data(numb1: number, numb2?: number): number{ //tanda tanya digunakan jika parameter kosong maka nilainya undefined (optional parameter)
    if(numb2){
        return numb1 + numb2
    }else{
        return numb1
    }
}

function add_data2(numb1: number, numb2: number = 10): number{ // (default parameter)
    if(numb2){
        return numb1 + numb2
    }else{
        return numb1
    }
}
add(5,10) //jika datanya hanya 1 maka error | hasil 15
add_data(5) //jika datanya 2 tidak error | hasil 5
add_data2(5) //jika datanya 2 tidak error | hasil 15

//interface typescript
interface Person {
    firstname: string,
    lastname?: string
}

let fullname = (person: Person)=>{
    console.log(`${person.firstname} ${person.lastname}`)
}

let p = {
    firstname: 'Hendriyono'
}

fullname(p)

//class in typescript
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}

let m1 = new Employee(1123, 'hendriyono')
console.log(m1)








