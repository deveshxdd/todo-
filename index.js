import express from 'express';
import connectdb from './db/index.model.js';
import { todomodel } from './models/todo.model.js';
const app = express()
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('./views/index')
})
connectdb().then(()=>{
    app.listen('2000',()=>{
       
    })
}).catch(()=>{
    console.log("something error occured")
})


