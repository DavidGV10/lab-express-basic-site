const express = require("express")
const path = require("path")
const app = express();
const hbs = require("hbs");
const template = hbs.compile("Name : {{name}}");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "/views/partials"))


const data = {
    name: "Ricky",
    surname: "Gervais"
}
app.use(express.static(path.join(__dirname, "/public")))
//app.use(express.static(path.join(__dirname, "/views")))
app.all("/", (request, response)=>{
    response.render("home", data)
})

app.all("/home", (request, response)=>{
    response.render("home", data)
})

app.all("/about", (request, response)=>{
    response.render("about")
})
app.all("/works", (request, response)=>{
    response.render("works")
})
app.all("/gallery", (request, response)=>{
    response.render("gallery")
})
app.listen(3000, ()=>{

})