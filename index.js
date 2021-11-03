const express = require("express")
let arr = require("./productos")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("views", "./views")
app.set("view engine", "ejs")


app.get("/", (req, res)=>{
    res.render("index")
})


app.get("/form", (req, res)=>{
    res.render("form")
})

app.get("/productos", (req, res)=>{
    res.render("listaP", {data:arr})
})



app.post("/form", (req, res)=>{
    console.log(req.body);
    let obj = {
        id: Math.random(),
        producto:req.body.producto,
        cantidad:req.body.cantidad
    }
    arr.push(obj),
    res.redirect("/productos")
})

// console.log(arr);



app.listen(4001, ()=>{
    console.log("Server runing...");
})