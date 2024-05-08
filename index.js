import express, { urlencoded } from 'express';
import connectdb from './db/index.model.js';
import { todomodel } from './models/todo.model.js';
import path from 'path'
const app = express()
app.use(urlencoded({extended:"false"}))
app.set('view engine','ejs')
app.set("views", path.resolve("./views"))
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/',(req,res)=>{
const text = req.body;
console.log(text.text)

})
connectdb().then(()=>{
    app.listen('2000',()=>{
       
    })
}).catch(()=>{
    console.log("something error occured")
})


