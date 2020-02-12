// import {generate} from 'shortid'
import express from "express"

console.log('hello from typescript')

const app = express()

// get request

app.get('/', (req) => {
    (req as any).name = 'hendriyono'
})

app.get('/test', (req: any) => {
    req.name = 'hendriyono test'
})

// function
const add = (a: number, b?: number) => {
    if(b){
        return a + b
    }else{
        return a
    }
}

app.get('/penjumlahan', (req: any) => {
    add(1)
    add(1 + 2)
    // add(1 + "b") return error
})

//interface and type
interface Params {
    a: number
    b: number
}

type Add = (x:Params) => number

const add1: Add = x =>{
    return x.a + x.b
}

app.get('/interfacetest', (req: any) =>{
    add1({a:1, b:2})
})


app.listen(3001, () => {
    console.log("started")
})
