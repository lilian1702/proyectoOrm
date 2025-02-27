const express= require('express');

const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

const usuarioRouter= require("./router/usuarioRouter");

app.use("/api", usuarioRouter);



const PORT =process.env.PORT;
app.listen(PORT, ()=>{
    console.log("el servidor corriendo")
});
