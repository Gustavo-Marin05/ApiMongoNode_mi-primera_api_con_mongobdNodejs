/* las dependencias desde el inicio
 npm  init --yes      -    npm i express     -    npm i nodemon -D

 npm i mongoose

 npm i dotenv

estas son las dependencias instaladas */

//--------------
//desde aqui es codigo para correr el servidor
const express =require('express');
const mongoose= require('mongoose');
require("dotenv").config();
const userRoutes =require("./routes/user");


const app =express();

const port =process.env.PORT || 9000
app.listen(9000,()=>console.log('server listenig on port',port));

//el comando para correr el servidor hacemos con el comando    npm run start

//---------------------

//middelware

app.use(express.json());//siempre colocar antes
app.use('/api',userRoutes);






//----------
//desde aqui comienzan las rutas

app.get('/',(req,res)=>{
    res.send('vienvenido');
});


//mongodn conection nosotros vamos al mongodb atlas y vamos a conested y seleccionamos  Connect to your application  y despues   drivers
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("conected to mongobd atlas")).catch((error)=>console.log(error));

//con esto ya creamos la coneccion a mongodb atlas