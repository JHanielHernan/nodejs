const express = require('express');

const app = express();
const port = 3000;

const lista = {nombre:"Haniel" , edad:18};

//Motor de plantillas
app.set('view engine','ejs');
app.set('views',__dirname + '/view');

app.use(express.static(__dirname + "/public"));

app.get('/home',(req,res)=>
{
    res.render("index", {titulo : "mi titulo dinamico"});
    
});
app.get('/servicios',(req,res)=>
{
    //send es una ruta
    res.render("servicios", {titulServicios : "mi titulo dinamico de servicios"});

});


app.use((req,res,next)=>{
    res.status(404).render('404',{
        titulo:404,
        descripcion:"Error"
    });
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});