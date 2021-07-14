const express=require("express");
const app=express();
const port=3030;
app.use(express.static("public"));


const mainRouter=require("./routes/mainRouter");

app.use("/",mainRouter);

app.use("/",mainRouter);

app.listen(port, ()=>{
    console.log("Servidor corriendo en puerto: "+ port)
})